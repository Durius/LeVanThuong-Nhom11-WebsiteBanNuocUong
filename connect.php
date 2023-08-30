
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "coffeeshop";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

$user = $_POST['user'];
$email = $_POST['email'];
$password = $_POST['password'];
$gender = $_POST['gt'];
$hobbies = implode(', ', $_POST['hoppy']);
$nationality = $_POST['quoctich'];
$note = $_POST['note'];

$sql = "INSERT INTO users (username, email, password, gender, hoppy, country, note)
        VALUES ('$user', '$email', '$password', '$gender', '$hobbies', '$nationality', '$note')";

if ($conn->query($sql) === TRUE) {
    echo "<a href='index.html'></a>";
} else {
    echo "Lỗi: " . $sql . "<br>" . $conn->error;
}

// Đóng kết nối đến cơ sở dữ liệu
$conn->close();
?>
