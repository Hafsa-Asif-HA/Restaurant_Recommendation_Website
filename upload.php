<html>
<head>
    <title>DATA entry</title>
</head>
<body>
<center>
    <h2>Restaurant's name:</h2>
    <input type="text" id="name" required="required"><br>
    <h2>Type:</h2>
    <input type="text" id="type" required="required"><br>
    <h2>Description:</h2>
    <input type="text" id="desc" required="required"><br>
    <h2>Official Web Link:</h2>
    <input type="text" id="o_link" required="required"><br>
    <h2>Additional Details:</h2>
    <input type="text" id="add_details" required="required"><br>
    <h2>Opening Hours:</h2>
    <input type="text" id="hours" required="required"><br>
    <h2>Cuisines:</h2>
    <input type="text" id="cuisines" required="required"><br>
    <h2>Contact Details:</h2>
    <input type="text" id="contact" required="required"><br>
    <h2>Location:</h2>
    <input type="text" id="location" required="required"><br>
    <br>

    <button type="button" onclick="insert();">Upload</button>
</center>



<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->
     <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>

<script>
    // Your web app's Firebase configuration
    
    var firebaseConfig = {
    apiKey: "AIzaSyDYWnKiGyi87ah8FX6wdFsSEcaWKDRdFeM",
    authDomain: "login-1bafa.firebaseapp.com",
    databaseURL: "https://login-1bafa-default-rtdb.firebaseio.com",
    projectId: "login-1bafa",
    storageBucket: "login-1bafa.appspot.com",
    messagingSenderId: "861300324552",
    appId: "1:861300324552:web:66de5e09c1267f7f4d0dfd",
    measurementId: "G-LWLW5FZP1L"
  };

  firebase.initializeApp(firebaseConfig);
</script>
<script src="upload.js" type="text/javascript"></script>
</body>
</html>


