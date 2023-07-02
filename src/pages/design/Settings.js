import React from 'react';
import './Display.css';
import { Link } from "react-router-dom";




// const addProduct = (product) => {
//     dispatch(addCart(product));
//   };

//   const Product = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState([]);
//   };
const Settings = ({ lowerText, upperText, textSize, uploadImage, saveToCart }) => {

  return (
    <div className="card bg-light container">
      <h3 className="text-center">Settings</h3>

      <h4>Write Text</h4>
      <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text" />
      <br></br>
      <input onChange={lowerText} type="text" className="form-control form-control-sm " placeholder="Lower Text" />
      <br></br>
      <h4>Upload Image</h4>
      <div className="form-group">
        <input onChange={uploadImage} type="file" className="form-control-file mb-20 " />
      </div>

      <br></br>
      <h4>Text Size</h4>
      <input onChange={textSize} type="range" min="24" max="40" />
      <br></br>
      <h4>Size</h4>
      <select className='form-control form-control-sm mb-2'>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
        <option>XXL</option>
      </select>
      <br></br>
      <button className="btn btn-primary btn-sm mb-2 fw-bold"
        onClick={saveToCart}
      >
        SAVE & Add to Cart
      </button>
      {/* <button className=" ">SAVE & Add to Cart</button> */}

    </div>
  )

}
export default Settings
