<?php
$con = new mysqli("localhost", "root", "root", "getgoodstuff");
$name=$_POST['getgoodstuff_username'];
$password=md5($_POST['password']);
$sql= "SELECT * from members where uname = '$name' AND userpass = '$password'";
if (mysqli_query($con,$sql))
  {
  session_start();
	$_SESSION['username'] = $_POST['getgoodstuff_username'];
	header ('Location: index.html');
	exit();
	}
else{
  die('Error: ' . mysqli_error($con));
  }

mysqli_close($con);

?>