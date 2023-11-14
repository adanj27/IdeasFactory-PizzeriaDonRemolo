<?php

namespace App\Models\Order\Services;

class WhatsAppApiService implements WhatsAppServiceInterface {

    public function sendMessage($phone, $message) {

   
        // Configura y utiliza la API de WhatsApp Business
        $token = "ID_TOKEN";
        //traer el numero del la orden del mensajeText phone
        $url = "https://graph.facebook.com/v17.0/102091889664276/messages";
    
        $message = json_encode([
            'messaging_product' => 'whatsapp',
            'to' => $phoneWapp,
            'type' => 'template',
            'template' => [
                'name' => 'orden',
                'language' => [
                    'code' => 'es'
                ],
                'components' => [
                    [
                        'type' => 'body',
                        'parameters' => [
                            [
                                'type' => 'text',
                                'text' => $messageText
                            ]
                        ]
                    ]
                ]
    
            ]
        ]);
    
        $json = json_decode($message);
        if ($json === null) {
            error_log("OrderModel::sendWhatsAppMessage -> " . $message);
            return;
        }
    
        $header = array("Authorization: Bearer " . $token, "Content-Type: application/json");
    
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $message);
    
        $response = json_decode(curl_exec($ch), true);
        print_r($response);
        curl_close($ch);
    }

}