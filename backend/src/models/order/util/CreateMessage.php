<?php
namespace App\Models\Order\Util;

use App\Models\Order\Util\Interface\CreateMessageInterface;


class CreateMessage implements CreateMessageInterface{
    
   public static function createMessage($order){

      $data = json_decode($order, true);
 
      if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
         throw new \InvalidArgumentException("Error decoding JSON: " . json_last_error_msg());
      }
     // Accessing the values
      $idOrder = $data['order']['id_order'];
      $username = $data['order']['username'];
      $address = $data['order']['address'] ?? "sin direccion";
      $totalProductos = $data['order']['total_productos'];
      $totalCombos = $data['order']['total_combos'];
      $grandTotal = $data['order']['grand_total'];

      $message = "*Datos de pedido:*\n";
      $message .= "\u{1F355}  N° de pedido: $idOrder\n";
      $message .= "\u{1F464} Nombre de Usuario: $username\n";
      $message .= "\u{1F3E0} Dirección: $address\n";
      $message .= "\u{1F6D2} Total de Productos: $ $totalProductos\n";
      $message .= "\u{1F961} Total de Combos: $ $totalCombos\n";
      $message .= "\u{1F4B2} *Total: $ $grandTotal*\n";

      // Additional information
      $message .= "\n¡Gracias por elegir nuestra pizzería! \u{1F4F1} Su satisfacción es nuestra prioridad.\n";
      $message .= "Estamos preparando su pedido con cuidado y lo enviaremos lo antes posible. \u{1F91E}\n\n";
      // Add additional text with the option to cancel
      $message .= "Para cancelar su pedido, responda a este mensaje con la palabra 'CANCELAR'. \u{274C}";

      return $message;
   }

   public static function defaultMessage(){
      $msg = "\u{1F44B} *Hola!, gracias por elegir nuestra pizzeria*";
      return $msg;
   }
}