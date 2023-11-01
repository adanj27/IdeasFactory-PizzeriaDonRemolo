import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-4 text-center flex w-full bottom-0 mt-4">
      <div className="container mx-auto">
        <div className="mb-3.5">
          <img src="Facebook.svg" alt="logoFacebook" className="h-5 inline-block mr-4" />
          <img src="Instagram.svg" alt="logoInstagram" className="h-5 inline-block mr-4" />
          <img src="Whatsapp.svg" alt="logowhatsapp" className="h-5 inline-block" />
        </div>
        <img src="logo_4-removebg-preview 1.png" alt="logoPizza" className="mx-auto py-auto h-18 -mb-5" />
        <p className="text-sm text-black py-1">
          Copyright © 2023 Pizzeria Don Remolo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
