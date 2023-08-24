<?php
namespace App\Models;

use App\Config\ResponseHttp;
use App\Models\ORM;

/**
 * FoodModel class that inherits from ORM
 */
class FoodModel extends ORM{
   // Class properties
    protected $table = 'foods';
    private $id;
    private $name;
    private $description;
    private $id_category;
    private $price;
    private $status = 1;

    
    /**
     *  Class constructor, receives an array of data to initialize properties
     */
    public function __construct(array $data){
        //call the ORM constructor with the table name and identifier
        parent::__construct($this->table, "id");
        $this->id = $data['id'] ?? null;
        $this->name = $data['name'] ?? null;
        $this->description = $data['description'] ?? null;
        $this->id_category = $data['id_category'] ?? null;
        $this->price = $data['price'] ?? null;
    }
    
    /**
     * Getters
     * Getters to obtain the values of the properties
     */
    public function getId() { return $this->id; }
    public function getName() { return $this->name; }
    public function getDescription() { return $this->description; }
    public function getIdCategory() { return $this->id_category; }
    public function getPrice() { return $this->price; }
    public function getStatus() { return $this->status; }

    /**
     * Setters
     * Setters to assign values to properties
     */
    public function setName(string $name) { $this->name = $name; }
    public function setDescription(string $description) { $this->description = $description; }
    public function setIdCategory(int $id_category) { $this->id_category = $id_category; }
    public function setPrice(int $price) { $this->price = $price; }
    public function setStatus(int $status) { $this->status = $status; }

    /**
     * Query food by ID
     * Método para obtener una comida por su ID
     * 
    */
    /*public static function getFoodById($id){
        try {
            // Obtiene la conexión a la base de datos
            $con = self::getConnection();
            // Prepara y ejecuta la consulta SQL
            $query = $con->prepare("
                SELECT f.name food_name, f.description, f.price, c.name_category category_name
                FROM foods f
                JOIN categories c ON f.id_category = c.id_category
                WHERE f.id = :id AND f.status = 1
            ");
            $query->execute(['id' => $id]);
            // Retorna el resultado o un mensaje si no se encuentra la comida            
            $result = $query->fetch(\PDO::FETCH_ASSOC);
            return $result ? ['data' => $result] : ['message' => 'Food not found' ];
        } catch (\PDOException $e) {
            error_log("FoodModel::getFoodById -> ".$e);
            die(json_encode(ResponseHttp::status500('Error fetching food by ID')));
        }
    }*/
    
    
    /**
     * 
     * Check all the foods active
     * Method to consult all active meals
     * 
     */
    final public static function getAllActive(){
        try {
            $con = self::getConnection();
            $query = $con->prepare("SELECT f.name food_name, f.description, f.price, c.name_category category_name
            FROM foods f
            JOIN categories c ON f.id_category = c.id_category
            WHERE f.status = 1;  -- show only active meals
            ");
            $query->execute();
            $rs['data'] = $query->fetchAll(\PDO::FETCH_ASSOC);
            return $rs;
        } catch (\PDOException $e) {
            error_log("FoodModel::getAllActive -> ".$e);
            die(json_encode(ResponseHttp::status500('Unable to get the data')));
        }
    }

 /*****other class-specific methods ****/

}