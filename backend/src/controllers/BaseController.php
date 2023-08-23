<?php

namespace App\Controllers;

class BaseController {

    // Definición de reglas de validación
    protected static $validationRules = [
        'number' => '/^[0-9]+$/',
        'text' => '/^[a-zA-Z ]+$/',
        'rol' => '/^[1-3]$/',
        'stock' => '/^[0-9]+$/',
        'description' => '/^[a-zA-Z ]{1,30}$/' // Máximo 30 caracteres de letras y espacios
    ];
    
    // Método para determinar si el método de la petición HTTP es GET
    protected function isGetMethod(){
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

    // Método para obtener la ruta de la petición HTTP
    protected function getRoute(){
        return $_GET['route'];
    }

    // Método para obtener los segmentos de la ruta de la petición HTTP
    protected function getAttribute(){
        $route = $this->getRoute();
        return explode('/', $route);
    }

    // Método para obtener el valor de un encabezado HTTP específico
    protected function getHeader(string $header){
        // Obtiene los encabezados HTTP y busca el valor del encabezado especificado
        // Si no se encuentra, devuelve null
        return getallheaders()[$header] ?? null;
    }

    // Método para obtener los parámetros enviados en la petición (PUT, POST)
    protected function getParam(){
        if ($this->getHeader('Content-Type') === 'application/json') {
            // Si el tipo de contenido es JSON, decodifica el cuerpo del mensaje JSON
            return json_decode(file_get_contents("php://input"), true);
        } else {
            // Si no es JSON, devuelve los parámetros POST
            return $_POST;
        }
    }
}