import styles from "./Navbar.module.scss";
import {MdComputer} from "react-icons/md";


export const Navbar = () => {
  return (
    <a href={"/"}>
      <div className={styles.navbarContainer}>
          <p className={styles.heading}>Tove Seger</p>
          <div className={styles.computerIcon}>
            <MdComputer/>
          </div>
      </div>
    </a>
  )
}
