import React from 'react';

const Footer = () => {
  return (
    <footer className='footer footer-expand-lg footer-dark bg-dark py-3 sticky-top'>
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-white">
            <h3>About Us</h3>
            <ul>
              <li><a href="#" class="text-white">About</a></li>
              <li><a href="#" class="text-white">Careers</a></li>
              <li><a href="#" class="text-white">Contact Us</a></li>
              <li><a href="#" class="text-white">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-white ">
            <h3>Help</h3>
            <ul>
              <li><a href="#" class="text-white">Shipping</a></li>
              <li><a href="#" class="text-white">Cancellations &amp; Returns</a></li>
              <li><a href="#" class="text-white">FAQ</a></li>
              <li><a href="#" class="text-white">Your Account</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-white">
            <h3>Policy</h3>
            <ul>
              <li><a href="#" class="text-white">Return Policy</a></li>
              <li><a href="#" class="text-white">Terms of Use</a></li>
              <li><a href="#" class="text-white">Privacy</a></li>
              <li><a href="#" class="text-white">Security</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-white">
            <h3>Connect with Us</h3>
            <ul>
              <li><a href="#" class="text-white">Facebook</a></li>
              <li><a href="#" class="text-white">Instagram</a></li>
              <li><a href="#" class="text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className=" text-white col-md-12 text-center">
            <hr />
            <p>&copy; 2023 Custom Miniax, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;