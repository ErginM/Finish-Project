import { Link } from "react-router-dom";
import styles from './style.module.css';

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.a}>Главная</Link>
                <Link to='/chat' className={styles.a}>Чат</Link>
                <Link to='/test' className={styles.a}>Тест API</Link>
            </nav>
        </div>
    )
}

export default Header;