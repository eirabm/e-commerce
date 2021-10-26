import styles from './featured-products.module.scss';

/* eslint-disable-next-line */
export interface FeaturedProductsProps {}

export function FeaturedProducts(props: FeaturedProductsProps) {
  return (
    <div className={styles.featuredProducts}>
      <h1>Welcome to FeaturedProducts!</h1>
    </div>
  );
}

export default FeaturedProducts;
