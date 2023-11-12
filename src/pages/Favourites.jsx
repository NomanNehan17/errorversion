import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites, resetFavorites } from '../redux/bazarSlice';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const favorites = useSelector((state) => state.bazar.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  const handleResetFavorites = () => {
    dispatch(resetFavorites());
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Favourites</h2>
      <div>
        {favorites.length === 0 ? (
          <p>No favourites yet.</p>
        ) : (
          <ul>
            {favorites.map((item) => (
              <li key={item._id} className="mb-4 border p-4 rounded relative">
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveFromFavorites(item._id)}
                    className="text-white bg-red-500 rounded-full w-8 h-8 mr-4 focus:outline-none transition-all duration-300 hover:bg-red-600"
                    style={{ marginTop: '-1rem' }}
                  >
                    &times;
                  </button>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={handleResetFavorites}
          className="bg-blue-500 text-white px-4 py-2 mb-4 rounded transition-all duration-300 hover:bg-red-500"
        >
          Reset All Favorites
        </button>
      </div>

      <div className="flex items-center">
        <Link
          to="/"
          className="text-blue-500 hover:text-green-500 hover:underline"
        >
          &larr; Go Shopping
        </Link>
      </div>
    </div>
  );
};

export default Favourites;
