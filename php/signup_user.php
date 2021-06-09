<?php

    $login = $_POST['login'];
    $password = $_POST['password'];

    $ps = password_hash($password, PASSWORD_DEFAULT);

    const HOST = 'localhost';
    const USER = 'root';
    const PASSWORD = 'root';
    const DATABASE = 'poisk_rukovoditelia';

    $mysql = new mysqli(HOST, USER, PASSWORD, DATABASE);
    
    $result = $mysql->query("INSERT INTO Users VALUES($login, $ps);");
    
    echo json_encode($result);

?>
