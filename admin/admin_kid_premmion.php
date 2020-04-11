<?php
require_once '../load.php';


if (isset($_GET['media_id'])) {
    $id = $_GET['media_id'];
    $results = permission($id);
    
    echo json_encode($results);
} else {
   echo 'error';
}