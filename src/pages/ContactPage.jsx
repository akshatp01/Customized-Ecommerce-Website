import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import Swal from 'sweetalert2';
import { doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';




const ContactPage = () => {
  const [fullName, setfullName] = useState('');
  const [message, setmessage] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        fullName: fullName,
        email: email,
        message: message
      });
      console.log("Document written with ID: ", docRef.id);
      setfullName('');
      setemail('');
      setmessage('');

      // Show success message using SweetAlert
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your message has been sent successfully',
        timer: 3000, // Auto close after 3 seconds
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error adding document: ", error);

      // Show error message using SweetAlert
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while sending your message. Please try again later',
        timer: 3000, // Auto close after 3 seconds
        timerProgressBar: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;