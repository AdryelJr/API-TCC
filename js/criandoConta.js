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
                mostrarNotificacaoVerde();
                localStorage.setItem('nomeUsuario', fullName.value);
                window.location.replace('index.html');
            }).catch(function (error) {
                alert("Erro ao atualizar perfil: " + error.message);
            });
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            switch (errorCode) {
                case 'auth/invalid-email':
                    mostrarNotificacaoVermelho1()
                    break;
                case 'auth/email-already-in-use':
                    mostrarNotificacaoVermelho2()
                    break;
                case 'auth/weak-password':
                    mostrarNotificacaoVermelho3()
                    break;
                default:
                    alert(errorMessage);
            }
        });
};


function mostrarNotificacaoVerde() {
    var notificacaoVerde = document.getElementById("notificacaoVerde");
    notificacaoVerde.style.display = "block";
    setTimeout(function () {
        notificacaoVerde.style.display = "none";
    }, 4000);
}

function mostrarNotificacaoVermelho1() {
    var notificacaoVermelho1 = document.getElementById("notificacaoVermelho1");
    notificacaoVermelho1.style.display = "block";
    setTimeout(function () {
        notificacaoVermelho1.style.display = "none";
    }, 4000);
}

function mostrarNotificacaoVermelho2() {
    var notificacaoVermelho2 = document.getElementById("notificacaoVermelho2");
    notificacaoVermelho2.style.display = "block";
    setTimeout(function () {
        notificacaoVermelho2.style.display = "none";
    }, 4000);
}
function mostrarNotificacaoVermelho3() {
    var notificacaoVermelho3 = document.getElementById("notificacaoVermelho3");
    notificacaoVermelho3.style.display = "block";
    setTimeout(function () {
        notificacaoVermelho3.style.display = "none";
    }, 4000);
}