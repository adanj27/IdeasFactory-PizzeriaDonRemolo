<?php

namespace App\Controllers;

use App\Config\ResponseHttp;
use App\Models\FoodModel;

class FoodController extends BaseController{
    /**
     * Check all the foods active
     */
    final public function getAll(string $endPoint){
        // Verifica si la solicitud es GET
        if ($this->isGetMethod() == 'get' && $endPoint == $this->getRoute()) {
            // Crea una instancia de FoodModel
            $foodModel = new FoodModel([]);
            // Llama al método getAllActive() de la instancia creada para obtener las comidas activas
            $activeFoods = $foodModel->getAllActive();
            echo json_encode($activeFoods);
            exit;
        }
    }
}    
    

