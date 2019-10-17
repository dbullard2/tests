function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function submitId(){
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("ID").set(makeid(6));
}

//console.log(makeid(6));
