<?php

namespace App\Controllers;

class BaseController
{

    //definition of validation rules
    protected static $validationRules = [
        'number' => '/^[0-9]+$/',
        'text' => '/^[a-zA-Z ]+$/',
        'rol' => '/^[1-3]$/',
        'stock' => '/^[0-9]+$/',
        'description' => '/^[a-zA-Z ]{1,30}$/' //maximum 30 characters of letters and spaces
    ];

    //method to determine if the method of the HTTP request is GET
    protected function isGetMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }
    // Método para determinar si el método de la solicitud HTTP es POST
    protected function isPostMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']) === 'post';
    }

    // Método para determinar si el método de la solicitud HTTP es PUT
    protected function isPutMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']) === 'put';
    }

    // Método para determinar si el método de la solicitud HTTP es DELETE
    protected function isDeleteMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']) === 'delete';
    }


    //method to get the HTTP request path
    protected function getRoute()
    {
        return $_GET['route'];
    }

    //method to obtain the HTTP request path segments
    protected function getAttribute()
    {
        $route = $this->getRoute();
        return explode('/', $route);
    }

    //method to obtain the value of a specific HTTP header
    protected function getHeader(string $header)
    {
        // gets the HTTP headers and looks for the value of the specified header
        // If not found, returns null
        return getallheaders()[$header] ?? null;
    }

    //method to obtain the parameters sent in the request (PUT, POST)
    protected function getParam()
    {
        if ($this->getHeader('Content-Type') === 'application/json') {
            // If the content type is JSON, decode the JSON message body.
            return json_decode(file_get_contents("php://input"), true);
        } else {
            // If not JSON, returns POST parameters
            return $_POST;
        }
    }
}