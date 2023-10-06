<?php

namespace App\Controllers;

use App\Config\ResponseHttp;
use App\Models\CategoryModel;

class CategoryController extends BaseController {
    
    /**
     * Create a new category
     */
    public function createCategory() {
        // Verify if the request is POST
        if ($this->isPostMethod() && $this->getRoute() === 'category/create') {
            // Get the parameters of the request
            $param = $this->getParam();
            
            // Check if you have all the required fields 
            if (array_key_exists('name_category', $param)) {
                $CategoryModel = new CategoryModel([
                    'name_category' => $param['name_category']
                ]);
                $result = $CategoryModel->create($param);
                
                // Check the result and send an appropriate response
                if ($result) {
                    echo json_encode(ResponseHttp::status201('Category created successfully'));
                } else {
                    echo json_encode(ResponseHttp::status500('Failed to create category'));
                }
                exit;
            } else {
                echo json_encode(ResponseHttp::status400('Required data missing'));
                exit;
            }
        }
    }

    /**
     * Query category by ID
     */
    public function getCategoryById($id) {
        // Check if the request is GET and if the path matches "category/id".
        if ($this->isGetMethod() && $this->getRoute() === "category/$id") {
            $CategoryModel = new CategoryModel([]);
            $result = $CategoryModel->getById($id);
            echo json_encode($result);
            exit;
        }
    }

    /**
     * Get all categories
     */
    final public function getAll(string $endPoint) {
        // Check if the request is GET
        if ($this->isGetMethod() && $endPoint == $this->getRoute()) {
            // Create an instance of CategoryModel
            $CategoryModel = new CategoryModel([]);
            // Call the all() method of the instance created to obtain the categories.
            $categories = $CategoryModel->all();
            echo json_encode($categories);
            exit;
        }
    }

    /**
     * Update category
     * @parameters : $id
     */
    public function updateCategory($id) {
        // Verify if the request is PUT
        if ($this->isPutMethod() && $this->getRoute() === "category/$id") {
            $param = $this->getParam();
            // Check if you have all the required fields 
            if (array_key_exists('name_category', $param)) {
                $CategoryModel = new CategoryModel([
                    'name_category' => $param['name_category']
                ]);
                $result = $CategoryModel->update($id, $param);
                
                // Check the result and send an appropriate response
                if ($result) {
                    echo json_encode(ResponseHttp::status200('Category updated successfully'));
                } else {
                    echo json_encode(ResponseHttp::status500('Failed to update category'));
                }
                exit;
            } else {
                echo json_encode(ResponseHttp::status400('Required data missing'));
                exit;
            }
        }
    }

    /**
     * Delete category
     * @parameters : $id
     */
    public function deleteCategory($id) {
        // Verify if the request is DELETE
        if ($this->isDeleteMethod() && $this->getRoute() === "category/$id") {
            $CategoryModel = new CategoryModel([]);
            $result = $CategoryModel->delete($id);
            
            // Check the result and send an appropriate response
            if ($result) {
                echo json_encode(ResponseHttp::status200('Category deleted successfully'));
            } else {
                echo json_encode(ResponseHttp::status500('Failed to delete category'));
            }
            exit;
        }
    }
}
