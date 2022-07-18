const firebaseConfig = {
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

var contactFormDB = firebase.database().ref("Messages/");

document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var subject = getElementVal("subject");
    var message = getElementVal("message");
    
    saveMessages(name, email, subject, message);
    alert("Message Sent!")

}
const saveMessages = (name, email, subject, message) => {
    var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
});
};

const getElementVal = (id) => {
    return document.getElementById(id).value;};