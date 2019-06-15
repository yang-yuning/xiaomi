<?php

 # 01-获取前端页面传递进来的参数 id
 $id = isset($_GET['id']) ? $_GET['id'] : '';


 # 02-根据参数来更新后端的数据weibo.json
 # 02-1 file_get_contents
 $filePath = "../json/list1.json";
 
//  # 02-2 fopen 方法以只读模式打开文件
 $content = fread(fopen($filePath,"r"),filesize($filePath));

//  # 02-3 把读取的json数据转换为PHP字典
 $data = json_decode( $content,true);
//  var_dump($data)

 # 02-4 遍历字典，找到指定id对应的数据
 for($i = 0 ; $i < count($data);$i++)
 {
     if($id == $data[$i]["id"])
     {
         //var_dump($data[$i]);
         # 02-5 修改当前数据中的qty点赞数量
         if($data[$i]["qty"]== 20){
            $data[$i]["qty"] =20;
         }else{
            $data[$i]["qty"]++;
         }
          # 03-把对应数据中最新的点赞数量返回
         //  echo $data[$i]["qty"];
     }
 }

 #4 把最新的数据更新到json文件
 $handle = fopen($filePath,"w");
 fwrite($handle,json_encode($data,true));

 
 #5 关闭文件
//  fclose($handle);
?>