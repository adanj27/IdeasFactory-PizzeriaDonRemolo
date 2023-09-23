<?php
namespace App\Config; 
date_default_timezone_set('America/Bogota');//Establece la zona horaria

class Errorlog{
    public static function activateErrorLog(){
        error_reporting(E_ALL);//habilita todos los errores de php
        ini_set('ignore_repeated_errors', TRUE);//ignora los errores repetidos
        ini_set('display_errors', TRUE);//muestra los errores en el navegador
        ini_set('log_errors', TRUE);//guarda los errores
        ini_set('error_log', dirname(__DIR__) . '/Logs/php-error.log');
    }
    
}