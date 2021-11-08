import styles from './app.module.scss';
import { AllProducts, BackgroundLayer } from '@ecm/layout';
import { Route } from '@ecm/layout';
import { Switch } from 'react-router';

export function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route
          path="/"
          exact
          component={AllProducts}
          layout={BackgroundLayer}
        />
      </Switch>
    </div>
  );
}

export default App;
