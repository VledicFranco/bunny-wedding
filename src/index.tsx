import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './bunny/Main'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB2EUG5T320WI5DeX32SkyFM55cBBWqIFw",
  authDomain: "bunny-wedding.firebaseapp.com",
  projectId: "bunny-wedding",
  storageBucket: "bunny-wedding.appspot.com",
  messagingSenderId: "35972114353",
  appId: "1:35972114353:web:ad19ca0719a3688f3a3f90"
}

const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Main firebase={app} firestore={firestore} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
