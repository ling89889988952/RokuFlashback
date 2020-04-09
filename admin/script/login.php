<?php

function login($username, $password){
    $pdo = Database::getInstance()->getConnection();
    //Check existance
    $check_exist_query = 'SELECT COUNT(*) FROM tbl_user WHERE username= :username';
    $user_set = $pdo->prepare($check_exist_query);
    $user_set->execute(
        array(
            ':username' => $username,
        )
    );

    if($user_set->fetchColumn()>0){
        //Log user in
        $get_user_query = 'SELECT * FROM tbl_user WHERE username = :username';
        $get_user_query .= ' AND password = :password';
        $user_check = $pdo->prepare($get_user_query);
        $user_check->execute(
            array(
                ':username'=>$username,
                ':password'=>$password
            )
        );

        while($found_user = $user_check->fetch(PDO::FETCH_ASSOC)){
            $id = $found_user['id'];
            //Logged in!
            $message = 'You just logged in!';
            $_SESSION['id'] = $id;
            $_SESSION['username'] = $found_user['username'];

            $user = array();
            $user ['id']    =  $found_user['id'];
            $user ['admin'] =  $found_user['username'];
            $user ['email'] =  $found_user['email'];


            $message = json_encode($user);
        }
        
    }else{
        //User does not exist
        $message = 'User does not exist';
    }


    return $message;
}

function confirm_logged_in(){
    if(!isset($_SESSION['id'])){
        redirect_to('admin_login.php');
    }
}

function logout(){
    session_destroy();
    redirect_to('admin_login.php');
}