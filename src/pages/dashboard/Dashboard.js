import React, { Component } from "react";
import Display from "../design/Display";
import Settings from "../design/Settings";
import { Navbar } from "../../components";
import { storage, ref } from "../../config/firebaseConfig";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch } from "react-redux";
import { updateCart } from '../../redux/action';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { product } = location.state;

    const [display, setData] = useState({
        upperText: "This Is Upper Text",
        lowerText: "This Is Lower Text",
        memeImg: "",
        textSize: 30,
        url: "",
    })

    const handleSaveToCart = async () => {
        let updatedProduct = {
            ...product,
            "upperText": display.upperText,
            "lowerText": display.lowerText,
            "url": display.url,
        }
        dispatch(updateCart(updatedProduct));
        navigate("/cart")
    }

    const handleLowerText = (e) => {
        setData({ ...display, lowerText: e.target.value });
    };
    const handleUpperText = (e) => {
        setData({ ...display, upperText: e.target.value });
    };
    const handleTextSize = (e) => {
        setData({ ...display, textSize: e.target.value });
    };

    const formatText = () => {
        const size = display.textSize;
        return parseInt(size);
    }
    const handleImageUpload = (e) => {
        if (e.target.files[0]) {
            const Image = e.target.files[0];
            const uploadTask = uploadBytesResumable(
                ref(storage, `images/${Image.name}`),
                Image
            );
            uploadTask.on(
                "state_change",
                (snapshot) => {

                    // console.log(snapshot.ref.fullPath);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(ref(storage, `images/${Image.name}`))
                        .then((url) => {
                            console.log();
                            setData({ ...display, url: url });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            );
        }
    };


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Display display={display}
                            textFormat={formatText()}
                            product={product} />
                    </div>
                    <div className="col-lg-4">
                        <Settings
                            upperText={handleUpperText}
                            lowerText={handleLowerText}
                            textSize={handleTextSize}
                            uploadImage={handleImageUpload}
                            saveToCart={handleSaveToCart}
                        />
                    </div>
                </div>
            </div>
        </>
    );

}
export default Dashboard;
