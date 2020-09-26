<?php

$person = array("fname" => "Hello", "lname" => "World");

// Copy By Value //
$newPerson = $person;

$newPerson["fname"] = "Bye Bye";

print_r($newPerson);
print_r($person);


// Copy By Reference //

$anotherPerson = &$person;

$anotherPerson["lname"] = "Tanin";

print_r($person);
print_r($anotherPerson);


// Copy by value with Function //
function copyByValue($name){
    $name["fname"] .= "Change Name";
    print_r($name);
}

copyByValue($person);
print_r($person);
