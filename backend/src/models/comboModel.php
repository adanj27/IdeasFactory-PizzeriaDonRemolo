<?php

namespace App\Models;

use App\Config\ResponseHttp;

class ComboModel extends ORM
{
    protected $table = 'combos';
    private $id_combo;
    private $name_combo;
    private $combo_price;
    private $combo_status;

    public function __construct(array $data)
    {
        parent::__construct($this->table, "id_combo");
        $this->id_combo = $data['id_combo'] ?? null;
        $this->name_combo = $data['name_combo'] ?? null;
        $this->combo_price = $data['combo_price'] ?? null;
        $this->combo_status = $data['combo_status'] ?? null;
    }

    public function getId()
    {
        return $this->id_combo;
    }

    public function getName()
    {
        return $this->name_combo;
    }

    public function getPrice()
    {
        return $this->combo_price;
    }
    public function getStatus()
    {
        return $this->combo_status;
    }

    public function setName(string $name)
    {
        $this->name_combo = $name;
    }

    public function setPrice(float $price)
    {
        $this->combo_price = $price;
    }
    public function setStatus(int $status)
    {
        $this->combo_status = $status;
    }

    public static function getComboById(int $id_combo)
    {
        try {
            $con = self::getConnection();
            $query = $con->prepare("
                SELECT name_combo, combo_price
                FROM combos
                WHERE id_combo = :id
            ");
            $query->execute([':id' => $id_combo]);
            $result = $query->fetch(\PDO::FETCH_ASSOC);
            if ($result) {
                return $result;
            } else {
                return null;
            }
        } catch (\PDOException $e) {
            error_log("ComboModel::getComboById -> " . $e);
            die(json_encode(ResponseHttp::status500('Error fetching combo')));
        }
    }

    public static function getAllCombos()
    {
        try {
            $con = self::getConnection();
            $query = $con->prepare("
                SELECT id_combo, name_combo, combo_price
                FROM combos
            ");
            $query->execute();
            $rs = $query->fetchAll(\PDO::FETCH_ASSOC);
            if ($rs) {
                return $rs;
            } else {
                return null;
            }
        } catch (\PDOException $e) {
            error_log("ComboModel::getAllCombos -> " . $e);
            die(json_encode(ResponseHttp::status500('Error fetching combos')));
        }
    }

    public function createCombo(array $data)
    {
        try {
            $con = self::getConnection();
            $query = $con->prepare("
                INSERT INTO combos (name_combo, combo_price)
                VALUES (:name, :price)
            ");
            $query->execute([':name' => $data['name_combo'], ':price' => $data['combo_price']]);
            return true;
        } catch (\PDOException $e) {
            error_log("ComboModel::createCombo -> " . $e);
            return false;
        }
    }

    public function updateCombo(int $id_combo, array $data)
    {
        try {
            $con = self::getConnection();
            $query = $con->prepare("
                UPDATE combos
                SET name_combo = :name, combo_price = :price
                WHERE id_combo = :id
            ");
            $query->execute([':name' => $data['name_combo'], ':price' => $data['combo_price'], ':id' => $id_combo]);
            return true;
        } catch (\PDOException $e) {
            error_log("ComboModel::updateCombo -> " . $e);
            return false;
        }
    }

    public function deactivateCombo(int $id_combo)
    {
        try {
            $con = self::getConnection();
            $query = $con->prepare("
                UPDATE combos
                SET combo_status = 0
                WHERE id_combo = :id
            ");
            $query->execute([':id' => $id_combo]);
            return true;
        } catch (\PDOException $e) {
            error_log("ComboModel::deactivateCombo -> " . $e);
            return false;
        }
    }
}
