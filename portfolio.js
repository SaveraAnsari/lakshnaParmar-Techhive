function submit() {
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    
    if (name.Value == "") {
        alert("please enter your name")
    }
    else if (number.Value == "") {
        alert("please enter your number")
    }else{
        alert("Thanks For Contact")
    }
}
