<?php

    $login = $_POST['login'];
    $password = $_POST['password'];
    
    $mysql = new mysqli('localhost', 'root', 'root', 'poisk_rukovoditelia');
    
    $result = $mysql->query("SELECT * FROM Users" WHERE 'login' = '$login' AND 'pasword' == '$password');
    $user = $result->fetch_assoc();
    
    if(count($user) == 0) {
        echo json_encode(0);
        exit;
    }
    
    echo json_encode(213);

?>
