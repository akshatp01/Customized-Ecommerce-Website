import React from "react";
import { Footer, Navbar } from "../components";
import GooglePayButton from "@google-pay/button-react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { v4 as uuid } from "uuid";
import { clearCart } from "../redux/action";


const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let subtotal = 0;
  let shipping = 30.0;
  let totalItems = 0;

  const unique_id = uuid();

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [landMark, setLandMark] = useState("");
  const [pCode, setPcode] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const GoogleButton = ({ gPayHandle }) => {
    return (
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={gPayHandle}
        buttonType="checkout"
      />
    );
  };

  const handleCardPayment = () => {
    console.log('HANDLE CARD PAYMENT')
    let data = {
      firstName: fName,
      lastName: lName,
      email: email,
      address: address,
      landMark: landMark,
      pinCode: pCode,
      country: country,
      region: region,
    };
    let user = localStorage.getItem("user");
    setDoc(doc(db, "orders", unique_id), {
      billing: data,
      products: state,
      user: user,
    });
    console.log(data);

    Swal.fire({
      title: "Payment Successful!",
      text: "Your payment has been processed successfully.",
      icon: "success",

      didClose: () => {
        // TODO: Clear Order
        dispatch(clearCart());
        navigate("/")
      },
    });
  };

  state.map((item) => {
    return (subtotal += item.price * item.qty);
  });

  state.map((item) => {
    return (totalItems += item.qty);
  });

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5 col-lg-5 order-md-last">
              <div className="card mb-2">
                <div className="card-header py-3 bg-secondary">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})
                      <span>₹{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>₹{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                  <hr className="my-1" />
                  <h4 className="mb-3 d-flex">Payment</h4>

                  <div>
                    <GoogleButton gPayHandle={handleCardPayment} />
                  </div>
                  <br></br>

                  <button
                    onClick={handleCardPayment}
                    className="w-100 btn btn-primary "
                    type="submit"
                  >
                    Continue to checkout
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-7">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label for="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        // placeholder="name"
                        value={fName}
                        onChange={(e) => setfName(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6 my-1">
                      <label for="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        // placeholder="lastname"
                        value={lName}
                        onChange={(e) => setlName(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label for="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="landmark" className="form-label">
                        Landmark <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Landmark"
                        placeholder="Apartment or suite"
                        value={landMark}
                        onChange={(e) => setLandMark(e.target.value)}
                      />
                    </div>

                    <div className="col-md-5 my-1">
                      <label for="country" className="form-label">
                        Country
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        id="Landmark"
                        placeholder="Apartment or suite"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />

                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4 my-1">
                      <label for="state" className="form-label">
                        State
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        id="Landmark"
                        placeholder="Apartment or suite"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                      />
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3 my-1">
                      <label for="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        value={pCode}
                        onChange={(e) => setPcode(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
