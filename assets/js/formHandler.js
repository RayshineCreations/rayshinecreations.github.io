// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference to your Firebase Realtime Database
  var database = firebase.database();
  
  // Function to handle form submission
  function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    // Add more fields as needed
    
    // Push data to Firebase
    database.ref('formSubmissions').push({
      name: name,
      email: email
      // Add more fields as needed
    }).then(function() {
      // Handle successful submission
      console.log('Form submitted successfully');
    }).catch(function(error) {
      // Handle errors
      console.error('Error submitting form:', error);
    });
  }
  