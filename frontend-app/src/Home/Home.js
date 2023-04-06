import React from "react";
<<<<<<< HEAD
import './Home.css';
=======
>>>>>>> main
import HomePic from '../Picture/home.png';
import ProductPic from '../Picture/1.jfif';
import ProductPic1 from '../Picture/4.jpg';
import ProductPic2 from '../Picture/5.jfif';
import ProductPic3 from '../Picture/2.jpg';
import ProductPic4 from '../Picture/3.jpg';
import ProductPic5 from '../Picture/6.jpg';
import ProductPic6 from '../Picture/7.jpg';
import ProductPic7 from '../Picture/8.jpg';
import ProductPic8 from '../Picture/9.jpg';
import Product from '../Product/Product'

function Home(){
    return(
        <div className="home">
            <img className="home-image"
             src={HomePic}
             alt="logo"/>

            <div className="home-row">
                <Product
                     id="1"
                     title="Lenovo IdeaPad Laptop, 15.6` FHD Touch-Screen Display, AMD Ryzen 7 5700U Wi-Fi, HDMI, Wireless-AX, Cloud Grey, Windows 11"
                     price={749}
                     image={ProductPic}

                />
                <Product
                     id="2"
                     title="Tatybo Gaming Headset for PS4 PS5 Xbox One Switch PC with Noise Canceling Mic, Deep Bass Stereo Sound"
                     price={19}
                     image={ProductPic1}

                />
                <Product
                     id="3"
                     title="Dell Wired Keyboard - Black KB216 "
                     price={15}
                     image={ProductPic2}

                />
            </div>
            <div className="home-row">
                <Product
                     id="4"
                     title="seenda Wireless Mouse - 2.4G Cordless Mice with USB Nano Receiver Computer Mouse"
                     price={11}
                     image={ProductPic3}

                />
                <Product
                     id="5"
                     title="Lenovo 15.6` IdeaPad 1 Laptop, AMD Dual-core Processor, 15.6` HD Anti-Glare Display"
                     price={398}
                     image={ProductPic4}

                />
                <Product
                     id="6"
                     title="JLab Go Air Pop True Wireless Bluetooth Earbuds + Charging Case | Slate | Dual Connect"
                     price={19}
                     image={ProductPic5}

                />
            </div>
            <div className="home-row">
                <Product
                     id="7"
                     title="JBL T450BT Wireless On-Ear Headphones with Built-in Remote and Microphone (Black)"
                     price={34}
                     image={ProductPic6}

                />
                <Product
                     id="8"
                     title="Dual USB C USB A 3.2 Hub: 4 Ports with 2* USB-C 3.2 and 2* USB-A 3.2, Ultra Slim Portable USB Splitter Adapter for Computer Accessories"
                     price={14}
                     image={ProductPic7}

                />
                <Product
                     id="9"
                     title="HP RGB Lights Gaming Desktop Combo I7 up to 3.8GHz,16G,128G SSD+3T,GeForce GT 730 2G GDDR5"
                     price={399.99}
                     image={ProductPic8}

                />
            </div>

        </div>
     
    )
}

export default Home;