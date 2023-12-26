<?php

use App\Config\ResponseHttp;
use App\Controllers\ComboController;

/**
 * Obtiene la ruta de la solicitud
 */
$params = explode('/', $_GET['route']);

/**
 * Crea una instancia de ComboController
 */
$app = new ComboController();

/**
 * Rutas para combos
 */
if ($params[0] === 'combo') {
    // Consultar un combo por ID
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($params[1]) && is_numeric($params[1])) {
        $app->getComboById($params[1]);
    }
    // Consultar todos los combos
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $app->getAllCombos('combo');
    }
    // Crear un nuevo combo
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $app->createCombo();
    }
    // Actualizar un combo existente
    if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($params[1]) && is_numeric($params[1])) {
        $app->updateCombo($params[1]);
    }
    // Desactivar un combo (Modificar combo_status a 0)
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($params[1]) && is_numeric($params[1])) {
        $app->deactivateCombo($params[1]);
    }
}

echo json_encode(ResponseHttp::status404());
