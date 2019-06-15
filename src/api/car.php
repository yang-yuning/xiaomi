<?php
error_reporting(E_ALL ^ E_NOTICE);
 # 加载已有的JSON文件
 $filePath = "../json/list1.json";

$json = file_get_contents("../json/cart.json");
// var_dump($json);

$data2 = json_decode($json,true);
// var_dump($data2["ids"][0]);

//id
$id = $data2["ids"];
// var_dump($id)[0];

 # 读取文件的内容
 $content = fread(fopen($filePath,"r"),filesize($filePath));
//  var_dump($content);

 $data = json_decode($content,true);
//  var_dump($data);

$len = count($data2["ids"]);

$arr = array();
//  # 根据数据来修改文件的内容
 for($i = 0 ; $i<$len;$i++){
        $bb = $id[$i]-1;  
        $arr[] = $data[$bb]; 
 }
//  var_dump($arr);

//    #4 把最新的数据更新到json文件
echo json_encode($arr,JSON_UNESCAPED_UNICODE);

?>