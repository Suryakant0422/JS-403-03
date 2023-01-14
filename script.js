
function calculateTip() {
    var billamt = document.getElementById("billamt").value;
    var service = document.getElementById("service").value;
    var people = document.getElementById("peopleamt").value;
  

    if (billamt === "" || service == 0) {
      alert("Please enter The values");
      return;
    }
  
    if (people === "" || people <= 1) {
      people = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }

    let total = (billamt * service) / people;

    total = Math.round(total * 100) / 100;
   
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }

  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";

  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };