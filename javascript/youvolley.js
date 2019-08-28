document.querySelector("#identity").addEventListener("submit", function(e) {
  e.preventDefault();
  submitProduct();
});
var firebaseConfig = {
  apiKey: "AIzaSyCie8HGt9a3j_dGLAk_xICbfYDscGZgjP0",
  authDomain: "projet-32a62.firebaseapp.com",
  databaseURL: "https://projet-32a62.firebaseio.com",
  projectId: "projet-32a62",
  storageBucket: "",
  messagingSenderId: "234777425206",
  appId: "1:234777425206:web:9ad9aab12078ce2e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 1 import librairies

//2 create database var*

function submitProduct() {
  let database = firebase.database();
  let ref = database.ref("products");

  let data = {
    name: document.getElementById("your-name").value,
    delivery: document.getElementById("e-mail").value,
    phonenumber: document.getElementById("phone-number").value,
    web: document.getElementById("track").value,
    clientCard: document.getElementById("credit").value
  };
  ref.on("value", gotdata, errdata);
  function gotdata(data) {
    data = data.val();
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      console.log(data[keys[i]].name);
    }
  }
  function errdata(error) {
    console.log(Error.message, Error.code);
  }
  //5 upoad data
  ref.push(data);
}
