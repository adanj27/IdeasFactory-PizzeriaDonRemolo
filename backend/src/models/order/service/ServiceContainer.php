<?php

namespace App\Models\Order\Service;

use App\Models\Order\Service\Interface\WhatsAppServiceInterface;
use App\Models\Order\Service\WhatsAppApiService;
use App\Models\Order\Service\TwilioWhatsAppService;
use App\Models\Order\Service\WhatsAppWebService;


class ServiceContainer{
    
    private static $instances = [];

    public static function getWhatsAppService(): WhatsAppServiceInterface{
        $serviceName = "whatsAppWeb";//env('WHATSAPP_SERVICE'); //Get the name of the service from the configuration or any other source.

        if (!isset(self::$instances[$serviceName])) {
           // Create the instance of the requested service
            switch ($serviceName) {
                case 'twilio':
                    self::$instances[$serviceName] = new TwilioWhatsAppService();
                    break;
                case 'whatsApp':
                    self::$instances[$serviceName] = new WhatsAppWebService();
                    break;
                default:
                    self::$instances[$serviceName] = new WhatsAppWebService();
                    break;
            }
        }
        return self::$instances[$serviceName];
    }
}