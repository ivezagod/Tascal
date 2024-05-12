<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "your_email@example.com"; // Your email address
    $subject = "New Message from $name";
    $body = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body)) {
        echo '<script>alert("Message sent successfully. Thank you!"); window.location.href = "index.html";</script>';
    } else {
        echo '<script>alert("Sorry, there was an error sending your message. Please try again later."); window.location.href = "index.html";</script>';
    }
}
?>
