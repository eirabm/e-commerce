import styles from './side-bar-shopping-cart.module.scss';

/* eslint-disable-next-line */
export interface SideBarShoppingCartProps {}

export function SideBarShoppingCart(props: SideBarShoppingCartProps) {
  return (
    <div className={styles.shoppingCart}>
      <h1>Welcome to SideBarShoppingCart!</h1>
    </div>
  );
}

export default SideBarShoppingCart;
