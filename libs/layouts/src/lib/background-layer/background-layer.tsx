import styles from './background-layer.module.scss';
import { Footer, Navbar, Newsletter, SideBarShoppingCart } from '@ecm/ui';
import { AllProducts } from '../all-products/all-products';

/* eslint-disable-next-line */
export interface BackgroundLayerProps {}

export function BackgroundLayer(props: BackgroundLayerProps) {
  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.disclaimer}>
        <p>Candys from all around the world</p>
      </div>
      <AllProducts />
      <Newsletter />
      <Footer />
      <SideBarShoppingCart />
    </div>
  );
}

export default BackgroundLayer;
