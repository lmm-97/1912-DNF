<?php
include "conn.php";
if(isset($_POST['user']) && isset($_POST['pass'])){
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $result=$conn->query("select * from dengluzhuce where username='$user' and password='$pass' ");

    if($result->fetch_assoc()){//匹配
        echo '1';
    }else{//不匹配
        echo '0';
    }
}