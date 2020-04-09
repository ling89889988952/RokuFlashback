<?php

require_once '../load.php';

if(isset($_POST['username'])){
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if(!empty($username) && !empty($password)){
        //Log user in
        $message = login($username, $password);
    }else{
        $message = 'Please fill out the required field';
    }

    echo $message;

}