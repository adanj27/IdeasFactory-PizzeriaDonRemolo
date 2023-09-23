<?php

namespace App\Controllers;

use App\Config\ResponseHttp;
use App\Models\CategoryModel;

class CategoryController extends BaseController{
    
    /**
     * Create a new category
     */
    public function createCategory(){
        // verify if the request is PUT
        if ($this->isGetMethod() && $this->getRoute() === 'category/create') {
            // gets the parameters of the request
            $param = $this->getParam();
            // check if you have all the required fields 
            if (array_key_exists('name_category', $param)){
                $CategoryModel = new CategoryModel([
                    'name_category' => $param['name_category']
                    ]);
                $result = $CategoryModel->create($param);
                echo json_encode($result);
                exit;
            } else {
                echo json_encode(['error' => 'Required data missing']);
                exit;
            }
        }
    }



    /**
     * Query category by ID
     */
    public function getCategoryById($id){
        // checks if the request is GET and if the path matches "category/id".
        if ($this->isGetMethod() && $this->getRoute() === "category/$id") {
            $CategoryModel = new CategoryModel([]);
            $result = $CategoryModel->getById($id);
            echo json_encode($result);
            exit;
        }
    }

    /**
     * get all the category 
     */
    final public function getAll(string $endPoint){
        // check if the request is GET
        if ($this->isGetMethod() == 'get' && $endPoint == $this->getRoute()) {
            // Create an instance of CategoryModel
            $CategoryModel = new CategoryModel([]);
            // Call the all() method of the instance created to obtain the categories.
            $Category = $CategoryModel->all();
            echo json_encode($Category);
            exit;
        }
    }


    /**
     * update category
     * @parameters : $id
     */
    public function updateCategory($id){
        // verify if the request is PUT
        if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
            $param = $this->getParam();
            // check if you have all the required fields 
            if (array_key_exists('name_category', $param)){
                $CategoryModel = new CategoryModel([
                        'name_category' => $param['name_category']
                    ]);
                $result = $CategoryModel->update($id, $param);
                echo json_encode($result);
                exit;
            } else {
                echo json_encode(['error' => 'Required data missing']);
                exit;
            }
        }
    }



    /**
     * delete category
     * @parameters : $id
     */
    public function deleteCategory($id){
       // verify if the request is DELETE
        if ($this->isGetMethod() && $this->getRoute() === "category/$id") {
           $CategoryModel = new CategoryModel([]);
           $result = $CategoryModel->delete($id);
            echo json_encode($result);
            exit;
        }
    }


}    
    