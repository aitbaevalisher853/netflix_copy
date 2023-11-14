import Search from "../ui/search/search"
import styles from "./header.module.scss"
import Profile from "./profile"

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <a href="/">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
          alt="Netflix" 
          width='112'
          height='35'/>
        </a>
        <Search />
      </div>
      <Profile />
    </div>
  )
}

export default Header