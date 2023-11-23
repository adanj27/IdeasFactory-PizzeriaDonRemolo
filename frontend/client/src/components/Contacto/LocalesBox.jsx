import React from 'react';

function LocalesBox() {
  return (
    <>
      <div className="flex items-center justify-center p-24 -translate-x-8">
        <div className="relative bg-[#CF5100] w-[200px] sm:w-[650px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-slate-200 w-full h-full absolute group-hover:-translate-y-16">
            <p className="text-xl sm:text-4xl font-bold text-[#CF5100] font-display">LOCALES</p>
            <p className="px-10 text-[10px] sm:text-[16px] text-gray-700">
              Dirección: 123 Calle de la Pizza, Ciudad Pizza Teléfono: +1 (555) 123-4567
            </p>
            <p className="font-serif text-[10px] sm:text-[14px] text-gray-700">Correo Electrónico: info@donremolo.com</p>
            <p className="font-mono font-bold text-[16px] text-gray-700 pt-5">Don Remolo ©</p>
          </div>
          <button
            type="submit"
            className="seal bg-[#CF5100] font-mono text-black w-10 aspect-square rounded-full z-40 text-[14px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-orange-500"
          >
            DR
          </button>
          <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]" />
          <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]" />
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]" />
          <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]" />
        </div>
      </div>
      ;
    </>
  );
}

export default LocalesBox;
