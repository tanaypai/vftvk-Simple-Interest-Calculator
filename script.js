  function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal == "") {
      alert("Amount is empty. Please enter a valid amount");
      document.getElementById("principal").focus();
      return false;
    } else {
      if (principal <= 0) {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
      }
    }

    var HDB = new Date().getFullYear();
    var future = parseInt(HDB, 10) + parseInt(years, 10);
    var interest = principal * years * rate / 100;
    var result = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark> % <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML = result;
  }

  function show(Val) {
    document.getElementById("showRate").innerHTML = Val + '%';
  }
