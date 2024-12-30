/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './NavbarStyles';

const Navbar = () => {
  return (
    <div css={styles.navbar}>
      <div css={styles.navItem}>Project Introduction</div>
      <div css={styles.navItem}>About Me</div>
      <div css={styles.navItem}>Implementation</div>
    </div>
  );
};

export default Navbar;
:
