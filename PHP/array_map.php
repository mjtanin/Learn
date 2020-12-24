<?php

$number = [1,2,3,4,5];
$goods = ["cup", "table", "pen", "cap", "jog", "mobile"];


function test($a, $b){
    return $a ." = ". $b ;
}

$test_map = array_map(test ,$number, $goods);

print_r($test_map);