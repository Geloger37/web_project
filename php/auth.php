<?php
// php
    // ToDo: запустить базу на локальном
    const HOST = 'localhost';
    const USER = 'root';
    const PASSWORD = 'root';
    const DATABASE = 'Users';


    $mysql = new mysqli(HOST, USER, PASSWORD, DATABASE);
    if($mysqli->connect_errno){
        // ToDO: Вывод ошибки, что не получается подключиться к БД
    }

    $login = $_POST['login'];
    $password = $_POST['password'];

    $query = 'SELECT * FROM ' . DATABASE . ' WHERE login = '. $login . ' AND password = ' . $password; 
    $result = $mysql->query($query);
    $user = $result->fetch_assoc();
    
    if(count($user) == 1){
        // ToDo: если найден пользователь
    } else{
        // ToDo: информация о том, что пользователь не найден
    }

    $mysql->close();
?>
