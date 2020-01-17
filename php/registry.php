<?php
include "conn.php";


if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password']; 
    $conn->query("insert dengluzhuce values(null,'$username','$password') ");
    header('location:http://10.31.152.18/DNF/src/login.html'); //php页面的跳转。
}

