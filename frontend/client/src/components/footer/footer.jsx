import React from 'react';

function Footer() {
  return (
    <footer className="bg--200 bg-white py-8 text-center absolute w-full bottom-0">
      <div className="text-black text-600">
        <img src="Facebook.png" alt="logoFacebook" className="h-6 inline-block mr-4" />
        <img src="Instagram.png" alt="logoInstagram" className="h-6 inline-block mr-4" />
        <img src="Whatsapp.png" alt="logowhatsapp" className="h-6 inline-block" />
        <img src="logo_4-removebg-preview 1.png" alt="logoPizza" className=" mx-auto" />
        <p>Copyright © 2023 Pizzeria Don Remolo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
