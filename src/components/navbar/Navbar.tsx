import styles from "./Navbar.module.scss";
import {MdComputer} from "react-icons/md";


export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <a href={"/"}>
          <p className={styles.heading}>Tove Seger</p>
        </a>
        <div className={styles.computerIcon}>
          <MdComputer/>
        </div>
      </div>
  )
}
