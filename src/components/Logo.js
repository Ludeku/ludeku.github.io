import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 32,
    marginBottom: 32,
  }
}
const Logo = () => {
  return (
    <div style={styles.logo}>
      <Link to='/'>
        <img src={logo} height={48} alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
