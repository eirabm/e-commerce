import styles from './navbar.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles.navBar}>
      <SearchIcon />
      <h3>The Candy Shop</h3>
      <PermIdentityOutlinedIcon />
      <FavoriteBorderOutlinedIcon />
      <ShoppingCartOutlinedIcon />
    </div>
  );
}

export default Navbar;
