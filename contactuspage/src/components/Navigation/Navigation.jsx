import styles from './Navigation.module.css'

const Navigation = () => {
  console.log(styles);
  return (
    <nav className= {`${styles.Navigation} container`} >
        <div className="logo">
            <img src="images/logo.png" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
    </nav>
  )
}

export default Navigation