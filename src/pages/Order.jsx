import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Order = () => {
    const location = useLocation();
    const { orderId, orderTotal } = location.state;

    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Initialize Firebase app
        firebase.initializeApp({
            apiKey: "AIzaSyC5OoA6fCo-TaennLV2O2Ne3uuUHn-5NDM",
            authDomain: "custom-miniax.firebaseapp.com",
            projectId: "custom-miniax",
        });

        // Get a reference to the products collection in Firestore
        const productsRef = firebase.firestore().collection("products");

        // Define the product ID you want to retrieve
        const productId = "your-product-id";

        // Query Firestore for the product with the specified ID
        productsRef.doc(productId).get().then((doc) => {
            if (doc.exists) {
                // If the product exists, retrieve its data
                const productData = doc.data();
                setProduct(productData);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    return (
        <div className="container my-3 py-3">
            <h1 className="text-center">Order Confirmed</h1>
            <hr />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                        <div className="card mb-2">
                            <div className="card-header py-3 bg-secondary">
                                <h5 className="mb-0">Order Details</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Order ID:
                                        <span>{orderId}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Order Total:
                                        <span>₹{orderTotal}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Payment Status:
                                        <span className="text-success">Confirmed</span>
                                    </li>
                                    {product && (
                                        <>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Product Name:
                                                <span>{product.name}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Product Description:
                                                <span>{product.description}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                Product Price:
                                                <span>₹{product.price}</span>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={() => window.print()}>
                        Print Receipt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;