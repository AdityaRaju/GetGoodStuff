<?php
$db= new mysqli('localhost','root','root','getgoodstuff');
if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}
$stmt = $db->prepare("INSERT INTO members (uname,emailad,userpass) VALUES(?,?,?)");
$stmt->bind_param( $_POST['usernamesignup'],$_POST['emailsignup'],md5($_POST['passwordsignup']));
$stmt->execute(); 
$stmt->close();
?>