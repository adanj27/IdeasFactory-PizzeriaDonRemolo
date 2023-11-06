<?php

namespace App\Controllers;

use App\Config\ResponseHttp;
use App\Models\ProductModel;

class ProductController extends BaseController
{
    /**
     * Obtener un producto por ID
     *
     * @param int $id_product El ID del producto a obtener.
     */
    final public function getProductById(int $id_product)
    {
        if ($this->isGetMethod() && $this->getRoute() === "product/$id_product") {
            $productModel = new productModel([]);
            $result = $productModel->getProductById($id_product);
            echo json_encode($result);
            exit;
        }
    }

    /**
     * Obtener todos los productos activos
     *
     * @param string $endPoint El punto final de la ruta.
     */
    final public function getAllActiveProducts(string $endPoint)
    {
        if ($this->isGetMethod() && $endPoint == $this->getRoute()) {
            $productModel = new productModel([]);
            $activeProducts = $productModel->getAllActiveProducts();
            echo json_encode($activeProducts);
            exit;
        }
    }

    /**
     * Crear un nuevo producto
     */
    final public function createProduct()
    {
        if ($this->isPostMethod()) {
            $data = json_decode(file_get_contents('php://input'), true);
            $requiredFields = ['product_name', 'product_description', 'id_category', 'price', 'products_count'];
            foreach ($requiredFields as $field) {
                if (!array_key_exists($field, $data)) {
                    echo json_encode(ResponseHttp::status400('Missing required fields'));
                    exit;
                }
            }
            $productModel = new productModel([]);
            $success = $productModel->createProduct($data);
            if ($success) {
                echo json_encode(ResponseHttp::status201('Product created successfully'));
            } else {
                echo json_encode(ResponseHttp::status500('Error creating product'));
            }
            exit;
        }
    }

    /**
     * Actualizar un producto existente
     *
     * @param int $id_product El ID del producto a actualizar.
     */
    final public function updateProduct(int $id_product)
    {
        if ($this->isPutMethod() && $this->getRoute() === "product/$id_product") {
            $data = json_decode(file_get_contents('php://input'), true);
            $requiredFields = ['product_name', 'product_description', 'id_category', 'price', 'products_count'];
            foreach ($requiredFields as $field) {
                if (!array_key_exists($field, $data)) {
                    echo json_encode(ResponseHttp::status400('Missing required fields'));
                    exit;
                }
            }
            $productModel = new productModel([]);
            $success = $productModel->updateProduct($id_product, $data);
            if ($success) {
                echo json_encode(ResponseHttp::status200('Product updated successfully'));
            } else {
                echo json_encode(ResponseHttp::status500('Error updating product'));
            }
            exit;
        }
    }

    /**
     * Desactivar un producto (Modificar product_status a 0)
     *
     * @param int $id_product El ID del producto a desactivar.
     */
    final public function deactivateProduct(int $id_product)
    {
        if ($this->isDeleteMethod() && $this->getRoute() === "product/$id_product") {
            $productModel = new productModel([]);
            $success = $productModel->deactivateProduct($id_product);
            if ($success) {
                echo json_encode(ResponseHttp::status200('Product deactivated successfully'));
            } else {
                echo json_encode(ResponseHttp::status500('Error deactivating product'));
            }
            exit;
        }
    }
}
