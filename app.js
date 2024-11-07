const express = require ("express");
const firebase = require("firebase/app")
const app = express();
const port= 3000;



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjk4cgaLV-sdpIJQXP3M1Sh1rrz288BoA",
  authDomain: "exercise-five-e89de.firebaseapp.com",
  projectId: "exercise-five-e89de",
  storageBucket: "exercise-five-e89de.firebasestorage.app",
  messagingSenderId: "1060997544893",
  appId: "1:1060997544893:web:7f1b342f9031ca1a5670d4"
};

firebase.initializeApp(firebaseConfig);



const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use(express.static("public"));

app.use("/", indexRoute)
app.use ("/create", createPostRoute)
app.use ("/post", singlePostRoute )

app.listen(port, () => {
    console.log(`Exercise Five App listening on port ${port}`);
})
