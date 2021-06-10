<?php

const HOST = 'localhost';
const USER = 'root';
const PASSWORD = 'root';
const DATABASE = 'poisk_rukovoditelia';


$mysql = new mysqli(HOST, USER, PASSWORD, DATABASE);
if($mysql->connect_errno){
    // ToDO: Вывод ошибки, что не получается подключиться к БД
}

echo json_encode($_POST);

$login = $_POST['login'];
$password = $_POST['pass'];

$ps = password_hash($password, PASSWORD_DEFAULT);

$query_check = 'SELECT * FROM Users WHERE login =' . '\'' . $login . '\'';


/*
$result = $mysql->query($query_check);
$users = $result->fetch_assoc();

if($users !== null) {
    echo json_encode(array('message' => 'Пользователь с такой электронной почтой уже существует.', 'success' => 0));
}

setcookie($login, time() - 3600);

$mysql->close();

echo password_verify($password, $pwd['pasword']);
*/

?>
