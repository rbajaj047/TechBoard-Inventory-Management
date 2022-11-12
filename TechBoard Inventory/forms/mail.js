const firebaseConfig = {
    apiKey: "AIzaSyDWoZDQ2S3Ou0ivTaKH85bgCvLKaNNK3vs",
    authDomain: "inventoryform-a52f2.firebaseapp.com",
    databaseURL: "https://inventoryform-a52f2-default-rtdb.firebaseio.com",
    projectId: "inventoryform-a52f2",
    storageBucket: "inventoryform-a52f2.appspot.com",
    messagingSenderId: "403613700903",
    appId: "1:403613700903:web:7b944b024b9231b5ae8f02"
};

firebase.initializeApp(firebaseConfig);

var inventoryFormDB = firebase.database().ref("inventoryForm");
document.getElementById("inventoryForm").addEventListener("submit", submitForm);

function submitForm(e) {

    e.preventDefault();
    var a = getElementVal("a");
    var b = getElementVal("b");
    var c = getElementVal("c");
    var d = getElementVal("d");
    var e = getElementVal("e");
    var f = getElementVal("f");
    var g = getElementVal("g");

    var h = getElementVal("h");

    console.log(a, b, c, d, e, f, g, h);

    saveMessages(a, b, c, d, e, f, g, h);



}
const saveMessages = (a, b, c, d, e, f, g, h) => {
    var newInventoryForm = inventoryFormDB.push({
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: f,
        g: g,
        h: h,

    });
    const postid = newInventoryForm.key;
    console.log(postid);
};
const getElementVal = (id) => {
    console.log(id);
    try {
        return document.getElementById(id).value;
    } catch (e) {
        console.log(e);
        return "";
    }
}