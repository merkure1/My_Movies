<!-- 
//  include("./config.php");

// if(isset($_POST['register']))
// {   
//     $register = mysqli_num_rows(mysqli_query($con, "SELECT * FROM `Account` WHERE `user` ='$user'"));
//     if($register == 0)
//     {
//         $insert = mysqli_query($con,"INSERT INTO `Account` ( `user` , `pass` , `email` ) VALUES ('$user','$password','$email')");
//         if($insert)
//             echo "success";
//         else
//             echo "error";
//     }
//     else if($register != 0)
//         echo "exist";
// }

// if($_SERVER["REQUEST_METHOD"] == "POST")
// {
//     $myusername = mysqli_real_escape_string($db,$_POST['username']);
//     $mypassword = mysqli_real_escape_string($db,$_POST['password']); 

//     $login = mysqli_num_rows(mysqli_query($con, "SELECT * FROM `Account` WHERE `user` ='$myusername' AND `pass` ='$mypassword'"));
//     if($login != 0)
//         echo "success";
//     else
//         echo "error";
// }

$error=''; //Variable to Store error message;
if(isset($_POST['submit'])){
 if(empty($_POST['user']) || empty($_POST['pass'])){
 alert("Username or Password is Invalid");
 }
 else
 {
 //Define $user and $pass
 $user=$_POST['user'];
 $pass=$_POST['pass'];
 //Establishing Connection with server by passing server_name, user_id and pass as a patameter
 $conn = mysqli_connect("mlatortue2018@lamp.cse.fau.edu'", "mlatortue2018", "MeuP9STKrM");
 //Selecting Database
 $db = mysqli_select_db($conn, "mlatortue2018");
 //sql query to fetch information of registerd user and finds user match.
 $query = mysqli_query($conn, "SELECT * FROM Account WHERE pass='$pass' AND user='$user'");
 
 $rows = mysqli_num_rows($query);
 if($rows == 1){
 header("Location: welcome.php"); // Redirecting to other page
 }
 else
 {
 $error = "Username of Password is Invalid";
 }
 mysqli_close($conn); // Closing connection
 }
}

 -->
 
<!-- $servername = "mlatortue2018@lamp.cse.fau.edu";
$username = "mlatortue2018";
$password = "MeuP9STKrM";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully"; -->
<?php
// session_start();
// alert("inside");
// echo "inside";

// if(isset($_POST['Submit']))
// {
//     echo "inside 2";

//  $host="mlatortue2018@lamp.cse.fau.edu";
//  $username="mlatortue2018";
//  $password="MeuP9STKrM";
//  $databasename="mlatortue2018";
//  $connect=mysql_connect($host,$username,$password);
//  $db=mysql_select_db($databasename);

//  $user=$_POST['username'];
//  $pass=$_POST['password'];
//  $select_data=mysql_query("select * from user where user='$user' and pass='$pass'");
//  if($row=mysql_fetch_array($select_data))
//  {
//   $_SESSION['email']=$row['email'];
//   echo "success";
//  }
//  else
//  {
//   echo "fail";
//  }
//  exit();
// }

$connection = mysql_connect("mlatortue2018@lamp.cse.fau.edu", "mlatortue2018", "MeuP9STKrM"); // Establishing connection with server..
$db = mysql_select_db("mlatortue2018", $connection); // Selecting Database.
$user=$_POST['username1']; // Fetching Values from URL.
$password= sha1($_POST['password1']); // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not
// $email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
// if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
// echo "Invalid Email.......";
// }else{
// Matching user input email and password with stored email and password in database.
$result = mysql_query("SELECT * FROM Account WHERE user='$user' AND pass='$password'");
$data = mysql_num_rows($result);
if($data==1){
echo "Successfully Logged in...";
}else{
echo "Username or Password is wrong...!!!!";
}
// }
mysql_close ($connection); // Connection Closed.
?>
