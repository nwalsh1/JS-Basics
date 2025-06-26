      let calculation = localStorage.getItem("calculation") || "";
      document.querySelector(".js-calc-display").innerHTML = calculation;

      function displayCalc(calc) {
        const displayElement = document.querySelector(".js-calc-display");
        displayElement.innerHTML = calc;
        localStorage.setItem("calculation", calc);
      }