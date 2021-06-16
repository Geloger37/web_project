<?php

    const HOST = 'localhost';
    const USER = 'root';
    const PASSWORD = 'root';
    const DATABASE = 'poisk_rukovoditelia';

    $mysql = new mysqli(HOST, USER, PASSWORD, DATABASE);
    if($mysql->connect_errno){
        // ToDO: Вывод ошибки, что не получается подключиться к БД
    }

    $surname = $_GET['surname'];
    $name = $_GET['name'];
    $middle_name = $_GET['middle_name'];
    $campus = $_GET['campus'];
    $login = $_GET['login'];
    
    $query_check = 'SELECT id FROM Users WHERE login =' . '\'' . $login . '\'';

    $result = $mysql->query($query_check);
    $uid = $result->fetch_assoc();

    $ids = "SELECT max(id) as id FROM Students";
    $res_ids = $mysql->query($ids);
    $cnt_ids = $res_ids->fetch_assoc();

    $id = 1;
    if($cnt_ids !== null) {
        $id = $cnt_ids['id'] + 1;
    }

    $query = "INSERT INTO Students VALUES({$id}, {$uid['id']}, '{$name}', '{$surname}', '{$middle_name}', 'group')";

    echo $query;

    $res = $mysql->query($query);   

?>
