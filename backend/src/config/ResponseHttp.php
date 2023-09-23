<?php
namespace App\Config;

class ResponseHttp {
    /**
     * Returns a response with status code 200 (OK).
     */
    final public static function status200(string $message): array {
        return self::getResponseArray(200, 'OK', $message);
    }

    /**
     * Returns a response with status code 201 (Created).
     */
    final public static function status201(string $message = 'created'): array {
        return self::getResponseArray(201, 'OK', $message);
    }

    /**
     * Returns a response with status code 400 (Bad Request).
     */
    final public static function status400(string $message = 'Bad Request'): array {
        return self::getResponseArray(400, 'error', $message);
    }

    /**
     * Returns a response with the status code 401 (Unauthorized).
     */
    final public static function status401(string $message = 'Not authorized'): array {
        return self::getResponseArray(401, 'error', $message);
    }

    /**
     * Returns a response with the status code 404 (Not Found).
     */
    final public static function status404(string $message = 'Not found'): array {
        return self::getResponseArray(404, 'error', $message);
    }

    /**
     * Returns a response with status code 500 (Internal Server Error).
     */
    final public static function status500(string $message = 'Internal Server Error'): array {
        return self::getResponseArray(500, 'error', $message);
    }

    /**
     * Returns a response array with the given values.
     */
    private static function getResponseArray(int $statusCode, string $statusMessage, string $message): array {
        http_response_code($statusCode);
        return [
            'status' => $statusMessage,
            'message' => $message,
        ];
    }
}
