<?php 

// $students = [
//     12 => "tanin",
//     13 => "rohim",
//     "rasel",
//     20 => "sakil",
//     "robin"
// ];


$students = [
    "tanin" => [
        "First Name" => "Tanin",
        "Last Name"  => "Ahmed",
        "Address"    => [
            "Village"      => "Nagdemra",
            "Post Office"  => "Nagdemra",
            "Union"        => "Nagdemra",
            "Post Code"    => 6670,
            "Sub_Dristrict"     => "Santhia",
            "Dristrict"         => "Pabna",
            "Country"           => "Bangladesh",
        ]
    ]
];


// print_r($students);

// foreach($students as $key => $value){
//     echo $key."=".$value."\n";
//     if(is_array($value)){
//         foreach($value as $key1 => $value1){
//             echo $key1."=".$value1."\n";
//             if(is_array($value1)){
//                 foreach($value1 as $key2 => $value2){
//                     echo $key2."=".$value2."\n";
//                 }
//             }
//         }
//     }
// }