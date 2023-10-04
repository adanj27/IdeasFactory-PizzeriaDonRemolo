<?php
namespace App\Models\order\validator;

class OrderValidate{

    //PRODUCTS
    final public static function validateProducts($products){
        if (!is_array($products) || count($products) == 0) return false;
        
    
        foreach ($products as $product) {
            if (!isset($product['id_product']) || !isset($product['count_product'])) return false;
        }
    
        return true;
    }


    //COMBOS
    final public static function validateCombos($combos){
        if (!is_array($combos) || count($combos) == 0) return false;
        

        foreach ($combos as $combo) {
            if (!isset($combo['id_combo']) || !isset($combo['count_combo'])) return false;   
        }

        return true;
}


}

