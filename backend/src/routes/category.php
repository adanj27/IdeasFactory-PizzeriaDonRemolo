<?php

use App\Config\ResponseHttp;
use App\Controllers\CategoryController;

/**
 * Obtiene la ruta de la solicitud
 */
$params = explode('/', $_GET['route']);

/**
 * Crea una instancia de CategoryController
 */
$app = new CategoryController();
/**
* Rutas
*/
if ($params[0] === 'category') {


    // Consultar una categoria
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($params[1]) && is_numeric($params[1])) {
        $app->getCategoryById($params[1]);
    }
    // Consultar todas las categorias activas
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $app->getAll('category');
    }
    // Crear una nueva categoria
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $params[1] === 'create') {
        $app->createCategory();
    }
    // Actualizar un categoria
    if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($params[1]) && is_numeric($params[1])) {
        $app->updateCategory($params[1]);
    }

    // elimina un categoria
   /* if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($params[1]) && is_numeric($params[1])) {
        $app->deleteCategory($params[1]);
    }*/
}

echo json_encode(ResponseHttp::status404());
