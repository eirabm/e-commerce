import styles from './background-layer.module.scss';
import { Footer, Navbar, Newsletter } from '@ecm/ui';

/* eslint-disable-next-line */
export interface BackgroundLayerProps {}

export function BackgroundLayer(props: BackgroundLayerProps) {
  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.disclaimer}>
        <p>Candys from all around the world</p>
      </div>
      <div></div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default BackgroundLayer;
