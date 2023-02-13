import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
     {/* Lista com os links na página*/}
    return (

            <ul className={styles.list}>
                <li className={styles.item}>
                <Link to='/'>Home</Link> {/* Funcionam como as tags "a" */}
                </li>
                <li className={styles.item}>
                <Link to='/empresa'>Empresa</Link>
                </li>
                <li className={styles.item}>
                <Link to='/contato'>Contato</Link>
                </li>
            </ul>
      
    )
}

export default Navbar;