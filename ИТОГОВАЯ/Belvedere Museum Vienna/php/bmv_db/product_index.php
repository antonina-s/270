<?php
// Подключаем нашу БД:
require 'db_connect.php';

// Выводим id:
// print_r($_GET);
// echo '<h1>'.$_GET['id'].'</h1>';

// Получаем id товара и приводим к числу int:
$id = (int)$_GET['id'];

// echo $id;
if ($id === 0) {
    die('<h1>-!!!- Неверный идентификатор. -!!!-');
}

// Запрос выборки по id:
$q = "SELECT id, title, tit1, tit2, p1, price_var, img, img_add, p2, as_exh, url_exh, author, pub_y, publisher, pages, format, isbn FROM bmv_shop_items WHERE id = $id;";

// Запрос в БД.
$item = $pdo->query($q, PDO::FETCH_ASSOC);

// Выводим результат запроса:
$result = $item->fetch();
// print_r($result);

// Выводим данные в документ.
// Функция в db_connect.php и вывод на страницу:
// debug($result);

// Шаблон для вывода данных на страницу.
require 'pages/product.php';

// var_dump($pdo);
?>