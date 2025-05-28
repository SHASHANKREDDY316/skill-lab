function random() {
    var name =document.getElementById("name").value;
    var random = Math.random()*100;
    var res = document.getElementById("res");
    res.innerHTML="The result is" + random;
    
}