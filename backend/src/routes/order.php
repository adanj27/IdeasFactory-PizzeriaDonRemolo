<?php
use App\Config\ResponseHttp;
use App\Controllers\OrderController;

/**
 * Obtiene la ruta de la solicitud
 */
$params = explode('/', $_GET['route']);

/**
 * Crea una instancia de productController
 */
$app = new OrderController();

/**
 * Rutas
 */
if ($params[0] === 'order') {
    // Consultar una orden por ID
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($params[1]) && is_numeric($params[1])) {
        $app->getOrderById($params[1]);
    }
    // Consultar todas las ordenes activas
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && empty($params[1])) {
        $app->getAllOrders('order');
    }
    // Crear una nueva orden
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $app->createOrder($data);
    }
    // Actualizar una order por ID
    if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($params[1]) && is_numeric($params[1])) {
        $data = json_decode(file_get_contents('php://input'), true);
        $app->updateOrder($params[1], $data);
    }
    // Desactivar una orden por ID (Modificar order_status a 0)
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($params[1]) && is_numeric($params[1])) {
        $app->deleteOrder($params[1]);
    }
}

// Si ninguna de las rutas coincide, se devuelve una respuesta 404
echo json_encode(ResponseHttp::status404());