import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#070e18',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '80px', // عشان ينزل تحت الـ Navbar
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '10rem', margin: 0, opacity: 0.1, color: '#06b6d4' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginTop: '-60px' }}>Oops! Page Not Found</h2>
      <p style={{ color: '#888', maxWidth: '400px', margin: '20px 0' }}>
        The page you're looking for has vanished into the digital void.
      </p>
      <Link to="/" style={{
        backgroundColor: '#06b6d4',
        color: '#070e18',
        padding: '12px 30px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginTop: '20px'
      }}>
        Back to Homepage
      </Link>
    </div>
  );
}