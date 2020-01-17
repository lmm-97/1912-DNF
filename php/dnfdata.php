<?php
include "conn.php";

//查询输出接口
$arr=array();
$result=$conn->query("select * from index1");
//遍历数据库
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}
//json格式输出
echo json_encode($arr);