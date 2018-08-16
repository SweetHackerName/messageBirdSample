document.addEventListener("DOMContentLoaded", function()
{
    var numberEl = document.getElementById("numberToSend");
    var buttonEl = document.getElementById("sentTextButton");
    var resultsEl = document.getElementById("resultsPar");
    buttonEl.addEventListener("click", function()
    {
      //need to redo basic validation here.
      if (numberEl.value == false)
      {
        console.log('invalid number', numberEl.value)
      }
      else
      {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:8080/api/sendText", true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let responseObj = JSON.parse(this.responseText);
          console.log(responseObj.result);
          if(responseObj.result === 'success'){
            numberEl.value = '';
            resultsEl.innerHTML = "Message sent!"
          }
          else if (responseObj.result === 'error') {
            resultsEl.innerHTML = "Your message could not be sent, please try again later"
          }

         }
      };

      // send the collected data as JSON
      let stringMsg = JSON.stringify({"msg": numberEl.value});
      xhr.send(stringMsg);
      xhr.onloadend = function () {};
    }
  });
});
