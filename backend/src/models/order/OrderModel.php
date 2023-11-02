<?php
namespace App\Models\order;

use App\Config\ResponseHttp;
use App\Models\ORM;
use App\Models\order\validator\OrderValidate;
use Twilio\Rest\Client;


/**
 * OrderModel class that inherits from ORM
 */
class OrderModel extends ORM
{
    // Class properties
    protected $table = 'orders';
    private $id_order;
    private $id_customer;
    private $id_status = 1;



    /**
     *  Class constructor, receives an array of data to initialize properties
     */
    public function __construct(array $data)
    {
        //call the ORM constructor with the table name and identifier
        parent::__construct($this->table, "id_order");
        $this->id_order = $data['id_order'] ?? null;
        $this->id_customer = $data['id_customer'] ?? null;
        $this->id_status = $data['id_status'] ?? null;
    }

    /**
     * Getters
     * Getters to obtain the values of the properties
     */
    public function getId()
    {
        return $this->id_order;
    }

    public function getId_customer()
    {
        return $this->id_customer;
    }

    public function getId_status()
    {
        return $this->id_status;
    }



    /**
     * Setters
     * Setters to assign values to properties
     */
    public function setId_status()
    {
        return $this->id_status;
    }



    //GET BY ID
    public static function getOrderById(int $id_order)
    {

        try {
            $con = self::getConnection();

            $query = $con->prepare("
                    SELECT * FROM view_orders o
                    WHERE o.id_order = :id
                ");

            $query->execute([':id' => $id_order]);

            if ($query->rowCount() > 0) {
                $result = $query->fetch(\PDO::FETCH_ASSOC);
                $order = array('order' => $result);
                return json_encode($order);
            } else {
                return null;
            }
        } catch (\PDOException $e) {
            error_log("OrderModel::getOrderById -> " . $e);
            die(json_encode(ResponseHttp::status500('Error fetching order')));
        }
    }


    //GET ALL ORDERS

    public static function getOrders()
    {

        try {

            $con = self::getConnection();
            $query = $con->prepare("
                    SELECT * FROM view_orders;");
            $query->execute();

            // Retorna los resultados como objetos OrderModel
            $query->execute();
            $results = $query->fetchAll(\PDO::FETCH_ASSOC);
            if ($results) {
                return $results;
            } else {
                return null;
            }
        } catch (\PDOException $e) {
            error_log("OrdersModel::getAllActive -> " . $e);
            die(json_encode(ResponseHttp::status500('Error fetching orders')));
        }
    }



//CREATE ORDER  
public static function createNewOrder(array $data)
{

    try {
        $con = self::getConnection();

        $customerData = $data['customer'];
        $username = $customerData['username'];
        $phone = $customerData['phone'];
        $address = $customerData['address'];

        //valida si los nombres son correctos
        $productsData = OrderValidate::validateProducts($data['products'])
            ? json_encode($data['products'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
            : null;
        $combosData = OrderValidate::validateCombos($data['combos'])
            ? json_encode($data['combos'], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
            : null;
        //sin productos y combos
        if ($productsData == null && $combosData == null)
            return;

        // Prepara la consulta SQL STORAGE PROCEDURE -> RETURN ID_ORDER
        $query = $con->prepare("CALL create_order(:username, :phone, :address, :products, :combos, @id_order)");
        $query->bindParam(':username', $username);
        $query->bindParam(':phone', $phone);
        $query->bindParam(':address', $address);
        $query->bindParam(':products', $productsData);
        $query->bindParam(':combos', $combosData);

        $query->execute();

        // Get the ID of the created order
        $query = $con->prepare("SELECT @id_order AS id_order");
        $query->execute();
        $result = $query->fetch(\PDO::FETCH_ASSOC);
        $id_order = $result['id_order'];

        // Llama a la función para enviar el mensaje de WhatsApp
        $order = OrderModel::getOrderById($id_order);
        if ($order) {
            $orderData = json_decode($order, true);
            $messageText = "¡Nueva orden creada!\n";
            $messageText .= "ID de orden: " . $orderData['order']['id_order'] . "\n";
            $messageText .= "Cliente: " . $customerData['username'] . "\n";
            $messageText .= "Teléfono: " . $customerData['phone'] . "\n";
            $messageText .= "Dirección: " . $customerData['address'] . "\n";

            $phoneWapp = $customerData['phone'];
            $messageText = str_replace(["\n", "\t"], ' ', $messageText);
            $messageText = preg_replace('/\s{4,}/', ' ', $messageText);
            // Llama a la función para enviar el mensaje de WhatsApp
            self::sendWhatsAppMessage($phoneWapp, $messageText);
        }

        // Devuelve la respuesta después de enviar el mensaje de WhatsApp
        return $order;

    } catch (\PDOException $e) {
        error_log("OrderModel::createOrder -> " . $e);
        return false;
    } catch (\Exception $e) {
        error_log("OrderModel::createOrder -> " . $e->getMessage());
        return false;
    }
}

private static function sendWhatsAppMessage($phoneWapp, $messageText  )
{
    // Configura y utiliza la API de WhatsApp Business
    $token = "ID_TOKEN";
    //traer el numero del la orden del mensajeText phone
    $url = "https://graph.facebook.com/v17.0/102091889664276/messages";

    $message = json_encode([
        'messaging_product' => 'whatsapp',
        'to' => $phoneWapp,
        'type' => 'template',
        'template' => [
            'name' => 'orden',
            'language' => [
                'code' => 'es'
            ],
            'components' => [
                [
                    'type' => 'body',
                    'parameters' => [
                        [
                            'type' => 'text',
                            'text' => $messageText
                        ]
                    ]
                ]
            ]

        ]
    ]);

    $json = json_decode($message);
    if ($json === null) {
        error_log("OrderModel::sendWhatsAppMessage -> " . $message);
        return;
    }

    $header = array("Authorization: Bearer " . $token, "Content-Type: application/json");

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $message);

    $response = json_decode(curl_exec($ch), true);
    print_r($response);
    curl_close($ch);
}





    //UPDATE
    public static function updateProduct(int $id_product, array $data)
    {
    }


    //DELETE
    public static function deleteOrder(int $id_order)
    {
    }
    /*****other class-specific methods ****/

}