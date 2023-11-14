<?php
namespace App\Models\Order\Service\Interface;

interface WhatsAppServiceInterface {
    static function sendMessage($phone, $message);
}
