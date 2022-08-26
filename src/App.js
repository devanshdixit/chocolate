import logo from './logo.svg';
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value)
  }
  return (
    <section className="offer_section layout_padding">
    <div className="container">
      <div className="box">
        <div className="detail-box">
          <h2>
            Give us your Mail
          </h2>
          <h4>
            We will reach out to you with our offers
          </h4>
          <form onSubmit={handleSubmit} style={{width: "100%", maxWidth: "400px",margin: "auto",display: "flex",height: "50px"}}>
            <input name="email"  type="email" placeholder="Enter your email" style={{width: "80%",paddingLeft: "20px",height: "100%",fontSize: "25px"}} />
            <button>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <div className="img-box">
          <img src="images/offer-img.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;
