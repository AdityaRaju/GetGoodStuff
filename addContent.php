<?php
$con = new mysqli("localhost", "root", "root", "getgoodstuff");
/*if (mysqli_connect_errno()){
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}*/
$title=$_POST['site_name'];
$url=$_POST['job_url'];
$description=$_POST['description'];
$keywords=$_POST['keywords'];
$categories=$_POST['categories'];
$rating=$_POST['rating'];
$sql="INSERT INTO content (title,date,url,description, keywords, categories,rating)
VALUES
('$title',now(),'$url','$description','$keywords','$categories','$rating')";
if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "Saved Succesfully";

mysqli_close($con);
?>