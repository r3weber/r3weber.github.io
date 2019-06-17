(function() {

    function validateHuman(honeypot) {
      if (honeypot) {  //if hidden form filled up
        console.log("Robot Detected!");
        return true;
      } else {
        console.log("Welcome Human!");
      }
    }
  
    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements;
      var honeypot;
  
      var fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
  
      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;
  
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });
  
      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      // formData.formGoogleSend
      //   = form.dataset.email || "rweber@osmre.gov"; // no email by default
  
      console.log(formData.lat);
      // var marker = 
      // var geojsonfeature = marker.toGeoJSON(15)
      // arrowgeojson.addData(geojsonfeature);
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      var newdate = year + "/" + month + "/" + day;
      var gjsonFeature = { 
        "type": "Feature", 
        "properties": {
          "Timestamp": newdate, 
          "lat": formData.lat, 
          "lon": formData.lon, 
          "elv": formData.elv, 
          "numSatsUsed": formData.numSatsUsed, 
          "pdop": formData.pdop, 
          "hdop": formData.hdop, 
          "vdop": formData.vdop, 
          "diffAge": formData.diffAge, 
          "diffType": formData.diffType, 
          "diffStn": formData.diffStn, 
          "xyzAccuracy": formData.xyzAccuracy, 
          "zAccuracy": formData.zAccuracy, 
          "xyAccuracy": formData.xyAccuracy, 
          "geoidSep": formData.geoidSep
         }, 
         "geometry": { 
           "type": "Point", 
           "coordinates": [ formData.lon, formData.lat ] 
          } 
        };
      // $.getJSON("https://r3weber.github.io/assets/geoJson/arrowgoldmetadata.geojson", function(data) {
      //   var myLayer = L.geoJson(data);
      L.realtime({ 
          url: "https://r3weber.github.io/assets/geoJson/arrowgoldmetadata.geojson",
          crossOrigin: true,
        type: 'json'
      }, {
        updateFeature(gjsonFeature, myLayer)
      }).addTo(mymap);
      
      // var marker = L.marker([formData.lat, formData.lon]);
      // marker.addTo(mymap);
      mymap.setView([formData.lat, formData.lon], 10);
      return {data: formData, honeypot};
      
    }
  
    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var form = event.target;
      var formData = getFormData(form);
      var data = formData.data;
      
      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }
  
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
          return;
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
    
    function loaded() {
      console.log("Contact form submission handler loaded successfully.");
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
  
    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();