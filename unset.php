<?php

$person = [
    "fName" => "Tanin",
    "lName" => "Ahmed"
];

print_r($person);

unset($person["lName"]);

print_r($person);