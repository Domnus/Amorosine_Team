<?php
	$servername = "localhost";
	$username = "ong_amorosine";
	$password = "amorosine";

	// Create connection
	$conn = new mysqli($servername, $username, $password);

	// Check connection
	if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
	}
	echo "Connected successfully";
?> 