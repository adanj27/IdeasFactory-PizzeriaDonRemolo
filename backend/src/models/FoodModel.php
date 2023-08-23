<?php
namespace App\Models;

use App\Config\ResponseHttp;
use App\DB\ConnectionDB;
use App\DB\Sql;

/**
 * FoodModel class inheriting from ConnectionDB
 */
class FoodModel extends ConnectionDB {
    // class properties
    private $id;
    private $name;
    private $description;
    private $id_category;
    private $price;
    private $status = 1;
    
    /**
     * Class constructor, receives an array of data to initialize properties
     */
    public function __construct(array $data){
        $this->id = $data['id'] ?? null;
        $this->name = $data['name'] ?? null;
        $this->description = $data['description'] ?? null;
        $this->id_category = $data['id_category'] ?? null;
        $this->price = $data['price'] ?? null;
    }
    
    /**
     * Getters
     * Getters para obtener los valores de las propiedades
     */
    public function getId() { return $this->id; }
    public function getName() { return $this->name; }
    public function getDescription() { return $this->description; }
    public function getIdCategory() { return $this->id_category; }
    public function getPrice() { return $this->price; }
    public function getStatus() { return $this->status; }

    /**
     * Setters
     * Setters para asignar valores a las propiedades
     */
    public function setName(string $name) { $this->name = $name; }
    public function setDescription(string $description) { $this->description = $description; }
    public function setIdCategory(int $id_category) { $this->id_category = $id_category; }
    public function setPrice(int $price) { $this->price = $price; }
    public function setStatus(int $status) { $this->status = $status; }
    
    /**
     * 
     * Check all the foods active
     * Método para consultar todas las comidas activas
     * 
     */
    final public static function getAllActive(){
        try {
            $con = self::getConnection();
            $query = $con->prepare("SELECT f.name food_name, f.description, f.price, c.name_category category_name
            FROM foods f
            JOIN categories c ON f.id_category = c.id_category
            WHERE f.status = 1; -- Show only active meals
            ");
            $query->execute();
            $rs['data'] = $query->fetchAll(\PDO::FETCH_ASSOC);
            return $rs;
        } catch (\PDOException $e) {
            error_log("FoodModel::getAllActive -> ".$e);
            die(json_encode(ResponseHttp::status500('Unable to get the data')));
        }
    }
}