<?php
require_once '../load.php';


if (isset($_GET['media_id'])) {
    $id = $_GET['media_id'];
    $results = permission($id);
    return $results;
} else {
   echo 'error';
}