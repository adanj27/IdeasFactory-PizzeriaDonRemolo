<?php

namespace App\Controllers;

use App\Config\ResponseHttp;
use App\Models\FoodModel;


class FoodController extends BaseController{

    //required parameters
    const REQUIRED_FIELDS = ['name', 'description', 'id_category', 'price'];
    /**
     * Query food by ID
     */
    public function getFoodById($id){
         // Check if the request is GET and if the path matches "food/id"
        if ($this->isGetMethod() && $this->getRoute() === "food/$id") {
          // Creates an instance of FoodModel to get the food by ID
           $FoodModel = new FoodModel([]);
           $result = $FoodModel->getById($id);
             // converts the result to JSON format and sends it as response
            echo json_encode($result);
            exit;
        }
    }
    /**
     * Check all the foods active
     */
    final public function getAll(string $endPoint){
        // Check if the request is GET
        if ($this->isGetMethod() == 'get' && $endPoint == $this->getRoute()) {
            $foodModel = new FoodModel([]);
            // call the getAllActive() method of the instance created to obtain the active meals
            $activeFoods = $foodModel->all();
            echo json_encode($activeFoods);
            exit;
        }
    }

    /**
     * Create a new food
     * @parameters $data
     */
    public function createFood(){
        // verify if the request is POST
        if ($this->isGetMethod() && $this->getRoute() === 'food/create') {
            // Gets the parameters of the request
            $param = $this->getParam();
        // check if you have all the required fields 
            if (array_diff(self::REQUIRED_FIELDS, array_keys($param)) === []) {
                $foodModel = new FoodModel([
                    'name' => $param['name'],
                    'description' => $param['description'],
                    'id_category' => $param['id_category'],
                    'price' => $param['price']
                ]);
                $result = $foodModel->create($param);
                echo json_encode($result);
                exit;
            } else {
                echo json_encode(['error' => 'Required data missing']);
                exit;
            }
        }
    }

    
    /**
     * Update a food
     * @parameters $id , $data
     */
    public function updateFood($id){
        // verify if the request is PUT
        if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
            // Gets the parameters of the request
            $param = $this->getParam();

            // check if you have all the required fields 
            if (array_diff(self::REQUIRED_FIELDS, array_keys($param)) === []) {
                $foodModel = new FoodModel([
                    'name' => $param['name'],
                    'description' => $param['description'],
                    'id_category' => $param['id_category'],
                    'price' => $param['price']
                ]);
                $result = $foodModel->update($id, $param);
                echo json_encode($result);
                exit;
            } else {
                echo json_encode(['error' => 'Required data missing']);
                exit;
            }
        }
    }



    //delete food
    public function deleteFood($id){
        if ($this->isGetMethod() && $this->getRoute() === "food/$id") {
           $FoodModel = new FoodModel([]);
           $result = $FoodModel->delete($id);
            echo json_encode($result);
            exit;
        }
    }

    
}    

