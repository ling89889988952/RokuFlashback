<?php
require_once '../load.php';

if(isset($_GET['media'])){
    $tbl ="tbl_" . trim($_GET['media']);
    // echo $tbl;
    // var_dump($tbl);
    // exit;
}

if (isset($_GET['filter'])) {

    $args = array(
        'tbl1'=>'tbl_media',
        'tbl2'=>'tbl_category',
        'tbl3'=>'tbl_media_category',
        'col'=>'media_id',
        'col2'=>'category_id',
        'col3'=>'category_name',
        'filter'=>$_GET['filter']
    );
    $results = getMoviesByFilter($args);
    // $results = getMoviesByFilter($tbl1, $tbl2, $tbl3, $col, $col2, $col3, $filter);
    echo json_encode($results);
} else {
    $results = getAll($tbl);
    echo json_encode($results);
}
