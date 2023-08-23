<?php

use App\Config\ResponseHttp;
use App\Controllers\FoodController;
/**
 * Gets the request path
 */
$params = explode('/', $_GET['route']);
/**
 * Create an instance of FoodController
 */
$app = new FoodController();
/**
* Routes
*/
if ($params[0] === 'food') {
    /**
     * Check all active meals
     * /backend/food/
     */
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $app->getAll('food/');
    }
}

echo json_encode(ResponseHttp::status404());
