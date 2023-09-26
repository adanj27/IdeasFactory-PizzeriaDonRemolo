<?php
namespace App\Models;

use App\Config\ResponseHttp;
use App\Models\ORM;

/**
 * FoodModel class that inherits from ORM
 */
class productModel extends ORM
{
    // Class properties
    protected $table = 'products';
    private $id_product;
    private $product_name;
    private $product_description;
    private $id_category;
    private $price;
    private $product_status = 1;
    private $products_count;


    /**
     *  Class constructor, receives an array of data to initialize properties
     */
    public function __construct(array $data)
    {
        //call the ORM constructor with the table name and identifier
        parent::__construct($this->table, "id_product");
        $this->id_product = $data['id_product'] ?? null;
        $this->product_name = $data['product_name'] ?? null;
        $this->product_description = $data['product_description'] ?? null;
        $this->id_category = $data['id_category'] ?? null;
        $this->price = $data['price'] ?? null;
        $this->product_status = $data['product_status'] ?? null;
        $this->products_count = $data['products_count'] ?? null;
    }

    /**
     * Getters
     * Getters to obtain the values of the properties
     */
    public function getId()
    {
        return $this->id_product;
    }
    public function getName()
    {
        return $this->product_name;
    }
    public function getDescription()
    {
        return $this->product_description;
    }
    public function getIdCategory()
    {
        return $this->id_category;
    }
    public function getPrice()
    {
        return $this->price;
    }
    public function getStatus()
    {
        return $this->product_status;
    }
    public function getProductsCount()
    {
        return $this->products_count;
    }

    /**
     * Setters
     * Setters to assign values to properties
     */
    public function setName(string $name)
    {
        $this->name = $name;
    }
    public function setDescription(string $description)
    {
        $this->description = $description;
    }
    public function setIdCategory(int $id_category)
    {
        $this->id_category = $id_category;
    }
    public function setPrice(float $price)
    {
        $this->price = $price;
    }
    public function setStatus(int $status)
    {
        $this->status = $status;
    }
    public function setProductsCount(int $products_count)
    {
        $this->products_count = $products_count;
    }

    /**
     * Query product by ID
     * Método para obtener una comida por su ID
     * 
     */
    final public static function getProductById(int $id_product)
    {
        try {
            // Obtiene la conexión a la base de datos
            $con = self::getConnection(); // Asegúrate de tener este método en la clase ORM

            // Prepara y ejecuta la consulta SQL con INNER JOIN en la tabla de categorías
            $query = $con->prepare("
                SELECT p.product_name, p.product_description, c.name_category category_name, p.price, p.products_count, p.product_status 
                FROM products p
                JOIN categories c ON p.id_category = c.id_category
                WHERE p.id_product = :id AND p.product_status = 1
            ");

            // Pasa el valor de :id_product como parte de un array asociativo
            $query->execute([':id' => $id_product]);

            // Retorna el resultado o un mensaje si no se encuentra el producto
            $result = $query->fetch(\PDO::FETCH_ASSOC);
            if ($result) {
                return $result;
            } else {
                return null;
            }
        } catch (\PDOException $e) {
            error_log("productModel::getProductById -> " . $e);
            die(json_encode(ResponseHttp::status500('Error fetching product')));
        }
    }
    /**
     * Get all active products
     * Obtiene todos los productos activos con product_status = 1
     *
     * @return array|null Un array de objetos productModel con product_status = 1 o null si no hay productos activos.
     */
    public static function getAllActiveProducts()
    {
        try {
            // Obtiene la conexión a la base de datos
            $con = self::getConnection(); // Asegúrate de tener este método en la clase ORM

            // Prepara y ejecuta la consulta SQL
            $query = $con->prepare("
            SELECT p.product_name, p.product_description, c.name_category category_name, p.price, p.products_count, p.product_status 
                FROM products p
                JOIN categories c ON p.id_category = c.id_category
                WHERE p.product_status = 1
        ");
            $query->execute();

            // Retorna los resultados como objetos productModel
            $query->execute();
            $rs = $query->fetchAll(\PDO::FETCH_ASSOC);
            if ($rs) {
                return $rs;
            } else {
                return null;
            }
        } catch (\PDOException $e) {
            error_log("productModel::getAllActiveProducts -> " . $e);
            die(json_encode(ResponseHttp::status500('Error fetching active products')));
        }
    }
    /**
     * Crea un nuevo producto en la base de datos.
     *
     * @param array $data Los datos del producto a crear.
     * @return bool True si se crea con éxito, false en caso contrario.
     */
    public static function createProduct(array $data)
    {
        try {
            // Obtiene la conexión a la base de datos
            $con = self::getConnection(); // Asegúrate de tener este método en la clase ORM

            // Prepara la consulta SQL de inserción
            $query = $con->prepare("
            INSERT INTO products (product_name, product_description, id_category, price, product_status, products_count)
            VALUES (?, ?, ?, ?, 1, ?)
        ");

            // Ejecuta la consulta SQL con los valores proporcionados
            return $query->execute([
                $data['product_name'],
                $data['product_description'],
                $data['id_category'],
                $data['price'],
                $data['products_count']
            ]);
        } catch (\PDOException $e) {
            error_log("productModel::createProduct -> " . $e);
            return false; // Error al crear el producto
        }
    }

    /**
     * Actualiza un producto existente en la base de datos.
     *
     * @param int $id_product El ID del producto a actualizar.
     * @param array $data Los datos actualizados del producto.
     * @return bool True si se actualiza con éxito, false en caso contrario.
     */
    public static function updateProduct(int $id_product, array $data)
    {
        try {
            // Obtiene la conexión a la base de datos
            $con = self::getConnection(); // Asegúrate de tener este método en la clase ORM

            // Prepara la consulta SQL de actualización
            $query = $con->prepare("
            UPDATE products
            SET product_name = ?, product_description = ?, id_category = ?, price = ?, products_count = ?
            WHERE id_product = ? AND product_status = 1
        ");

            // Ejecuta la consulta SQL con los valores proporcionados
            return $query->execute([
                $data['product_name'],
                $data['product_description'],
                $data['id_category'],
                $data['price'],
                $data['products_count'],
                $id_product
            ]);
        } catch (\PDOException $e) {
            error_log("productModel::updateProduct -> " . $e);
            return false; // Error al actualizar el producto
        }
    }
    /**
     * Desactiva un producto estableciendo product_status a 0 en la base de datos.
     *
     * @param int $id_product El ID del producto a desactivar.
     * @return bool True si se desactiva con éxito, false en caso contrario.
     */
    public static function deactivateProduct(int $id_product)
    {
        try {
            // Obtiene la conexión a la base de datos
            $con = self::getConnection(); // Asegúrate de tener este método en la clase ORM

            // Prepara la consulta SQL de desactivación
            $query = $con->prepare("
            UPDATE products
            SET product_status = 0
            WHERE id_product = ? AND product_status = 1
        ");

            // Ejecuta la consulta SQL con el ID del producto
            return $query->execute([$id_product]);
        } catch (\PDOException $e) {
            error_log("productModel::deactivateProduct -> " . $e);
            return false; // Error al desactivar el producto
        }
    }
    /*****other class-specific methods ****/

}