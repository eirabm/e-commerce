import styles from './all-products.module.scss';
import { SideBar, Products, FeaturedProducts } from '@ecm/ui';

/* eslint-disable-next-line */
export interface AllProductsProps {}

export function AllProducts(props: AllProductsProps) {
  return (
    <div className={styles.container}>
      <FeaturedProducts />
      <SideBar />
      <Products />
    </div>
  );
}

export default AllProducts;
