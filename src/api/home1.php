<?php
error_reporting(E_ALL ^ E_NOTICE);
 # 获取提交的参数
 $filePath = "../json/home1.json";

 # 读取文件的内容
 $content = fread(fopen($filePath,"r"),filesize($filePath));
//  var_dump($content);

 $data = json_decode($content,true);
 // var_dump($data);

#4 把最新的数据更新到json文件
 echo json_encode($data,JSON_UNESCAPED_UNICODE);

  // #5 关闭文件
  // fclose($handle);

?>