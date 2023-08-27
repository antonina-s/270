<?php
// Подключаем нашу БД:
require 'db_connect.php';

// Запрос выборки:
$q = "SELECT tit1, tit2, price_var, img, id FROM bmv_shop_items ORDER BY pub_y DESC;";
// DESC и ASC можно отсортировать по порядку.
// SELECT `img`, `tit1`, `tit2`, `price_var` FROM `bmv_shop_items`;
// SELECT * FROM `bmv_shop_items` WHERE `id` = 2724;
// SELECT `title`, `p1`, `price-var`, `img`, `p2`, `details`, `category`, `date` FROM `bmv_shop_items` WHERE `id` = 2724;

// Запрос в БД.
// Нам не нужен (дублирование) вывод содержимого [столбцов от 0 и далее]:
$item = $pdo->query($q, PDO::FETCH_ASSOC);
// Всё хорошо: PDOStatement)#2 (1)
// var_dump($item);

// Выводим результат запроса:
// $sth = $item;
// $sth->execute();
// $result = $sth->fetchAll();
$result = $item->fetchAll();
// print_r($result);

// Выводим данные в документ.
// Функция в db_connect.php и вывод на страницу:
// debug($result);

// Шаблон для вывода данных на страницу.
require 'pages/museum-shop.php';

// var_dump($pdo);
?>