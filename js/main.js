document.addEventListener('DOMContentLoaded', function() {
    var elemsnav = document.querySelectorAll('.sidenav');
    var instancesnav = M.Sidenav.init(elemsnav);
    
  });
    

var config = {
    apiKey: "AIzaSyB3G1sNiRiMGXR48wR0FAjlF_zaIsMA6c8",
    authDomain: "hotel-daeca-244ad.firebaseapp.com",
    databaseURL: "https://hotel-daeca-244ad.firebaseio.com",
    projectId: "hotel-daeca-244ad",
    storageBucket: "hotel-daeca-244ad.appspot.com",
    messagingSenderId: "957899814726"
  };
    firebase.initializeApp(config);
  

  
/*++++++++FECHA ***************************************/
document.addEventListener('DOMContentLoaded', function() {
  var elemsf = document.querySelectorAll('.datepicker');
  var instancesf = M.Datepicker.init(elemsf);
});



   