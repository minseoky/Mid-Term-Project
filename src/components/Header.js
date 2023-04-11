// Header.js

import React from "react";
import styles from "../css/Header.module.css";
import ReactTypingEffect from "react-typing-effect"; // Header 컴포넌트의 CSS 파일 import

function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <ReactTypingEffect
                    text={['My Portfolio']}
                    eraseSpeed={50}
                    eraseDelay={2000}
                    typingDelay={1000}
                />
            </h1>
            <nav className={styles.navbar}>
                <ul className={styles.navlist}>

                    <li className={styles.navitem}>
                        <a href="http://www.minseoky.me" rel="noreferrer" target="_blank" className={styles.navlink}>
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
