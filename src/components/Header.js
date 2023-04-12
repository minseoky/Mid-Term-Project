// Header.js

import React from "react";
import styles from "../css/Header.module.css"; // Header ������Ʈ�� CSS ���� import

function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Portfolio</h1>
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
