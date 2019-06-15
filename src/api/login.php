<?php
error_reporting(E_ALL ^ E_NOTICE);
$uname = isset($_POST['uname']) ? $_POST['uname'] : '';
$pwd = isset($_POST['pwd']) ? $_POST['pwd'] : '';


# 获取提交的参数
$filePath = "../json/reg.json";

# 读取文件的内容
$content = fread(fopen($filePath,"r"),filesize($filePath));
//  var_dump($content);

$data = json_decode($content,true);
// var_dump($data);
// 获取数组长度
$len = count($data);

// 遍历数组
for($i=0;$i<$len;$i++){
    if($data[$i]['uname'] == $uname && $data[$i]['pwd'] == $pwd){
        echo "true";
        return;
        // 判断他有没遍历到最后一个
    }else if($i == $len-1 && $uname != $data[$i]["uname"]){
        echo 'false';
    }
   }

// #4 把最新的数据更新到json文件
// echo json_encode($data,JSON_UNESCAPED_UNICODE);

?>