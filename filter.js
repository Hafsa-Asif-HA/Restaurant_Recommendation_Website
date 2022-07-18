const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("restlist")
    const rest = document.querySelectorAll(".col-md-4")
    const restname = storeitems.getElementsByClassName("title")
     
    for(var i=0; i<restname.length; i++){
        let match = rest[i].getElementsByClassName("title")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                rest[i].style.display = "";
            }
            else{
                rest[i].style.display = "none";
            }
        }
    }
}