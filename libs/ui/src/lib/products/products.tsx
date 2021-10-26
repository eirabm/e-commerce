import { useState } from 'react';
import styles from './products.module.scss';

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div className={styles.productsContainer}>
      <button onClick={() => setIsGrid(true)}>Grid</button>
      <button onClick={() => setIsGrid(false)}>Column</button>
      <div
        className={[styles.product, isGrid ? styles.productGrid : '']
          .filter(Boolean)
          .join(' ')}
      >
        <div>product</div>
        <div>product</div>
        <div>product</div>
        <div>product</div>
        <div>product</div>
        <div>product</div>
        <div>product</div>
      </div>
    </div>
  );
}

export default Products;
