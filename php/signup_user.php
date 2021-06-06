<?php

    $login = $_POST['login'];
    $password = $_POST['password'];
    
    $mysql = new mysqli('localhost', 'root', 'root', 'poisk_rukovoditelia');
    
    $result = $mysql->query("INSERT INTO Users VALUES($login, $password);");
    
    echo json_encode($result);

?>
