var express = require('express');
var router = express.Router();
var REQUEST = require('request');

var request = REQUEST.defaults( {
    strictSSL: false
});

var firebase = require('firebase/app')
var firestore = require('firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCOFGyXVtASgnF2Bc22xcBvsLMGLOBYLeY",
    authDomain: "maps-compx341a4.firebaseapp.com",
    databaseURL: "https://maps-compx341a4.firebaseio.com",
    projectId: "maps-compx341a4",
    storageBucket: "maps-compx341a4.appspot.com",
    messagingSenderId: "88819931379",
    appId: "1:88819931379:web:716b9fefc712f754e9ff86",
    measurementId: "G-BCVKX2FFWN"
  };

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

exports.getCity = function (req, res) {
    var city = req.query.city;
    
	if( (city === null) || (typeof(city) === 'undefined') ) {
        return res.status(400).send('city missing');
    }
    
    const docRef = firestore.collection("weatherDB").doc("cities");
    docRef.set({
        cityName: city
    }).then(function() {
        console.log("saved!");
    }).catch(function(error) {
        console.log("error: ", error);
    })
    
    // var ref = new Firebase('https://maps-compx341a4.firebaseio.com/weatherDB/cities')
    // ref.on('value', function(snapshot) {
    //     if (snapshot.exists()){
    //         console.log("==============came here=============");
    //     }
    //     else{
    //         console.log("came here but with no existance lol")
    //     }
    // })

    docRef.get().then(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data().cityName;
            
            if (myData == city){
                return status(200).send(myData);
            } else {
                res.status(400).send({msg:'Failed'});
            }
        }
    }).catch(function (error) {
        console.log("error: ", error);
    });
}

router.get('/getCity', exports.getCity);

exports.router = router;