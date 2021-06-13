<?php

const HOST = 'localhost';
const USER = 'root';
const PASSWORD = 'root';
const DATABASE = 'poisk_rukovoditelia';


$mysql = new mysqli(HOST, USER, PASSWORD, DATABASE);
if($mysql->connect_errno){
    // ToDO: Вывод ошибки, что не получается подключиться к БД
}

$login = $_GET['login'];
$password = $_GET['pass'];

$ps = password_hash($password, PASSWORD_DEFAULT);

$query_check = 'SELECT * FROM Users WHERE login =' . '\'' . $login . '\'';

$result = $mysql->query($query_check);
$users = $result->fetch_assoc();

if($users !== null) {
    echo json_encode(array('message' => 'Пользователь с такой электронной почтой уже существует.', 'success' => 0));
} else {
    $ids = 'SELECT max(id) as id FROM Users';
    $res_ids = $mysql->query($ids);
    $cnt_ids = $res_ids->fetch_assoc();
    $id = 1;
    if($cnt_ids !== null) {
        $id = $cnt_ids['id'] + 1;
    }
    $query = "INSERT INTO Users values({$id}, '{$login}', '{$ps}')";

    $res = $mysql->query($query);
    echo json_encode(array('message' => 'Пользователь успешно зарестрирован.', 'success' => 1));
}


$mysql->close();


?>
