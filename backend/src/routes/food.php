<?php

use App\Config\ResponseHttp;
use App\Controllers\FoodController;

/**
 * Obtiene la ruta de la solicitud
 */
$params = explode('/', $_GET['route']);

/**
 * Crea una instancia de FoodController
 */
$app = new FoodController();
/**
* Rutas
*/
if ($params[0] === 'food') {


    // Consultar una comida
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($params[1]) && is_numeric($params[1])) {
        $app->getFoodById($params[1]);
    }
    // Consultar todas las comidas activas
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $app->getAll('food');
    }
    // Crear una nueva comida
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $params[1] === 'create') {
        $app->createFood();
    }
    // Actualizar un alimento
    if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($params[1]) && is_numeric($params[1])) {
        $app->updateFood($params[1]);
    }

    // elimina un food
    /*if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($params[1]) && is_numeric($params[1])) {
        $app->deleteFood($params[1]);
    }*/
}

echo json_encode(ResponseHttp::status404());