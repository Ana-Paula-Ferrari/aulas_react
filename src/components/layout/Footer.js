import { FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
    return(
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebookF/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    )
}

export default Footer