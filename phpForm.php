
<!DOCTYPE html>
<html>
 
<head>
    <title>Inserts</title>
</head>
 
<body>
    <center>

<?php

// Enable error reporting
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Retrieve POST data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$energyType = $_POST['energyType'];
$energyAmount = $_POST['energyAmount'];

// Database credentials
$servername = "localhost";
$username = "hitesh";
$password = "hitesh123";
$db = "rec";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO sellinglist VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssi", $name, $email, $phone, $address, $energyType, $energyAmount);

// Execute statement
if ($stmt->execute()) {
    echo "ADDED: " . $name . ", " . $email . ", " . $phone;
} else {
    echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>

</center>
</body>
 
</html>
