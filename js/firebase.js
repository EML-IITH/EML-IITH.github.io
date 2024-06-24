const form = document.querySelector('#contactForm');
// saving data in the input fields
form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('form_sub').add({
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    })
    form.reset();
})





































// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAKnuGDyLrNp03tPyTwnSUqmc_5O7Iq0VY",
//     authDomain: "emltest-2b8cb.firebaseapp.com",
//     projectId: "emltest-2b8cb",
//     storageBucket: "emltest-2b8cb.appspot.com",
//     messagingSenderId: "637243374887",
//     appId: "1:637243374887:web:d71d20fb9e07043e003d02"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   var firestore = firebase.firestore();

//   // variable to access data base collection
//   const db = firestore.collection('formdata')

//   // get submit form data
//   let submitButton = document.createElement('form-submit')

//   // Create Event addEventListener to allow form submission

//   submitButton.addEventListener("click", (e) => {
//       // preventDefault
//       e.preventDefault();

//       // get form data data
//       let name = document.getElementById('name').value
//       let email = document.getElementById('email').value
//       let msg_subject = document.getElementById('msg_subject').value
//       let subject = document.getElementById('subject').value

//       // save form data to firestore
//       db.doc().set({
//           name: name,
//           email: email,
//           msg_subject: msg_subject,
//           subject: subject,

//       }).then (() => {
//           console.log("Data saved")

//       }).catch((error) => {
//           console.log(error)

//       }) 

//   })

































// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");
// const message = document.getElementById("msg_subject");

// const database = firebase.firestore();
// const userCollection = firebase.collection("users")

// form-submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     const ID = userCollection.doc('user01').set({
//         name: name.value,
//         email: email.value,
//         subject: subject.value,
//         message: message.value,


//     })
    
// })

