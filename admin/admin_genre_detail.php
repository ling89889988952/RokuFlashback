<?php
require_once '../load.php';


if (isset($_GET['category']) && isset($_GET['time'])){
    $args = array(
        'tbl1'    =>'tbl_media',
        'tbl2'    =>'tbl_category',
        'tbl3'    =>'tbl_time',
        'tbl4'    =>'tbl_media_detail',
        'col'     =>'media_id',
        'col2'    =>'category_id',
        'col3'    =>'time_id',
        'col4'    =>'category_name',
        'col5'    =>'time',
        'category'=>$_GET['category'],
        'time'    =>$_GET['time'],
    );
    $results = getDetail($args);
    // $results = getMoviesByFilter($tbl1, $tbl2, $tbl3, $col, $col2, $col3, $filter);
    echo json_encode($results);
} else {
    echo "error";
}