import React, { useState } from 'react';

const SliderMenu = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className={`fixed top-0 right-0 h-screen w-1/2 bg-gray-800 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
      <div className="p-4 flex justify-center">
        <ul className="space-y-4">
          <li className='mt-2'>
            <a className="text-white text-xl" href="/home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a className="text-white text-xl" href="/cities" onClick={handleLinkClick}>
              Cities
            </a>
          </li>
          <li>
            <button onClick={handleCloseClick} className='bg-gray-300 rounded mt-4 p-1'>Close</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SliderMenu;