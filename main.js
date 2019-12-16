// Paste the code from Firebase 
var config = {
apiKey: "AIzaSyDx4hsv6YSFjqL5Pie43WwToAOzaiqJODU",
    authDomain: "ncut007-16a2c.firebaseapp.com",
    databaseURL: "https://ncut007-16a2c.firebaseio.com",
    projectId: "ncut007-16a2c",
    storageBucket: "ncut007-16a2c.appspot.com",
    messagingSenderId: "847681546434"
   
    
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});