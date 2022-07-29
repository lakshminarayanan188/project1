const firebaseConfig = {  
apiKey: "AIzaSyDqQxT9anlTdE682RLNvsYsoROGBcHxOOQ",
authDomain: "registerform-577ad.firebaseapp.com",
databaseURL: "https://registerform-577ad-default-rtdb.firebaseio.com",
projectId: "registerform-577ad",
storageBucket: "registerform-577ad.appspot.com",
messagingSenderId: "128162078188",
appId: "1:128162078188:web:8a5fe04ca69118517574c9"
};
    //   copy your firebase config informations
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var dob= getElementVal("dob");
    var Male= getElementVal("Male");
    var Female= getElementVal("Female");
    var bloodGroup=getElementVal("bloodGroup");
    var collage = getElementVal("collage");
    var pbdd = getElementVal("pbdd");
    var mobile= getElementVal("mobile");
  
    saveMessages(name, dob,Male,Female,bloodGroup,collage,pbdd,mobile);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, dob,Male,Female,bloodGroup,collage,pbdd,mobile) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      dob: dob,
      Male: Male,
      Female: Female,
      bloodGroup: bloodGroup,
      collage: collage,
      pbdd: pbdd,
      mobile: mobile
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };