import {useState} from 'react';
import {useLocalStorage} from '../../hook/useLocalStorage'
import styles from "./style.module.css";

const Home = () => {
    
    const [user, setUser] = useLocalStorage('USER', '')
    const [inputValue, setInputValue] = useState('')

    return(
        <div>
            {user &&( 
                <div className={styles.ExitDiv}>
                    <div className={styles.Name}> Добро пожаловать, {user}</div>
                    <button className={styles.Exit} onClick = {() => setUser('')}>Выйти</button>
                </div>
            )}
            {!user && (
                <div className={styles.login}>
                    <label>Напишите свое имя: </label>
                    <div className={styles.user}>
                        <input className={styles.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                    </div>
                    <div className={styles.submitDiv}>
                        <button onClick={() => setUser(inputValue)} className={styles.submit}>Войти</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home;