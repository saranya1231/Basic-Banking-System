<html>
<head>
<title>Basic Banking System</title>
<link rel="stylesheet" href="style.css" >
<!-- CSS -->
<link rel="stylesheet" 
href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
 <!-- Google fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap" rel="stylesheet">
  <!--logo-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>
</head>
<body onload="loader()">

  <!-- loader for splash screen -->
  <div id="loading"></div>
<section id="nav-bar">
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#"><img src=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars"="true"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                 <!-- <a class="nav-link text-white" href="/">Home <span class="sr-only">(current)</span></a>-->
				  <a class="nav-link" href="home.html">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="customer.html">Customers & Transfer History</a>
      </li>
  
<li class="nav-item">
  <a class="nav-link" href="bank.html">About Us</a>
</li>
	  </ul>
  </div>
</nav>
</section>

<!--banner section-->
<section id="main" class="coloured-section">
  <div class="container">
    
    <h1>
   <img  src="https://image.shutterstock.com/image-vector/colorful-doodle-style-vector-illustration-600w-1913449033.jpg" width="125px" height="125px">
      Welcome To The Spark Banking System
      <!-- <img src="https://as2.ftcdn.net/jpg/01/32/11/13/500_F_132111352_vAiorf4ahmta4ZtPU9GCe8u9d1gXR3sC.jpg" width="100px" height="100px"> -->
    </h1>
  </div>
</section>



  <section id="features" class="white-section">
    <!-- <button type="button" class="btn btn-dark btn-lg download-button">
    <!-- <h4 class="main">The Sparks Foundation Bank</h4> -->
  </button> 
  <br>
  <br>
    <button type="button" class="btn btn-dark btn-lg download-button"><h4 class="text">How Can We Help You??</h4></button><br>
    <br>
    <a href="customer.html"><button type="button" class="btn btn-dark btn-lg download-button"></i>View Customers</button></a>
    <a href="customer.html"><button type="button" class="btn btn-dark btn-lg download-button"></i> Transfer History</button></a>
  </section>
</section>

  <!-- Footer -->

  <footer id="footer" class="coloured-section">
  
		<p>Created by Venkata Akhil<p>
		<p>© Copyright SPARKS Bank.</p>
  </footer>
  <script>
    var preloader = document.getElementById("loading");
    function loader(){
      preloader.style.display = 'none';
    }
  </script>

  <script src="script.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"></script>
  <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"></script>

  <!-- aos data  -->
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init({
      duration: 700,
    });
  </script>
  </body>
</html>
