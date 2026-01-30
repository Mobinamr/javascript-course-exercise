let result = '';

      

      function buttonNumberClick(num) {
        let value = num.textContent;
        result += value;
        console.log(result);

      }

      function buttonTekenClick(tek) {
        let teken = tek.textContent;
        result += teken;
        console.log(result);
      }

      function equals() {
        equal = eval(result);
        console.log(equal);
        result = equal;
      }



      
