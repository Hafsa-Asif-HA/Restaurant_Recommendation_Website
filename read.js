// let restaurants = "Ginsoy";
// function setrestaurant(value){
//     console.log(value, "line3")
//     restaurants = value;
//     getdata();    
// }

// window.onload = function () {
//     console.log(restaurants, "line9")
//   getdata(restaurants);
  
// };

// function getdata(res) {
//     console.log(restaurants, "reach here")
//     // var restaurants=document.getElementById("restaurants").value;
//     //firebase data retrieval function
//     //path of your data
//     //.once will get all your data in one time

//let restaurants = "";
function setrestaurant(value){
    // console.log(value, "line3")
   //restaurants = value;
    localStorage.setItem("clickedRestraunt",value)
    //getdata(value);
    
}


window.onload = function () {
    let restaurants = localStorage.getItem("clickedRestraunt");
    console.log(restaurants, "line9")
  getdata(restaurants);
  
  
};

function getdata(res) {
    console.log(res, "reach here")
    
  
    firebase.database().ref("restaurants/"+res).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var name=snapshot.val().RestaurantName;
        var type=snapshot.val().RestaurantType;
        var desc=snapshot.val().RestaurantDescription;
        var o_link=snapshot.val().RestaurantOfficialLink;
        var add_details=snapshot.val().RestaurantAdditionalDetails;
        var hours=snapshot.val().RestaurantOpenHours;
        var cuisines=snapshot.val().RestaurantCuisines;
        var contact=snapshot.val().RestaurantContact;
        var location=snapshot.val().RestaurantLocation;
        var logo=snapshot.val().logo;
        var menu=snapshot.val().menu;

        //now we have data in variables
        //now show them in our html

        document.getElementById("name").innerHTML=name;
        document.getElementById("type").innerHTML=type;
        document.getElementById("desc").innerHTML=desc;
        document.getElementById("o_link").innerHTML=o_link;
        document.getElementById("add_details").innerHTML=add_details;
        document.getElementById("hours").innerHTML=hours;
        document.getElementById("cuisines").innerHTML=cuisines;
        document.getElementById("contact").innerHTML=contact;
        document.getElementById("location").innerHTML=location;
        document.getElementById("logo").innerHTML=logo;
        document.getElementById("menu").innerHTML=menu;
    })
    localStorage.clear();
}


function addreview(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var review=document.getElementById("review").value;

    firebase.database().ref("Reviews/" +  username).set({
        UserName: username,
        UserEmail: email,
        UserPhone: phone,
        UserReview: review,
    }); 
    alert("Review has been added! Thank You");
    
}



// function getreview(restaurants){ 
 
  
//     firebase.database().ref("Reviews/"+ restaurants + " reviews/" + username).once('value').then(function (snapshot) {
//         var username=snapshot.val().UserName;
//         var email=snapshot.val().UserEmail;
//         var phone=snapshot.val().UserPhone;
//         var review=snapshot.val().UserReview;
       
//         //now we have data in variables
//         //now show them in our html

//         document.getElementById("username").innerHTML=username;
//         document.getElementById("email").innerHTML=email;
//         document.getElementById("phone").innerHTML=phone;
//         document.getElementById("review").innerHTML=review;
       
//     });
// }
