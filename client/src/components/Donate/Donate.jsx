import React, { useState, useEffect } from "react";
import "./Donate.scss";
import logo from '../../img/bookwormLogo.png';
import donateLogo from '../../img/donate.png';


const Donation = () => (
  // <section>
  //   <div className="product">
  //     <img
  //       src={logo}
  //       alt="Bookworm"
  //     />              
  //     <div className="description">
  //     <h3>Please donate and help us to keep this platform alive!!!</h3>
  //     <h5>$5.00</h5>
  //     </div>
  //   </div>
  //   <form action="/create-checkout-session" method="POST">
  //     <button type="submit">
  //       Donate
  //     </button>
  //   </form>
  // </section>
  <main className="flex-row justify-center mb-4">
  <div className="col-20 col-lg-20">
    <div className="card">
      <h4 className="card-header bg-dark text-light p-2">Donate</h4>
      <div className="card-body">
        <section>
          <div className="product">
            <img src={logo} alt="Bookworm" />
            <div className="description">
              <h3>Please donate and help us to keep this platform alive!!!</h3>
              <h5>$5.00</h5>
            </div>
          </div>
          <form action="/create-checkout-session" method="POST">
            <button className="buttonDonate" type="submit">Donate</button>
          </form>
        </section>
      </div>
    </div>
  </div>
</main>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Thanks for your donation! keep enjoying discussing books with friends ");
    }

    if (query.get("canceled")) {
      setMessage(
        "Donation canceled -- continue discussing your favorite books "
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <Donation />
  );
}


