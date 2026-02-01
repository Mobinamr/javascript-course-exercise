let result = '';
let display = document.getElementById('display');

      

      function buttonNumberClick(num) {
        let value = num.textContent;
        result += value;
        display.textContent = result;

      }

      function buttonTekenClick(tek) {
        let teken = tek.textContent;
        result += teken;
        display.textContent = result;
      }

      function equals() {
        result = String(eval(result));
        display.textContent = result;
      }

      


      
