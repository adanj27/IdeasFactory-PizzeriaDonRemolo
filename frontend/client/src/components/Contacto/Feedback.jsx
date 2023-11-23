import React from 'react';

function Feedback() {
  return (
    <form className="bg-white ml-16 border border-[#CF5100] grid grid-cols-6 gap-2 rounded-xl p-8 w-[600px] text-sm">
      <h1 className="text-center mb-8 text-[#C150F] text-xl font-bold col-span-6">Cuéntanos que te parece Don Remolo!</h1>
      <textarea
        placeholder="Tu opinión es..."
        className="bg-slate-100 text-black h-28 placeholder:text-slate-800 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-[#CF5100]"
      />

      <button type="submit" className="fill-black col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-orange-300 hover:border-black focus:fill-orange-300 focus:bg-[#CF5100] border border-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      </button>
      <button type="submit" className="fill-black col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-orange-300 hover:border-black focus:fill-orange-300 focus:bg-[#CF5100] border border-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      </button>
      <span className="col-span-2" />
      <button type="submit" className="bg-orange-300 stroke-black border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-[#CF5100]">
        <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
          />

          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M10.11 13.6501L13.69 10.0601"
          />
        </svg>
      </button>
    </form>
  );
}

export default Feedback;
