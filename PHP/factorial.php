<?php 
// Single Value 
// $result = 1;
// for($i = 1; $i <= 4; $i++){
//     $result = $result * $i;
// }
// echo $result."\n";

// $result = 1;

// for($i = 1; $i <= 4; $i++){
//     $result *= $i;
// }
// echo $result."\n";

// $n = 4;
// $result = 1;

// for($i = $n; $i > 1; $i--):
//     $result *= $i;
// endfor;
// echo $result;


// Multipul Value

// for($j = 1; $j <= 20; $j++){
//     $result = 1;
//     for($i = $j; $i > 1; $i--){
//         $result *= $i;
//     }
//     echo $result."\n";
// }


// Multipul value Bast Way

$result = 1;
for($i = 1; $i <= 20; $i++){
    $result *= $i;
    echo "Factorial of {$i} is {$result} \n";
}

// Multipul value Bast Way 5 - 20;

$result = 1;
for($i = 1; $i <= 20; $i++){
    $result *= $i;
    if($i > 5):
        echo "Factorial of {$i} is {$result} \n";
    endif;
}