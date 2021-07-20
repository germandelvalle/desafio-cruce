import firebase from 'firebase'

//configuracion para establecer conexion con firebase
const firebaseConfig = {
    apiKey: "AIzaSyCcfAflVJQL00gzcsU-w1iZa5Wtih-0HKk",
    authDomain: "desafio-cruce.firebaseapp.com",
    projectId: "desafio-cruce",
    storageBucket: "desafio-cruce.appspot.com",
    messagingSenderId: "543322152212",
    appId: "1:543322152212:web:c580fb396af29e56707601",
    measurementId: "G-FB1582E680"
  };

  //inicializacion de la aplicacion
const fb = firebase.initializeApp(firebaseConfig)

//inicializador de la base de datos
export const db = fb.firestore()


//autentificacion del usuario con google
//retorna todos sus datos de google
export const loginWithGoogle = ()=>{
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(googleProvider).then(user=>{
    console.log(user)
    const {additionalUserInfo} = user
    const {profile} = additionalUserInfo
    const {name,email,id} = profile

    return {
      name:name,
      email:email,
      id:id,
    }
  })
}