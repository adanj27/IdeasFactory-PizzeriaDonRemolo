<?php
use App\Config\ResponseHttp;
use App\Controllers\productController;

/**
 * Obtiene la ruta de la solicitud
 */
$params = explode('/', $_GET['route']);

/**
 * Crea una instancia de productController
 */
$app = new productController();

/**
 * Rutas
 */
if ($params[0] === 'product') {
    // Consultar un producto por ID
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($params[1]) && is_numeric($params[1])) {
        $app->getProductById($params[1]);
    }
    // Consultar todos los productos activos
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && empty($params[1])) {
        $app->getAllActiveProducts('product');
    }
    // Crear un nuevo producto
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $app->createProduct($data);
    }
    // Actualizar un producto por ID
    if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($params[1]) && is_numeric($params[1])) {
        $data = json_decode(file_get_contents('php://input'), true);
        $app->updateProduct($params[1], $data);
    }
    // Desactivar un producto por ID (Modificar product_status a 0)
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($params[1]) && is_numeric($params[1])) {
        $app->deactivateProduct($params[1]);
    }
}

// Si ninguna de las rutas coincide, se devuelve una respuesta 404
echo json_encode(ResponseHttp::status404());