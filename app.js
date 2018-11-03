(function(){
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCdsNWK8L_pwITGoG5J9dlWxtAwfFZQU-w",
    authDomain: "comp4711assignmt1.firebaseapp.com",
    databaseURL: "https://comp4711assignmt1.firebaseio.com",
    projectId: "comp4711assignmt1",
    storageBucket: "comp4711assignmt1.appspot.com",
    messagingSenderId: "728014763979"
  };
   firebase.initializeApp(config);

//Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');

//Add login event
btnLogin.addEventListener('click', e => {
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    //catches error if theres no user
    promise.catch(e => console.log(e.message));
})

//Add signup event
btnSignup.addEventListener('click', e => {
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    //catches error if theres no user
    promise.catch(e => console.log(e.message));
})

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
})

//Add a realtime authentication listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    }else{
        console.log('not logged in');
        btnLogout.classList.add('hide');
    }
})

}());