<?php

use App\Config\Errorlog;
use App\Config\ResponseHttp;

require 'vendor/autoload.php';
/**
 *All php errors will be saved in the php-error.log file
 */
Errorlog::activateErrorLog();

/**
 * Gets the request path
*/
if (isset($_GET['route'])) {

    $url = explode('/', $_GET['route']);
    $lista = ['product','category','combo']; //Contains the routes that are to be allowed
    //Find the folders where our routes are
    $file = 'src/Routes/' .$url[0]. '.php';

    //We validate that this route has permissions
    if (!in_array($url[0], $lista)) {
        echo json_encode(ResponseHttp::status400());
        exit;
    }
    if (is_readable($file)) {//That file is readable and it exists, we are going to request it.
        require $file;
        exit;
    }else {
        echo json_encode(ResponseHttp::status400());
    }
}else {
    echo json_encode(ResponseHttp::status404());
}
?>