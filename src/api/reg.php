<?php
error_reporting(E_ALL ^ E_NOTICE);
    $uname = $_REQUEST["uname"];
    $file_path = '../json/reg.json'; 
        $json = json_decode(file_get_contents($file_path),true);
        for($i = 0,$len = count($json);$i<$len;$i++){
            if($uname == $json[$i]["uname"]){  
                echo true;
                break;
            }else if($i == $len-1 && $uname != $json[$i]["uname"])
            {
                $pwd = $_REQUEST["pwd"];
                if($uname != null && $pwd != null){
                    $json[] = array("uname"=>$uname,
                    "pwd"=>$pwd);
                    file_put_contents($file_path,json_encode($json));
                }
               
                
            }
        }
?>