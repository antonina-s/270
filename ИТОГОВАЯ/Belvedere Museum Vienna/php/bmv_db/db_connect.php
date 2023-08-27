<?php
// Подключение БД в MySQL.
$db_name = 'bmv_shop';
$host = 'localhost';
$login = 'root';
$password = '';
$dsn = "mysql:dbname=$db_name;host=$host";

// Всё хорошо: object(PDO)#1 (0) { }

// Пробуем подключение и, если есть ошибка, выводим сообщение.
try{
    $pdo = new PDO($dsn, $login, $password);
}
catch(PDOException $e) {
    // print $e->getMessage('Error!!!');
    // Можно расписать по строкам ошибку:
    // echo '<hr>Сообщение: ' . $e->getMessage();
    // echo '<hr>Код ошибки: ' . $e->getCode();
    // echo '<hr>Строка: ' . $e->getLine();
    // echo '<hr>Файл: ' . $e->getFile();
    // echo '<hr>';
    // Можно прекратить выполнение кода:
    die('<h1>-!!!- Ошибка подключения к Базе данных. -!!!-</h1><h2>Текст для пользователя.</h2>');
}

function debug($value) {
    // Тег pre сохраняет форматирование.
    echo '<pre>';
    print_r($value);
    echo '</pre>';
}

// var_dump($pdo);
?>