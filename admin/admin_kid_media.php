<?php
require_once '../load.php';

if(isset($_GET['media'])){
    $tbl ="tbl_" . trim($_GET['media']);
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
    $results = getMoviesBykidFilter($args);
    // $results = getMoviesByFilter($tbl1, $tbl2, $tbl3, $col, $col2, $col3, $filter);
    echo json_encode($results);
} else {
    $results = getkidAll($tbl);
    echo json_encode($results);
}