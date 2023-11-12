// FreeDeliveryPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { freeDeliveryCar } from '../assets/index';

const FreeDeliveryPage = () => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Free Delivery </h2>
      <img
        className="mx-auto max-w-full h-auto"
        src={freeDeliveryCar}
        alt="Free Delivery Car"
        style={{ maxWidth: '600px' }} 
      />
      <p className="mt-4">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-blue-500 hover:text-green-500 hover:underline"
        >
          &larr; Go Shopping
        </Link>
      </div>
      </p>
    </div>
  );
};

export default FreeDeliveryPage;
