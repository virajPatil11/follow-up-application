import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Follow-Up-Application By Viraj Patil</p>
      </div>
    </footer>
  );
}

const footerStyle = {
//   backgroundColor: '#333',
//   color: '#fff',
//   padding: '20px',
//   textAlign: 'center',
position: 'fixed',
bottom: 0,
width: '100%',
backgroundColor: '#333',
color: '#fff',
padding: '20px',
textAlign: 'center',

};

export default Footer;
