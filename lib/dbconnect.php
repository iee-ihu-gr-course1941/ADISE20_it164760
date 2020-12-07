<?php

$host='localhost';
$db = 'it164760';
require_once "config_local.php";

$user=$DB_USER;
$pass=$DB_PASS;


if(gethostname()=='users.iee.ihu.gr'){
	$mysqli=new mysqli($host, $user,$pass,$db,null,'/home/student/it/2016/it164760/mysql/run/mysql.sock');
	}
	else{
		$mysqli = new mysqli($host,$user,$pass,$db);
	}
if($mysqli->connect_errno){
	echo "Failed to connect to Mysql: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	
	}
?>