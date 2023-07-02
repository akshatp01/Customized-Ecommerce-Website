import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          At present, there is a difficulty to find a customized products  like T-shirt , Cushion ,etc in a single website. So, this website helps the customer or users to find customized products appropriately online. Then customers can view the product, edit according to their need and satisfaction and shop online with exciting offers and free shipping. So, people can enjoy products. This project is aimed at developing an online E-commerce Customized Website. The system is an online application that can be accessed throughout by 24/7. This system provides an account for the customer and login page where users need to put up their information, set password and enjoy with latest products. As well as for any complaint we provide our Contact page  where you can send us mail.

        </p>
        <p className="lead text-center">
          There are a lot of websites on the internet whereby it offers a variety of products and services for consumers to find and buy through online such as shoe, sun glasses and more.  we are looking at the problem addressed in this research which is the view of online shopping by consumers based on customized products.
          In addition, this study also understands the influences of the social factors toward the purchase intention of consumers in online shopping and also studies the attitude of the consumers purchase intention in online shopping.Mainly, Consumers can’t find the proper and appropriate resource for the customized products. According to the research people are really interested to shop the customized products according to their needs and choices.
          Looking at it, we have decided to develop a customized products website which would include products like coffee mugs, t-shirts, shoes, bags, etc

        </p>

        <div className="container-fluid">


          <div className="row">
            <div className="col-12">
              <h2 className="display-5 text-center mt-5">Latest Products</h2>
              <hr />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 mb-5 px-2">

              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31UIoau50PL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Men's Clothing</h5>
                </div>
              </div>


            </div>
            <div className="col-md-3 col-sm-6 mb-5 px-2">

              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ6eTIBcwMzD-8vzZzHGjTtuxykpDqVWG_cCzlDnE2Msv_nSXIE0fB_25NDbeiumzYZTc1M2XdCqtj3Oi5hZQ7p6EF2Zg73OokW5-FVLxCO" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Women's Clothing</h5>
                </div>
              </div>

            </div>
            <div className="col-md-3 col-sm-4 mb-5 px-2">

              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://assets.winni.in/product/primary/2022/5/60807.jpeg?dpr=1&w=400" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Mugs</h5>
                </div>
              </div>

            </div>

            <div className="col-md-3 col-sm-4 mb-5 px-2">

              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-sibling-led-string-lights-personalized-photo-frames-142541-m.jpg" alt="" />
                <div className="card-body">
                  <h5 className="card-title text-center">Photo Frames</h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage