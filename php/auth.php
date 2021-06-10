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

    $query = 'SELECT pasword FROM Users WHERE login =' . '\'' . $login . '\'';
    

    $result = $mysql->query($query);
    $pwd = $result->fetch_assoc();
    
    setcookie($login, time() - 3600);

    $mysql->close();
    
    echo password_verify($password, $pwd['pasword']);
?>
