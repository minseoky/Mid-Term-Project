import styles from "../css/Footer.module.css";
import { FaEnvelope, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.lists}>
                <a href="https://github.com/minseoky/Mid-Term-Project" >
                    <FaGithub />
                    <span>Github</span>
                </a>
                <a href="mailto:minseok184@gmail.com">
                    <FaEnvelope />
                    <span>Gmail</span>
                </a>
            </div>
            <div className={styles.text}>
                copyright &copy; {new Date().getFullYear()} All rights reserved by <a href="https://github.com/minseoky" className={styles.link}>Minseoky</a>
            </div>
        </div>
    );
}

export default Footer;
