<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $meessage = $_POST['message']

    $email_from = 'suchizgames@gmail.com'
    $email_subject = "Form from website"
    $email_body = "User name: $name.\n".
                    "User email: $visitor_email.\n".
                    "User message: $meessage.\n";
    $to = "suchizgames@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers)
    header("Location: index.html");
?>