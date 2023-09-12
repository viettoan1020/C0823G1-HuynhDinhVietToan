function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "EUR" && To == "VND") {
        Result = "Result: " + (Amount * 25836) + " Đ";
    }
    else if (FromC == "VND"&& To =="EUR"){
        Result = "Result: "+ (Amount / 25836) + " $";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " EUR"
    }

    document.getElementById("Result").innerHTML = Result;
}
