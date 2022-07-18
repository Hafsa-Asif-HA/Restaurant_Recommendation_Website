<html>
<head>
    <title>upload image to firebase</title>
</head>
<body>
<center>
    <form enctype="multipart/form-data">
        <label>select image : </label>
        <input type="file" id="image" accept="restaurants/California Pizza/*"><br><br>
        <button type="button" onclick="uploade()">Upload</button>
    </form>
</center>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

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
<script type="text/javascript" src="image.js"></script>
</body>
</html>