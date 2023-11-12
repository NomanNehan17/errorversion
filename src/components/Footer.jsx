import React, { useState, useRef } from "react";
import { ImGithub } from "react-icons/im";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";
import emailjs from "emailjs-com";
import './Footer.CSS';

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Update the service ID and template ID
      const result = await emailjs.sendForm('service_2l81t59', 'template_41pvklg', form.current, '_D--cICVIP10yVo8o');
      console.log(result.text)
      
      // Reset the form after sending the email
      form.current.reset();
    } catch (error) {
      console.error('Failed to send message:', error.text);
    }
  };

  return (
    <div id="footer" className="bg-blue-800 text-white py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-8">
        {/* LogoIcon Start here */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">© MindBendersTeam.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        {/* LocateUs Start here */}
        <div>
          <h2 className="text-2xl font-semibold mb-4"> Locate us </h2>
          <div className="text-base flex flex-col gap-2">
            <p>IIUC, Kumira, Chattogram-Bangladesh</p>
            <p>phone: 01748595454</p>
            <p>phone: 01830065110</p>
            <p>e-mail: nomanrooks@gmail.com</p>
          </div>
        </div>

        {/* Profile Start here */}
        <div>
          <h2 className="text-2xl font-semibold mb-4"> Profile </h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>

        {/* Contact Me Start here */}
<div className="text-white">
  <h2 className="text-2xl font-semibold mb-4"> Contact Me </h2>
  <div className="flex flex-col gap-4">
    <form ref={form} onSubmit={sendEmail}>
      <input
        className="bg-transparent border-b border-white px-4 py-2 text-sm text-white w-full"
        placeholder="Your Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="bg-transparent border-b border-white px-4 py-2 text-sm text-white w-full"
        placeholder="Your Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className="bg-transparent border-b border-white px-4 py-2 text-sm text-white w-full"
        placeholder="Your Message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-white text-black py-2 px-4 rounded-full text-sm hover:bg-gray-900 transition duration-300 ease-in-out"
      >
        Send Message
      </button>
    </form>
  </div>
</div>


        {/* Embedded Google Map */}
        <div style={{ margin: '20px 0' }}>
          <iframe
            src="https://mapcarta.com/W276731950/Map"
            width="430%"
            height="260"
            frameBorder="0"
            style={{ border: 0, margin: 'auto', display: 'block' }}
            allowFullScreen=""
            title="IIUC,Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
