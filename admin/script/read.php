<?php

function getAll($tbl)
{
    $pdo = Database::getInstance()->getConnection();
    $queryAll = 'SELECT * FROM ' . $tbl;
    $results = $pdo->query($queryAll);

    if ($results) {
        return $results->fetchALL(PDO::FETCH_ASSOC);
    } else {
        return 'There was a problem accessing this info';
    }
}

function getkidAll($tbl){
    $pdo = Database::getInstance()->getConnection();
    $queryAll = 'SELECT * FROM ' . $tbl.' WHERE  media_premission = "1" ';
    $results = $pdo->query($queryAll);

    if ($results) {
        return $results->fetchALL(PDO::FETCH_ASSOC);
    } else {
        return 'There was a problem accessing to get the kid info';
    }

}


// SELECT * FROM tbl_media AS t, tbl_category AS t2, tbl_media_category AS t3 WHERE t.media_id = t3.media_id AND t2.category_id = t3.category_id AND t2.category_name = 'movie'

function getMoviesByFilter($args){
    $pdo = Database::getInstance()->getConnection();

    $filterQuery = 'SELECT * FROM '.$args['tbl1'].' AS t, '.$args['tbl2'].' AS t2, '.$args['tbl3']. ' AS t3 ';
    $filterQuery .= ' WHERE t.'.$args['col'].' = t3.'.$args['col'];
    $filterQuery .= ' AND t2.'.$args['col2'].' = t3.'.$args['col2'];
    $filterQuery .= ' AND t2.'.$args['col3'].' = "'.$args['filter'].'"';

    $results = $pdo->query($filterQuery);

    if($results){
        return $results->fetchALL(PDO::FETCH_ASSOC);
    }else{
        return ' There was some problems';
    }
}


// SELECT * FROM tbl_media AS t, tbl_category AS t2, tbl_media_category AS t3 WHERE t.media_id = t3.media_id AND t2.category_id = t3.category_id AND t2.category_name = 'movie' AND t.media_premission = '0'
function getMoviesBykidFilter($args){
    $pdo = Database::getInstance()->getConnection();
    $filterQuery = 'SELECT * FROM '.$args['tbl1'].' AS t, '.$args['tbl2'].' AS t2, '.$args['tbl3']. ' AS t3 ';
    $filterQuery .= ' WHERE t.'.$args['col'].' = t3.'.$args['col'];
    $filterQuery .= ' AND t2.'.$args['col2'].' = t3.'.$args['col2'];
    $filterQuery .= ' AND t2.'.$args['col3'].' = "'.$args['filter'].'"';
    $filterQuery .= ' AND t.media_premission = " 1 " ';

    $results = $pdo->query($filterQuery);

    if($results){
        return $results->fetchALL(PDO::FETCH_ASSOC);
    }else{
        return ' There was some problems';
    }

}


// SELECT * FROM tbl_media AS t, tbl_category AS t2, tbl_time AS t3, tbl_media_detail AS t4 WHERE t.media_id = t4.media_id AND t2.category_id = t4.category_id AND t3.time_id = t4.time_id AND t2.category_name = 'movie' AND t3.time = '90s'

function getDetail($args){
    $pdo = Database::getInstance()->getConnection();

    $filterQuery = 'SELECT * FROM '.$args['tbl1'].' AS t, '.$args['tbl2'].' AS t2, '.$args['tbl3']. ' AS t3, '.$args['tbl4']. ' AS t4 ';
    $filterQuery .= ' WHERE t.'.$args['col'].' = t4.'.$args['col'];
    $filterQuery .= ' AND t2.'.$args['col2'].' = t4.'.$args['col2'];
    $filterQuery .= ' AND t3.'.$args['col3'].' = t4.'.$args['col3'];
    $filterQuery .= ' AND t2.'.$args['col4'].' = "'.$args['category'].'"';
    $filterQuery .= ' AND t3.'.$args['col5'].' = "'.$args['time'].'"';
    
    $results = $pdo->query($filterQuery);

    if($results){
        return $results->fetchALL(PDO::FETCH_ASSOC);
    }else{
        return ' There was some problems';
    }


}

function permission($id){
    $pdo = Database::getInstance()->getConnection();
    $queryMovie = 'UPDATE tbl_media SET media_premission=:premission WHERE media_id= :id';
    $movie_set =  $pdo->prepare($queryMovie);
    $movie_result = $movie_set->execute(
        array(
            ':premission' => '0',
            ':id' => $id,
        )
        );

        if($movie_result){
            $getMovie = 'SELECT * FROM tbl_media WHERE  media_id = :id';
            $returnMovie = $pdo->prepare($getMovie);
            $result = $returnMovie ->execute(
                array(
                    ':id' => $id,
                )
                ); 
            

            // $results = $pdo->query($returnMovie );
            // var_dump($results );
            // exit;
            
        if($result){
            $results = $returnMovie->fetch(PDO::FETCH_ASSOC);
            return $results;
        }
               
        }else{
            return'error';
        }
}

function permission_kid($id){
    $pdo = Database::getInstance()->getConnection();
    $queryMovie = 'UPDATE tbl_media SET media_premission=:premission WHERE media_id= :id';
    $movie_set =  $pdo->prepare($queryMovie);
    $movie_result = $movie_set->execute(
        array(
            ':premission' => '1',
            ':id' => $id,
        )
        );

        if($movie_result){
            $getMovie = 'SELECT * FROM tbl_media WHERE  media_id = :id';
            $returnMovie = $pdo->prepare($getMovie);
            $result = $returnMovie ->execute(
                array(
                    ':id' => $id,
                )
                ); 
            
        if($result){
            $results = $returnMovie->fetch(PDO::FETCH_ASSOC);
            return $results;
        }
               
        }else{
            return'error';
        }

}
