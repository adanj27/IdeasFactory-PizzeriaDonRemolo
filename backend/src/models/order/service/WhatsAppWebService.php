<?php

namespace App\Models\Order\Service;

use App\Models\Order\Service\Interface\WhatsAppServiceInterface;

class WhatsAppWebService implements WhatsAppServiceInterface {

    public static function sendMessage($message, $phone) {
        try {
            $postData = array(
                'message' => $message,
                'phone' => $phone
            );
    
            $ch = curl_init( $_ENV['WHATSAPP_WEB'] );
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    
            $response = curl_exec($ch);
    
    
            // Check if the response contains 'responseExSave'.
            $responseArray = json_decode($response, true);
            if (isset($responseArray['responseExSave']['error'])){
                // Log or specific error handling if necessary
                error_log("Error in sendMessage. Error ID");
                return false;
            }

    
            if (curl_errno($ch)) {
                throw new \Exception("POST request failed: " . curl_error($ch));
            }
    
            curl_close($ch);
            return true;
    
        } catch (\Exception $e) {
            error_log("Error in sendMessage:" . $e->getMessage());
            return false;
        }
    }
    
}
