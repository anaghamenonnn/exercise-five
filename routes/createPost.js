const express = require ("express");
const path =require("path");
const router = express.Router();
const firestore = require("firebase/firestore");
const { response } = require("express");


const db = firestore.getFirestore();


router.get("/", (request, response) => {
    response.sendFile(path.join(__dirname,"../public", "form.html"));
});

router.get('/submit', (request, response) => {
    const {title, postText, author} = request.query;
    if (!title || !postText || !author){
        response.send({error: "invalid for submission"});
    }
    const idFromTitle = title.replace(/\s+/g,"-").toLowerCase();

    const setBlogPost = firestore.setDoc(
        firestore.doc(db, "post", idFromTitle),

        {
            title: title,
            text: postText,
            author: author,
        }
    );

    setBlogPost
        .then ((res) => {
    
            response.sendFile(path.join(__dirname,"../public", "success.html"));

        })

        .catch((error) => {
            
            response.send(`Error Submitting: ${error.toString()}`);
        });
    


});


module.exports = router;