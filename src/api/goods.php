<?php
error_reporting(E_ALL ^ E_NOTICE);
# 获取提交的参数
 $id = isset($_GET['id']) ? $_GET['id'] : '';

 
# 加载已有的JSON文件
 $file_path2 = '../json/cart.json'; 
 $filePath = "../json/list1.json";


 # 读取文件的内容
 $content = fread(fopen($filePath,"r"),filesize($filePath));
//  var_dump($content);
$json = file_get_contents("../json/cart.json");
// var_dump($json);


// 转成字典
$data = json_decode($content,true);
//  var_dump($data);
$data = json_decode($json,true);
// var_dump($data["ids"]);

$len = count($data["ids"]);

for($i=0;$i<$len;$i++){
    if($id == $data["ids"][$i]){
        $arr = array(
            "message" => "1"
        );    
        
        break;
    }else if($i == $len-1 && $id != $data["ids"][$i]){
        // 添加新id
        $data["ids"][] = $id;
        $arr = array(
            "message" => "2"
        );    
    };
}
if($data["ids"] == []){
    // 添加新id
    $data["ids"][] = $id;
    $arr = array(
        "message" => "3"
    );
};

//    #4 把最新的数据更新到json文件
echo json_encode($arr,JSON_UNESCAPED_UNICODE);
 //    #4 把最新的数据更新到json文件
 file_put_contents($file_path2,json_encode($data));
?>