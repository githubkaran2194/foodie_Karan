/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const date = time.toLocaleTimeString('en-us', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <footer className='w-full bg-gray-900 text-white p-5'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div>
          <p>Current Time: {date}</p>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Created By <a href='#' aria-label='created by'>karan</a> ❤️ All rights reserved.</p>
        </div>
        <div>
          <div className='flex space-x-4'>
            <a href='https://facebook.com' aria-label='Facebook'><FaFacebook /></a>
            <a href='https://twitter.com' aria-label='Twitter'><FaTwitter /></a>
            <a href='https://instagram.com' aria-label='Instagram'><FaInstagram /></a>
            <a href='https://linkedin.com' aria-label='LinkedIn'><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
