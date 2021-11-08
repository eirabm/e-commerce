import styles from './newsletter.module.scss';
import TextField from '@mui/material/TextField';

/* eslint-disable-next-line */
export interface NewsletterProps {}

export function Newsletter(props: NewsletterProps) {
  return (
    <div className={styles.newsletter}>
      <h2>SUSCRIBE TO OUR NEWSLETTER</h2>
      <p>
        Newsletter subscription. Subscribe to our newsletter and stay updated on
        the latest developments and special offers!
      </p>
      <input placeholder={'e-mail'} />
    </div>
  );
}

export default Newsletter;
