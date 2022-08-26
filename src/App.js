import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxbggU-xaV7ok-LsgH-ZH8gdgzwnDP9jc",
  authDomain: "database-664f5.firebaseapp.com",
  databaseURL: "https://database-664f5.firebaseio.com",
  projectId: "database-664f5",
  storageBucket: "database-664f5.appspot.com",
  messagingSenderId: "847821315251",
  appId: "1:847821315251:web:24042a73254ccf9292a4c6",
  measurementId: "G-J1RGTLRZV6",
};
function App() {
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const [loading, setLoading] = React.useState(false);
  const [showText, setSetShowText] = React.useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    if (!event.target.email.value) {
      console.log(event.target.email.value);
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "chocolate"), {
        email: event.target.email.value,
      });
      console.log("Document written with ID: ", docRef.id);
      setSetShowText(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
  };
  return (
    <section className="offer_section layout_padding">
      <div className="container">
        <div className="box">
          <div className="detail-box" style={{}}>
            <h2>Give us your Mail</h2>
            <h4>We will reach out to you with our offers</h4>
            {showText ? (<div>Thanks we will contact you soon!</div>) :(<form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                maxWidth: "400px",
                margin: "auto",
                display: "flex",
                height: "50px",
              }}
            >
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "80%",
                  paddingLeft: "20px",
                  height: "100%",
                  fontSize: "25px",
                }}
              />
              <button>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>)}
          </div>
          <div className="img-box">
            <img src="images/offer-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
