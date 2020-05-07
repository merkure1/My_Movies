<?php
try
{
$pdo = new PDO('mysql:host=mlatortue2018@lamp.cse.fau.edu;dbname=mlatortue2018', 'mlatortue2018', 'MeuP9STKrM');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo "Connected successfully"; }
catch (PDOException $e)
{
echo 'Unable to connect to the database server: ' . $e->getMessage();
exit();
}
?>