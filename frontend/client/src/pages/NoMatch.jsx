import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl">Error 404</h1>
      <Link to="/" className="font-semibold text-xl text-blue-700">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NoMatch;
