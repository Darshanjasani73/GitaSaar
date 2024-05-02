import React from 'react';
import { GrFavorite } from 'react-icons/gr';
import { ProductsData } from '../../data/Data';

const Product = () => (
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {ProductsData.map((product, index) => (
        <a className="font-bold cursor-pointer" href={product.url}>
          <div key={index} className="relative max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <GrFavorite style={{ fontSize: '2rem' }} className="size-[10px] absolute top-2 right-2 text-gray-500 cursor-pointer  bg-white-600 rounded-full p-1 border border-white-400" />
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.price}</p>
            </div>
            <div className="px-1 py-1">
              <span className="inline-block bg-white-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-0">
                {product.category}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Product;
