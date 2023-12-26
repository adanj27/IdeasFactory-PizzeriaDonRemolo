<?php

namespace App\Controllers;

use App\Config\ResponseHttp;
use App\Models\ComboModel;

class ComboController extends BaseController
{
    final public function getComboById(int $id_combo)
    {
        if ($this->isGetMethod() && $this->getRoute() === "combo/$id_combo") {
            $comboModel = new ComboModel([]);
            $result = $comboModel->getComboById($id_combo);
            echo json_encode($result);
            exit;
        }
    }

    final public function getAllCombos(string $endPoint)
    {
        if ($this->isGetMethod() && $endPoint == $this->getRoute()) {
            $comboModel = new ComboModel([]);
            $combos = $comboModel->getAllCombos();
            echo json_encode($combos);
            exit;
        }
    }

    final public function createCombo()
    {
        if ($this->isPostMethod()) {
            $data = json_decode(file_get_contents('php://input'), true);
            $comboModel = new ComboModel([]);
            $success = $comboModel->createCombo($data);
            if ($success) {
                echo json_encode(['message' => 'Combo created successfully']);
            } else {
                echo json_encode(ResponseHttp::status500('Failed to create combo'));
            }
            exit;
        }
    }

    final public function updateCombo(int $id_combo)
    {
        if ($this->isPutMethod() && $this->getRoute() === "combo/$id_combo") {
            $data = json_decode(file_get_contents('php://input'), true);
            $comboModel = new ComboModel([]);
            $success = $comboModel->updateCombo($id_combo, $data);
            if ($success) {
                echo json_encode(['message' => 'Combo updated successfully']);
            } else {
                echo json_encode(ResponseHttp::status500('Failed to update combo'));
            }
            exit;
        }
    }

    final public function deactivateCombo(int $id_combo)
    {
        if ($this->isDeleteMethod() && $this->getRoute() === "combo/$id_combo") {
            $comboModel = new ComboModel([]);
            $success = $comboModel->deactivateCombo($id_combo);
            if ($success) {
                echo json_encode(['message' => 'Combo deactivated successfully']);
            } else {
                echo json_encode(ResponseHttp::status500('Failed to deactivate combo'));
            }
            exit;
        }
    }
}
