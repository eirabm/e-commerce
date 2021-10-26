import styles from './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles.navBar}>
      <h3>The Candy Shop</h3>
    </div>
  );
}

export default Navbar;
