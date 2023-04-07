import React from "react";
import Product from '../Product/Product'
import { useState, useEffect } from 'react';

// import ProductPic from '../Picture/1.jfif';
// import ProductPic1 from '../Picture/4.jpg';
// import ProductPic2 from '../Picture/5.jfif';
// import ProductPic3 from '../Picture/2.jpg';
// import ProductPic4 from '../Picture/3.jpg';
// import ProductPic5 from '../Picture/6.jpg';
// import ProductPic6 from '../Picture/7.jpg';
// import ProductPic7 from '../Picture/8.jpg';
// import ProductPic8 from '../Picture/9.jpg';
// import ProductPic9 from '../Picture/10.jpg';
// import ProductPic10 from '../Picture/11.jpg';
// import ProductPic11 from '../Picture/12.jpg';

//import bgPic from '../Picture/bg2.jpg';

// function Item(){
//     return(
     
//         <div className="home1">
//             <Header/> 
//             {/*<img className="home-image"
//              src={bgPic}
//     alt="logo"/>*/}
             
//             <div className="home-row">
//                 <Product
//                      id="1"
//                      title="Lenovo IdeaPad Laptop, 15.6` FHD Touch-Screen Display, AMD Ryzen 7 5700U Wi-Fi, HDMI, Wireless-AX, Cloud Grey, Windows 11"
//                      price={749}
//                      image={ProductPic}

//                 />
//                 <Product
//                      id="2"
//                      title="Tatybo Gaming Headset for PS4 PS5 Xbox One Switch PC with Noise Canceling Mic, Deep Bass Stereo Sound"
//                      price={19}
//                      image={ProductPic1}

//                 />
//                 <Product
//                      id="3"
//                      title="Dell Wired Keyboard - Black KB216 "
//                      price={15}
//                      image={ProductPic2}

//                 />
//             </div>
//             <div className="home-row">
//                 <Product
//                      id="4"
//                      title="seenda Wireless Mouse - 2.4G Cordless Mice with USB Nano Receiver Computer Mouse"
//                      price={11}
//                      image={ProductPic3}

//                 />
//                 <Product
//                      id="5"
//                      title="Lenovo 15.6` IdeaPad 1 Laptop, AMD Dual-core Processor, 15.6` HD Anti-Glare Display"
//                      price={398}
//                      image={ProductPic4}

//                 />
//                 <Product
//                      id="6"
//                      title="JLab Go Air Pop True Wireless Bluetooth Earbuds + Charging Case | Slate | Dual Connect"
//                      price={19}
//                      image={ProductPic5}

//                 />
//             </div>
//             <div className="home-row">
//                 <Product
//                      id="7"
//                      title="JBL T450BT Wireless On-Ear Headphones with Built-in Remote and Microphone (Black)"
//                      price={34}
//                      image={ProductPic6}

//                 />
//                 <Product
//                      id="8"
//                      title="Dual USB C USB A 3.2 Hub: 4 Ports with 2* USB-C 3.2 and 2* USB-A 3.2, Ultra Slim Portable USB Splitter Adapter for Computer Accessories"
//                      price={14}
//                      image={ProductPic7}

//                 />
//                 <Product
//                      id="9"
//                      title="HP RGB Lights Gaming Desktop Combo I7 up to 3.8GHz,16G,128G SSD+3T,GeForce GT 730 2G GDDR5"
//                      price={399.99}
//                      image={ProductPic8}

//                 />
//             </div>
//             <div className="home-row">
//                 <Product
//                      id="10"
//                      title="Acer 2023 Newest Aspire 5 15.6' FHD IPS Slim Laptop, Intel Core i3-1115G4(Up to 4.1GHz)"
//                      price={499}
//                      image={ProductPic9}

//                 />
//                 <Product
//                      id="11"
//                      title="Bose Quiet-control 30 Wireless Headphones Noise Cancelling - Black"
//                      price={177.99}
//                      image={ProductPic10}

//                 />
//                 <Product
//                      id="12"
//                      title="Intel Core i9-13900K Desktop Processor 24 cores (8 P-cores + 16 E-cores) "
//                      price={499}
//                      image={ProductPic11}

//                 />
//                 </div>
//                 <Footer/>
//         </div>
     
//     )
// }

function Item() {
     const [products, setProducts] = useState([]);
   
     useEffect(() => {
       fetch('http://localhost:8090/product/view')
         .then(response => response.json())
         .then(data => setProducts(data));
     }, []);
   
     return (
       <div className="home1">
          
         {/* <img className="home-image" src={HomePic} alt="logo" /> */}
   
         {products.length > 0 && (
           <div className="home-row">
             {products.map(product => (
               <Product
                 key={product.id}
                 id={product.id}
                 title={product.name}
                 price={product.price}
                 image={product.image}
               />
             ))}
           </div>
         )}
         
       </div>
     );
   }
   
export default Item;