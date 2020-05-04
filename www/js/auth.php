<?php
 include("config.php");

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

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $myusername = mysqli_real_escape_string($db,$_POST['username']);
    $mypassword = mysqli_real_escape_string($db,$_POST['password']); 

    $login = mysqli_num_rows(mysqli_query($con, "SELECT * FROM `Account` WHERE `user` ='$myusername' AND `password` ='$mypassword'"));
    if($login != 0)
        echo "success";
    else
        echo "error";
}

?>