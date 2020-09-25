<?php

$student = [
    "First Name"    => "Tanin",
    "Last Name"     => "Ahmed",
    "Email Address" => "taninpabna@gmail.com",
    "Class Roll"    => 6214,
];

// echo $student["First Name"]." ". $student["Last Name"]."\n";
// printf("%s %s",$student["First Name"], $student["Last Name"]);

// Array Convert String 
// $join = join("\n",$student);
// echo $join;

// Array Convert Serialize Data for save file 
/*
$serialize = serialize($student);
echo $serialize;
$newStudent = unserialize($serialize);
print_r($newStudent);
*/

// Array Convert Json Data 
$json = json_encode($student);
echo $json;
// Json Data Convert stdClass Object
$newStudent = json_decode($json);
print_r($newStudent);

// Json Convert Array 
$newStudent2 = json_decode($json, true);
print_r($newStudent2);