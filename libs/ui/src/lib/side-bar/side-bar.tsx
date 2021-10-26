import styles from './side-bar.module.scss';

/* eslint-disable-next-line */
export interface SideBarProps {}

export function SideBar(props: SideBarProps) {
  return (
    <div className={styles.sideBar}>
      <h1>Welcome to SideBar!</h1>
    </div>
  );
}

export default SideBar;
