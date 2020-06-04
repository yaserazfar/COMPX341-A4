// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

function Database() {
    console.log("firebaseapplength: ",firebase.apps.length);
    if (!firebase.apps.length) {
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
      const docRef = firestore.collection("weatherDB").doc("cities");
    
      docRef.set({
          cityName: "Hamilton"
      }).then(function() {
          console.log("saved!");
      }).catch(function(error) {
          console.log("error: ",error);
      });
    
    
      docRef.get().then(function (doc) {
          if (doc && doc.exists) {
              const myData = doc.data().cityName;
              console.log(myData);
            //  AppContainer(myData);
            //   handleCityChange(myData);
                localStorage.setItem('city',myData);
          }
      }).catch(function (error) {
          console.log("error: ", error);
      });
    }
}

export default Database