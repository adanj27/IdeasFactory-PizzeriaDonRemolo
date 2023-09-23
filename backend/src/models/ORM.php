<?php

namespace App\Models;


use App\Config\ResponseHttp;
use App\DB\ConnectionDB;
use App\DB\Sql;

/**
 * ORM class that inherits from ConnectionDB
 */
class ORM extends ConnectionDB {
    private $table;
    private $id;
    protected $db;


    public function __construct($table, $id_table) {

        $this->table = $table;
        $this->id = $id_table;
        $this->db = ConnectionDB::getConnection();
    }

    
    public function create($data) {
        // validation: Checks if the parameter values are empty
        foreach ($data as $value) {
            if (empty($value)) return ['error' => 'Parameter values cannot be empty']; 
        }
        $columns = implode(', ', array_keys($data));  
        $values = ':' . implode(', :', array_keys($data));

        try{
            $query = "INSERT INTO {$this->table} ({$columns}) VALUES ({$values})";
            $stmt = $this->db->prepare($query);
    
            foreach ($data as $key => $value) {
                $stmt->bindValue(':' . $key, $value);
            }
            $success = $stmt->execute();
            if ($stmt->rowCount() > 0) {
                return ['message' => 'Record created successfully'];
             } else return ['error' => 'Failed to create record'];
        }catch(\PDOException $e){
            error_log("ORM::create -> ".$e);
            die(json_encode(ResponseHttp::status400('incorrect request')));

        }

    }


    /**
     * get all records in a table
     */
    public function all(){
        try {
            $query = $this->db->prepare("SELECT * FROM {$this->table}");
            $query->execute();
            $rs['data'] = $query->fetchAll(\PDO::FETCH_ASSOC);
            return $rs;
        } catch (\PDOException $e) {
            error_log("ORM::all -> ".$e);
            die(json_encode(ResponseHttp::status500('Unable to get the data')));
        }
    }



    /**
     * get a record by id
     */
    public function getById($id) {
        try {
            $query = $this->db->prepare("SELECT * FROM {$this->table} WHERE {$this->id} =:id");
            $query->execute(['id' => $id]);
            // Retorna el resultado o un mensaje si no se encuentra la categoria            
            $result = $query->fetch(\PDO::FETCH_ASSOC);
            return $result ? ['data' => $result] : ['message' => "$this->table} not found" ];
        } catch (\PDOException $e) {
            error_log("ORM::getById -> ".$e);
            die(json_encode(ResponseHttp::status500("Error fetching $this->table by ID")));
        }
    }



    /**
     * update record 
     * @parameters : $id , $data
     */
    public function update($id, $data)  {
       // validation: Checks if the parameter values are empty
        foreach ($data as $value) {
            if (empty($value)) return ['error' => 'Parameter values cannot be empty'];
        }
        $columns = [];
        foreach ($data as $key => $value) {
            $columns[] = $key . ' = :' . $key;
        }
        $columns = implode(', ', $columns);

        try{
            $query = "UPDATE {$this->table} SET {$columns} WHERE {$this->id} = :id";
            $stmt = $this->db->prepare($query);
    
            foreach ($data as $key => $value) {
                $stmt->bindValue(':' . $key, $value);
            }
            $stmt->bindValue(':id', $id);
           $success = $stmt->execute();

           if ($stmt->rowCount() > 0) {
              return $this->getById($id);
            } else return ['error' => 'Failed to update record'];

        }catch (\PDOException $e) {
            error_log("ORM::update -> ".$e);
            die(json_encode(ResponseHttp::status400('incorrect request')));
        }
    }



    /**
     * delete record 
     * @parameters : $id 
     * 
     */
    public function delete($id) {
        try {
            $query = $this->db->prepare("DELETE FROM {$this->table} WHERE {$this->id} = :id");
            $query->execute(['id' => $id]);
            $result = $query->fetch(\PDO::FETCH_ASSOC);
            
            if ($query->rowCount() > 0) {
                // successful deletion, return code 204 No Content
                die(json_encode(ResponseHttp::status200("record deleted")));
                return;
            } else {
                die(json_encode(ResponseHttp::status400("incorrect request")));;
                return;
            }
        } catch (\PDOException $e) {
            error_log("ORM::delete -> ".$e);
            throw new \PDOException("Error deleting record from {$this->table}: " . $e->getMessage());
        }
    }
    
}