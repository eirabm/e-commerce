import styles from './app.module.scss';
import { AllProducts, BackgroundLayer } from '@ecm/layout';
import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <BackgroundLayer />
      <div className={styles.actualPage}>
        <AllProducts />
      </div>
    </div>
  );
}

export default App;
