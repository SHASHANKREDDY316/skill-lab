function vote() {
    var name =document.getElementById("name").value;
    var age =document.getElementById("age").value;
    var res =document.getElementById("res");
    if (age>=18) {
        res.innerHTML = "OK YOU MAY PASS👍";
    }
    else {
        res.innerHTML ="Get back to school child😂"
        
    }
}