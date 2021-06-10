<?php
    // ToDo: запустить базу на локальном
    const HOST = 'localhost';
    const USER = 'root';
    const PASSWORD = 'root';
    const DATABASE = 'poisk_rukovoditelia';


    $mysql = new mysqli(HOST, USER, PASSWORD, DATABASE);
    if($mysql->connect_errno){
        // ToDO: Вывод ошибки, что не получается подключиться к БД
    }

    $login = $_POST['login'];
    $password = $_POST['pass'];

    $ps = password_hash($password, PASSWORD_DEFAULT);

    $query = "SELECT * FROM Users";

    $result = $mysql->query($query);
    $user = $result->fetch_assoc();
    
    if( $user !== null ){
        echo TRUE;
        // ToDo: если найден пользователь
    } else{
        echo FALSE;
        // ToDo: информация о том, что пользователь не найден
    }

    $mysql->close();
?>
