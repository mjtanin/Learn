<?php

$students = [
    "rohim",
    "korim",
    "jamal",
];


// array last element remove function;

array_pop($students);

// array last element add function;
$students[] = "tanin";

// Array first element add function;
array_unshift($students, "mahfuzur");

// Array last element aded function;
array_push($students, "rasel");

// Print function
print_r($students);

array_shift($students);