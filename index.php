<?php 
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $user    = filter_var( $_POST['username'],FILTER_SANITIZE_STRING);
        $email   = filter_var( $_POST['email'],FILTER_SANITIZE_EMAIL);
        $phone   = filter_var( $_POST['phone'],FILTER_SANITIZE_NUMBER_INT);
        $message = filter_var( $_POST['message'],FILTER_SANITIZE_STRING);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../contact/css/all.min.css">
    <link rel="stylesheet" href="../contact/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display&family=DM+Serif+Text&family=Montserrat+Subrayada:wght@400;700&family=Montserrat:wght@100;500&family=Raleway:ital,wght@0,600;0,800;1,200;1,400&family=Roboto:wght@100;300;400;500&display=swap">
    <link rel="stylesheet" href="../contact/css/contact.css">
    <title>Contact</title>
</head>
<body>
    <div id="gradation">
        <div class="box b1"></div>
        <div class="box b2"></div>
    </div>
    <!-- Start Form -->
    <div class="container">
        <h1 class="text-center">Contact Me</h1>


        <form action="<?php $_SERVER["PHP_SELF"] ?>" method="POST" class="contact-form">
        
            
            <div class="form-group">
                <input class="user form-control" type="text" name="username" placeholder="Type Your User Name" value="<?php if(isset($user)): echo $user; endif; ?>" required>
                <i class="fa-regular fa-user"></i>
                <div class="astreisx">*</div>
                <div class="alert alert-danger custome-alert">
                    The username should greater than or equal <strong>3</strong> character
                </div>
            </div>
            
            <div class="form-group">
                <input class="mail form-control" type="email" name="email" placeholder="Plase Enter a Validate Email" required value="<?php if(isset($email)): echo $email; endif; ?>">
                <i class="fa-regular fa-envelope"></i>
                <div class="astreisx">*</div>
                <div class="alert alert-danger custome-alert">
                    This field cannot be empty
                </div>
                <div class="alert alert-danger custome-alert2">
                    The Email Not Valid
                </div>
            </div>

            <div class="form-group">
                <input class="phonee form-control" id="phone" type="text" name="phone" placeholder="Type Your Phone Number" maxlength="11" value="<?php if(isset($phone)): echo $phone; endif; ?>">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <span>
                    0/11
                </span>
                <div class="alert alert-danger custome-alert">
                    Your phone number must be 11 digits long
                </div>
                <div class="alert alert-danger custome-alert3">
                </div>
            </div>

            <div class="form-group">
                <textarea class="text form-control" name="message" placeholder="Your Message!" maxlength="150" required ><?php if(isset($email)): echo $email; endif; ?></textarea>
                <span>
                    0/150
                </span>
                <div class="astreisx">*</div>
                <div class="alert alert-danger custome-alert">
                    The message must be less than 10 characters long
                </div>
            </div>
            <input class="btn" type="submit" name="mesg" value="Send Massege">
        </form>
    </div>
    <!-- End Form -->
    
    <script src="../contact/js/bootstrap.bundle.min.js"></script>
    <script src="../contact/js/jquery.js"></script>
    <script src="../contact/js/contact.js"></script>
</body>
</html>