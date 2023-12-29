import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mb-10 px-4 text-center'>
      <small className='text-xs'>&copy;{currentYear} Stavros Karadimitriou. All rights reserved.</small>
    </footer>
  );
}
