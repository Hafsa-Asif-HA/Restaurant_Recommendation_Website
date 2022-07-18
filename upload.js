function insert() {
    var name=document.getElementById("name").value;
    var type=document.getElementById("type").value;
    var desc=document.getElementById("desc").value;
    var o_link=document.getElementById("o_link").value;
    var add_details=document.getElementById("add_details").value;
    var hours=document.getElementById("hours").value;
    var cuisines=document.getElementById("cuisines").value;
    var contact=document.getElementById("contact").value;
    var location=document.getElementById("location").value;

    //pre built function to upload data to firebase
    //path where your data will be stored

    firebase.database().ref('restaurants/'+name).set({
       RestaurantName: name,
       RestaurantType: type,
       RestaurantDescription: desc,
       RestaurantOfficialLink: o_link,
       RestaurantAdditionalDetails: add_details,
       RestaurantOpenHours: hours,
       RestaurantCuisines: cuisines,
       RestaurantContact: contact,
       RestaurantLocation: location
    });

}
