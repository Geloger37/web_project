<?php

    const HOST = 'localhost';
    const USER = 'root';
    const PASSWORD = 'root';
    const DATABASE = 'poisk_rukovoditelia';

    $mysql = new mysqli(HOST, USER, PASSWORD, DATABASE);
    if($mysql->connect_errno){
        // ToDO: Вывод ошибки, что не получается подключиться к БД
    }

    $surname = $_POST['surname'];
    $name = $_POST['name'];
    $middle_name = $_POST['middle_name'];
    $campus = $_POST['campus'];
    $login = $_POST['login'];
    $password = $_POST['password'];
    
    $mysql->query("INSERT INTO ")
    
    echo json_encode(213);

?>
