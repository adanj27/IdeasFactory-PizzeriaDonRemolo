import React from 'react';
import { Link } from 'react-scroll';

function NavBarFoods() {
  const links = [
    {
      id: 1,
      link: 'pizzas',
    },
    {
      id: 2,
      link: 'empanadas',
    },
    {
      id: 3,
      link: 'bebidas',
    },
    {
      id: 4,
      link: 'postres',
    },
  ];
  return (
    <div className="flex justify-center items-center w-full h-20 px-4 fixed text-xl text-black">
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-10 uppercase cursor-pointer font-medium hover:scale-125 duration-200 hover:border-b-4 border-b-black"
            // border-b-4 border-b-black
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBarFoods;
