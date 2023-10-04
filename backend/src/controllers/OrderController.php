<?php

namespace App\Controllers;

use App\Config\ResponseHttp;
use App\Models\order\OrderModel;


class OrderController extends BaseController
{

    //GET BY ID
    final public function getOrderById(int $id_order){
        if ($this->isGetMethod() && $this->getRoute() === "order/$id_order") {
            $orderModel = new OrderModel([]);
            $result = $orderModel->getOrderById($id_order);
            if( $result != null){
                echo $result;
            }else{
                echo json_encode(ResponseHttp::status404('order not found'));
            }
            exit;
        }
    }


    //GET ALL ORDER 
    final public function getAllOrders(string $endPoint){
        if ($this->isGetMethod() && $endPoint == $this->getRoute()) {
            $orderModel = new OrderModel([]);
            $activeOrders = $orderModel->getOrders();
            echo json_encode($activeOrders);
            exit;
        }
    }

    //CREATE ORDER
    final public function createOrder(){
        if ($this->isPostMethod()) {
            $data = json_decode(file_get_contents('php://input'), true);
              $requiredFields = ['customer', 'products', 'combos'];
            foreach ($requiredFields as $field) {
                if (!array_key_exists($field, $data)) {
                    echo json_encode(ResponseHttp::status400('Missing required fields'));
                    exit;
                }
            }
                $orderModel = new OrderModel([]);
                $result = $orderModel-> createNewOrder($data);
                if ($result) echo $result;
                else  echo json_encode(ResponseHttp::status500('Error creating order'));
            exit;
        }
    }



    
    // UPDATE
    final public function updateOrder(int $id_order){
    }

   
    //DELETE
    final public function deleteOrder(int $id_order){
    }

}
