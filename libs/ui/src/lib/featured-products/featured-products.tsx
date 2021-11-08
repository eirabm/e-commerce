import styles from './featured-products.module.scss';

/* eslint-disable-next-line */
export interface FeaturedProductsProps {}

export function FeaturedProducts(props: FeaturedProductsProps) {
  return (
    <div className={styles.featuredProducts}>
      <div className={styles.featuredOne}>
        <div className={styles.featuredInfo}>
          <p>Some description</p>
          <h3>Japanese collection 2021</h3>
          <button>More info</button>
        </div>
        <img
          src="https://uploads-ssl.webflow.com/5b76fe3b848784bfc58dacce/5b935a0906db365a35621227_japon%20food2.png"
          alt="hi-chew"
        />
      </div>
      <div className={styles.featuredTwo}>
        <div className={styles.featuredInfo}>
          <p>Some description</p>
          <h3>Japanese collection 2021</h3>
          <button>More info</button>
        </div>
        <img
          src="https://cdn.shopify.com/s/files/1/0256/4964/3599/products/closed--pocky-chocolate_449x.png?v=1622554782"
          alt="pokis"
        />
      </div>
    </div>
  );
}

export default FeaturedProducts;
