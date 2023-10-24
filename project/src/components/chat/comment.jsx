import styles from './style.module.css'
import {Link} from 'react-router-dom'

const Comment = (props) => {
    return(
        <div className={styles.wrapper}>
            <label>Введите сообщение:</label>
            <input value = {props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} className={styles.input}/>
            <div className={styles.button}>
                <button onClick={props.changeChat} className={styles.button1}>Отправить</button>
                <button onClick={() => props.setChatData([])} className={styles.button2}>Удалить чат</button>
            </div>
            {props.showDialogReg && (
                <div className={styles.p}>
                    Для начала, нужно авторизироваться, <Link to='/' className={styles.a}>Вернуться на главную</Link>
                </div>
            )}
        </div>
    )
}

export default Comment