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
    var database = firebase.database();
    var ref = database.ref('scores');
    //on the event value, have two callbacks for recieving data and error
    ref.orderByChild('score').on('value',gotData, errData);

    //Get Elements
    const txtName = document.getElementById('txtName');
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');
    const btnSubmit = document.getElementById('btnSubmit');
    const btnLeaderboard = document.getElementById('btnLeaderboard');
    const btnReset = document.getElementById('btnReset');

    if (window.location.href.match('index.html') != null) {
    //Add login event
    btnLogin.addEventListener('click', e => {
        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.then(e => {
            window.location.href = "hangman.html";
            });
        //catches error if theres no user
        promise.catch(e => console.log(e.message));
    })

    //Add signup event
    btnSignup.addEventListener('click', e => {
        //Get email and password
        const name = txtName.value;
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        
        promise.then(e => {
            var user = firebase.auth().currentUser;
            user.updateProfile({
              displayName: "" + name
            });
            firebase.database().ref('users/' + user.uid).set({
              name: "" + name
            });
          });
        
        
        //catches error if theres no user
        promise.catch(e => console.log(e.message));
    })
}  

    if (window.location.href.match('hangman.html') != null) {
    //Logout event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.href = "index.html";
    })

    //Plag again event
    btnReset.addEventListener('click', e => {
    window.location.reload();
    }); 
    

    //Add a realtime authentication listener
    firebase.auth().onAuthStateChanged(function(firebaseUser){
        if(firebaseUser){
            //console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        }else{
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    })

    //Submit your score
    btnSubmit.addEventListener('click', function(){
        var user = firebase.auth().currentUser;
        var data = {
            name: user.displayName,
            score: score
        }
        //console.log(data);
        ref.push(data);
    });

    btnLeaderboard.addEventListener('click',function(){
        window.location.href = "leaderboard.html";
    });
}

    if (window.location.href.match('leaderboard.html') != null) {
        btnHome.addEventListener('click',function(){
            window.location.href = "hangman.html";
        });

         //Logout event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.href = "index.html";
    });
    }
    
}());

function gotData(data){
    //call .val to see actual data
    //console.log(data.val());
    var scores = data.val();
    //give array of all the keys in JS object/data
    var keys = Object.keys(scores);
    var sortedKey= keys.sort((keyA,keyB) => scores[keyB].score-scores[keyA].score);
    //console.log(sortedK);
    for (var i =0; i < sortedKey.length; i++){
    var k = sortedKey[i];
    var score = scores[k].score;
    console.log(score);
    
    //create element and add it to leaderboard
    var li = document.createElement("LI");
    scoretext = document.createTextNode(scores[k].name + "   " + score);
    li.appendChild(scoretext);
    document.getElementById("leaderboard").appendChild(li);
    //document.getElementById("leaderboard").innerHTML += "Name: " + scores[k].name + " " + " Score: " + score + "<br>";
    }
}

function errData(err){
    console.log('Error');
    console.log(err);
}