<?php
namespace App\Models;

use App\Config\ResponseHttp;


/**
 * CategoryModel class that inherits from ORM
 */
class CategoryModel extends ORM
{

    protected $table = 'categories';
    private $id_category;
    private $name_category;


    /**
     * Class constructor, receives an array of data to initialize properties
     */
    public function __construct(array $data)
    {
        //calls the ORM constructor, with its table and id
        parent::__construct($this->table, "id_category");
        $this->id_category = $data['id'] ?? null;
        $this->name_category = $data['name'] ?? null;
    }

    /**
     * Getters
     * Getters to obtain the values of the properties
     */
    public function getId()
    {
        return $this->id_category;
    }
    public function getName()
    {
        return $this->name_category;
    }

    /**
     * Setters
     * Setters to assign values to properties
     */
    public function setName(string $name)
    {
        $this->name = $name;
    }


    /*****other class-specific methods ****/




}