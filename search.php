<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Good Stuff</title>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="css/jigowatt.css" rel="stylesheet">
<style>
            *{
                padding:0;
                margin:0;
            }
             body{
                 font-family:"Helvetica Neue",Arial,Helvetica,Geneva,sans-serif;

            }
            h1{
                font-size:70px;
                line-height:180px;
                text-transform: uppercase;
				text-align: center;
                color:#1275AD;
                position:absolute;
                text-shadow:0 1px 1px #45A8DF;
                top:-50px;
                left:-20px;
                white-space: nowrap;
            }
            span.reference{
                position:fixed;
                left:10px;
                bottom:10px;
                font-size:11px;
            }
            span.reference a{
                color:#fff;
                text-decoration:none;
                text-transform: uppercase;
                text-shadow:0 1px 0 #000;
            }
            span.reference a:hover{
                color:#f0f0f0;
            }
            .box{
                margin:129px auto 0 auto;
                height:430px;
                width:100%;
                position:relative;
                -moz-box-shadow:0px 0px 5px #444;
                -webkit-box-shadow:0px 0px 5px #444;
                box-shadow:0px 0px 5px #444;
                background:#1783BF url(click.png) no-repeat 380px 80px;
            }
            .box h2{
				background-color:#1275AD;
				border-color:#0E5A85 #0E5A85 #0E5A85;
				border-style:ridge ridge solid;
				border-width:1px;
				color:#FFFFFF;
				font-size:22px;
				padding:10px;
				text-shadow:1px 1px 1px #000000;
            }

</style>
</head>
<body>
<h1>Good Stuff</h1>
<?php
@$keyword=$_POST['keyword'];
echo $keyword;
$con = new mysqli("localhost", "root", "root", "getgoodstuff");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$result = mysqli_query($con,"select url,title,description,date,keywords,rating from content where keywords like '%$keyword%'");
while($row = mysqli_fetch_array($result))
  {?>
  <div class="container">
      <div class="row-fluid">
        <ul class="thumbnails">
        
        <li class="span4">
          <div class="thumbnail">
            <img data-src="holder.js/300x200" alt="">
            <div class="caption">
              <h4>
                  <a href=<?php echo "'".$row['url'] . "'"; ?>><?php echo $row['title']; ?></a>
              </h4>
              <p><?php echo $row['description']; ?>..</p>
              <div>
                <span class="label">
                  <?php
                  $d = new DateTime($row['date']);
                  echo $d->format('D, M d, H:i');
                  ?>
                </span>
				&nbsp;&nbsp;
				<span class="label">
                  Rating:  
				<?php echo $row['rating']; ?></span>
                              </div>
            </div>
          </div>
        </li>
         </ul>
      </div>
	 </div>
	 
	  </body>
	  </html>
 <?php
  }
?>