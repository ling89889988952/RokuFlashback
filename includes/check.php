<?php
    require('functions.php');

    if (isset($_GET['password'])) {
        $password = checkParent($pdo);
    }

    echo json_encode($password);