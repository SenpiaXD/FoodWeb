<?php

$expectedUsername = "admin";
$expectedPassword = "admin124";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === $expectedUsername && $password === $expectedPassword) {
        header("location: ./crud.php");
    } else if ($username != $expectedUsername && $password != $expectedPassword){
        echo "<script> alert('Failed! Failed to login'); </script>";
    } else {
        echo "<script> alert('Error'); </script>";
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>| Login Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .login {
            width: 350px;
            height: 400px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
        }

        .login h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 50px;
        }

        .login label {
            display: block;
            margin: 10px 0;
            font-size: 14px;
            color: #555;
            text-align: left;
        }

        .login input[type="text"],
        .login input[type="password"] {
            width: 100%;
            padding: 12px;
            margin: 6px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        .login input[type="submit"] {
            margin-top: 25px;
            width: 350px;
            background: #007BFF;
            color: #fff;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .login input[type="submit"]:hover {
            background: #0056b3;
        }

        .forgot-pass {
            color: #007BFF;
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 25px;
        }

        .forgot-pass:hover {
            color: #007BFF;
            cursor: pointer;
        }
    </style>
    </head>
    <body>
        <div class="login">
            <form action="login.php" method="post">
                <h1>Login</h1>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <input type="checkbox" onclick="viewPassword()">Show Password

                <input type="submit" value="Login">

                <h3 class="forgot-pass">Forgot a password</h3>
            </form>
        </div>
        <script>
            function viewPassword() {
            var x = document.getElementById("password");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
            }
        </script>
    </body>
</html>