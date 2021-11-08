import React from "react";
import "./Donate.scss";
import logo from '../../img/bookwormLogo.png';
import { useQuery } from '@apollo/client';
import { STRIPE_SESSION } from "../../utils/queries";

const Donate = () => {
  const { loading, data } = useQuery(STRIPE_SESSION);

  return (
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
              
                <a hidden={loading} href={data?.createDonation?.url}>
                  <button className="buttonDonate">Donate</button>
                </a>
                <span hidden={!loading}>Please wait...</span>
              
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Donate;


