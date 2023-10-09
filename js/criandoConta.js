import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import {
    getFirestore, collection, getDocs, addDoc,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyDYAa9vtcfJ4-sSIYvHQl44H9Srvu1quqY",
    authDomain: "tccpharma-68df1.firebaseapp.com",
    databaseURL: "https://tccpharma-68df1-default-rtdb.firebaseio.com",
    projectId: "tccpharma-68df1",
    storageBucket: "tccpharma-68df1.appspot.com",
    messagingSenderId: "527756804281",
    appId: "1:527756804281:web:8c9f59e4f10d2e84c75b68"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);

async function fetchData(db) {
    const docsCol = collection(db, 'contas');
    const docSnap = await getDocs(docsCol);
    const docList = docSnap.docs.map(doc => doc.data());
    return docList;
}
let bancoDadosContas = await fetchData(db);

var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function (e) {
    e.preventDefault();

    var obj = {
        email: email.value,
        password: password.value,
    };

    addDoc(collection(db, "contas"), {
        id: bancoDadosContas.length,
        nome: fullName.value,
        email: email.value,
        createdAt: serverTimestamp(),
    })
        .then(() => {
            console.log('Conta criada com sucesso')
        })
        .catch(() => {
            console.log('Conta nao criada', e.message)
        })


    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            updateProfile(auth.currentUser, {
                displayName: fullName.value,
            }).then(function () {
                localStorage.setItem('nomeUsuario', fullName.value);
                window.location.replace('index.html');
                alert("Signup successful");
            }).catch(function (error) {
                alert("Erro ao atualizar perfil: " + error.message);
            });
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            switch (errorCode) {
                case 'auth/invalid-email':
                    alert("Endereço de email inválido.");
                    break;
                case 'auth/email-already-in-use':
                    alert("Este endereço de email já está em uso.");
                    break;
                case 'auth/weak-password':
                    alert("A senha deve ter pelo menos 6 caracteres.");
                    break;
                default:
                    alert(errorMessage);
            }
        });
};


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var nomeUsuario = localStorage.getItem('nomeUsuario');
        document.getElementById('usuarioNome').innerText = nomeUsuario;
    }
});