import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles.footer}>
      <div>
        <h3>The candy shop</h3>
        <br />
        <p> The best place to get candy and stuff</p>
      </div>

      <div>
        <h3>Get Help</h3>
        <br />
        <p> gethelp</p>
        <p> gethelp</p>
        <p> gethelp</p>
      </div>

      <div>
        <h3>About us</h3>
        <br />
        <p> About us</p>
        <p> About us</p>
        <p> About us</p>
      </div>
    </div>
  );
}

export default Footer;
