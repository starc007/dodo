import React from "react";
import { AiOutlineMobile, AiTwotoneBuild } from "react-icons/ai";
import { BsArrowRepeat, BsCodeSlash } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import BoxComponent from "../components/BoxComponent";
import Footer from "../components/Footer";
import Header from "../components/Navbar/Header";
import img1 from "../assets/laravel.jpg";
import img2 from "../assets/responsive.jpg";
import img3 from "../assets/multi-vendor.jpg";
import img4 from "../assets/b-c-model.jpg";
import img5 from "../assets/payment.jpg";
import img6 from "../assets/ecom-multiple-home.jpg";
import img7 from "../assets/ecom-multiple-option.jpg";
import img8 from "../assets/ecom-social.jpg";

const Feature = () => {
  return (
    <div>
      <div className="h-16">
        <Header />
      </div>

      <div className="h-auto py-4 p-5 bg-yellow-50">
        <p className="text-5xl text-center font-semibold">
          <span style={{ color: "#F28C0E" }}>General</span> Features
        </p>
        <div className="flex justify-center div-margin-4 flex-wrap">
          <BoxComponent
            title=" 100% Responsive Design"
            icon={<AiOutlineMobile size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Laravel based PHP script"
            icon={<AiTwotoneBuild size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="B-B-C eCommerce"
            icon={<BsArrowRepeat size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="B-C eCommerce"
            icon={<FaHandshake size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Multi-Vendor System"
            icon={<TiGroup size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Dynamic Homepage"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
        </div>
      </div>
      <div className="h-auto py-4 p-5 bg-yellow-100">
        <p className="text-5xl text-center font-semibold">
          <span style={{ color: "#F28C0E" }}>Standard</span> eCommerce
        </p>
        <div className="flex justify-center div-margin-4 flex-wrap">
          <BoxComponent
            title="Smart Cart System"
            icon={<AiOutlineMobile size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Compare Product"
            icon={<AiTwotoneBuild size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Wishlist"
            icon={<BsArrowRepeat size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Featured Product"
            icon={<FaHandshake size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Today’s Deal"
            icon={<TiGroup size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Flash Deal"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Discount"
            icon={<AiOutlineMobile size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Shipping Cost"
            icon={<AiTwotoneBuild size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Product Tax"
            icon={<BsArrowRepeat size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Variant Based Stock"
            icon={<FaHandshake size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Variants Product Price"
            icon={<TiGroup size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Social Media Sharing"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Smart Checkout"
            icon={<AiOutlineMobile size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Suggestive Search"
            icon={<AiTwotoneBuild size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Customer Review"
            icon={<BsArrowRepeat size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Product Video"
            icon={<FaHandshake size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Pickup Point"
            icon={<TiGroup size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Coupon"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
        </div>
      </div>
      <div className="h-auto py-4">
        <p className="text-4xl md:text-5xl px-2 text-center font-semibold">
          <span style={{ color: "#F28C0E" }}>Social Media</span>
          Login & Sharing
        </p>
        <div className="flex justify-center div-margin-4 flex-wrap">
          <BoxComponent
            title="Facebook Login"
            icon={<FaHandshake size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Google Login"
            icon={<TiGroup size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Twitter Login"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
        </div>
      </div>
      <div className="h-auto py-5 bg-yellow-50">
        <p className="text-4xl md:text-5xl px-2 text-center font-semibold">
          Multiple
          <span style={{ color: "#F28C0E" }}>International Payment</span>
          Gateways
        </p>
        <div className="flex justify-center div-margin-4 flex-wrap">
          <BoxComponent
            title="PayPal payment"
            icon={<FaHandshake size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Stripe payment"
            icon={<TiGroup size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Razorpay payment"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Instamojo payment"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Paystack payment"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Voguepay payment"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Cash on delivery"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
        </div>
      </div>
      <div className="h-auto py-4">
        <p className="text-4xl md:text-5xl px-2 text-center font-semibold">
          <span style={{ color: "#F28C0E" }}>Shipping</span>
          Option
        </p>
        <div className="flex justify-center div-margin-4 flex-wrap">
          <BoxComponent
            title="Free Shipping"
            icon={<FaHandshake size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Pickup Point"
            icon={<TiGroup size={38} color="#F28C0E" />}
          />
          <BoxComponent
            title="Flat Rate"
            icon={<BsCodeSlash size={38} color="#F28C0E" />}
          />
        </div>
      </div>
      <div className="h-auto flex justify-around flex-wrap p-5 my-4">
        <div className="w-full md:w-2/5">
          <img src={img1} />
        </div>
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            Laravel Based PHP Script
          </p>
          <p className="text-gray-600 text-lg">
            This script has been developed using the Laravel framework version
            5.8 of PHP. In this system for frontend bootstrap version 4 and
            backend bootstrap version 3 are used.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
            <a
              href="#"
              className="md:h-8 md:w-28 text-sm md:text-base w-32 h-7 bg-green-50 text-green-500 text-center p-1 mt-2 hover:bg-green-500 hover:text-white"
            >
              Seller Panel
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto flex flex-wrap justify-around p-5 my-4">
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            Responsive Design
          </p>
          <p className="text-gray-600 text-lg">
            Super responsive for all available devices. All pages, all
            attributes are properly designed for any size of device like
            desktop, laptop, mobile, tablet, etc. The whole layout is available
            to fit for any size of screen.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <img src={img2} />
        </div>
      </div>
      <div className="h-auto flex flex-wrap justify-around p-5 my-4">
        <div className="w-full md:w-2/5">
          <img src={img3} />
        </div>
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            B-B-C eCommerce Model
          </p>
          <p className="text-gray-600 text-lg">
            The main business system in this script is B-B-C. That means
            Business-Business-Customer system. This system can manage third step
            business operations without any hassle.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto flex justify-around flex-wrap p-5 my-4">
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            B-C eCommerce System
          </p>
          <p className="text-gray-600 text-lg">
            Besides the B-B-C system there is another wonderful feature is this
            system can turn to only B-C means Business-Customer system at any
            time. Customers will get only inhouse products.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <img src={img4} />
        </div>
      </div>
      <div className="h-auto flex justify-around flex-wrap p-5 my-4">
        <div className="w-full md:w-2/5">
          <img src={img5} />
        </div>
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            Payment Options
          </p>
          <p className="text-gray-600 text-lg">
            Secure and fast payment gateway system allows to move money as easy
            as possible.We are using the most popular international payment
            gateways like PayPal, Stripe, Instamojo, Razorpay, Paystack &
            SSLCOMMERZ for user payments.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto flex justify-around flex-wrap p-5 my-4">
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            Dynamic Homepage
          </p>
          <p className="text-gray-600 text-lg">
            Homepage setup is very much easy. To set all sections, image,
            banners, select categories, etc are available on the admin panel. To
            make the homepage more flexible & attractive admin can use multiple
            banners and slider images.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <img src={img6} />
        </div>
      </div>
      <div className="h-auto flex justify-around flex-wrap p-5 my-4">
        <div className="w-full md:w-2/5">
          <img src={img7} />
        </div>
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            Multiple Options
          </p>
          <p className="text-gray-600 text-lg">
            You can make your page as you want through multiple options such as
            language, currency & color theme.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
      <div className="h-auto flex justify-around flex-wrap p-5 my-4">
        <div className="w-full md:w-2/5 self-center p-3">
          <p
            className="md:text-5xl text-4xl font-semibold"
            style={{ color: "#F28C0E" }}
          >
            Social Media Options
          </p>
          <p className="text-gray-600 text-lg">
            Social media login(Facebook, Google, Twitter) and Social media
            sharing (Facebook, Twitter, Linkedin, Tumblr, In1, StumbleUpon,
            Digg) make your business more vibrant.
          </p>
          <div className="flex a-rm">
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-red-50 text-red-500 text-center p-2 mt-2 hover:bg-red-500 hover:text-white"
            >
              Frontend
            </a>
            <a
              href="#"
              className="md:h-10 md:w-28 text-sm md:text-base w-24 h-8 bg-blue-50 text-blue-500 text-center mx-2 p-2 mt-2 hover:bg-blue-500 hover:text-white"
            >
              Admin
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <img src={img8} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Feature;
