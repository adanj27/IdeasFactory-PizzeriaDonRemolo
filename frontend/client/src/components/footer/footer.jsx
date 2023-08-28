import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-4 text-center flex justify-center items-center w-full bottom-0 mt-4">
      <div className="container mx-auto">
        <img
          src="Facebook.png"
          alt="logoFacebook"
          className="h-5 inline-block mr-4 -mb-3.5"
        />
        <img
          src="Instagram.png"
          alt="logoInstagram"
          className="h-5 inline-block mr-4 -mb-3.5"
        />
        <img
          src="Whatsapp.png"
          alt="logowhatsapp"
          className="h-5 inline-block -mb-3.5"
        />
        <img
          src="logo_4-removebg-preview 1.png"
          alt="logoPizza"
          className="mx-auto py-auto h-18 -mb-5 "
        />
        <p className="text-sm text-black py-auto -mb-1">
          Copyright © 2023 Pizzeria Don Remolo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
