import styles from "../css/Footer.module.css"
import {FaEnvelope, FaGithub} from "react-icons/fa";
function Footer(){

    return(
        <div className={styles.container}>
            Hi, i'm Footer
            <ul className={styles.lists}>
                <li>
                    <a href="https://github.com/minseoky/Mid-Term-Project"><FaGithub />Github</a>
                </li>
                <li>
                    <a href="mailto:minseok184@gmail.com"><FaEnvelope />Gmail</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;