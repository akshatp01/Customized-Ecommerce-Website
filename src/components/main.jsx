import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2 className="text-center py-1"></h2 >
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">
            <div id="carouselExampleControls" className="carousel slide border-1 pb-3" data-ride="carousel">
              <div className="carousel-inner bg-dark text-white border-5 mx-3">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./assets/main.png.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/main2.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/main.png.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-primary fs-2" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-primary fs-2" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center mt-5">Latest Products</h2>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-5 px-2">
            <Link to="/product">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31UIoau50PL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Men's Clothing</h5>
                </div>
              </div>

            </Link>
          </div>
          <div className="col-md-3 col-sm-6 mb-5 px-2">
            <Link to="/product">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6eTIBcwMzD-8vzZzHGjTtuxykpDqVWG_cCzlDnE2Msv_nSXIE0fB_25NDbeiumzYZTc1M2XdCqtj3Oi5hZQ7p6EF2Zg73OokW5-FVLxCO" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Women's Clothing</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 col-sm-4 mb-5 px-2">
            <Link to="/product">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://assets.winni.in/product/primary/2022/5/60807.jpeg?dpr=1&w=400" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Mugs</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3 col-sm-4 mb-5 px-2">
            <Link to="/product">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sibling-led-string-lights-personalized-photo-frames-142541-m.jpg" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Photo Frames</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
