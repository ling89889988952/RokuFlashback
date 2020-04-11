<?php
require_once '../load.php';


if (isset($_GET['filter'])) {

    $args = array(
        'tbl1'=>'tbl_media',
        'tbl2'=>'tbl_time',
        'tbl3'=>'tbl_media_time',
        'col'=>'media_id',
        'col2'=>'time_id',
        'col3'=>'time',
        'filter'=>$_GET['filter']
    );
    $results = getMoviesByFilter($args);
    // $results = getMoviesByFilter($tbl1, $tbl2, $tbl3, $col, $col2, $col3, $filter);
    echo json_encode($results);
} else {
    $results = getAll($tbl);
    echo json_encode($results);
}