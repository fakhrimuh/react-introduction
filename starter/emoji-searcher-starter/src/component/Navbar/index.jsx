import styles from "./navbar.module.css";
import React, { Component } from "react";

import searchIcon from "../../assets/search-icon.svg";
import emojiIcon from "../../assets/emoji-icon.svg";

const Navbar = ()=>{
    return(
        <nav className={styles.nav}>
            <img style={{marginRight : 8}} className={styles.navIcon} src={emojiIcon} alt="Emoji Icon" />
            <img style={{marginTop: 3}} className={styles.navIcon} src={searchIcon} alt="search Icon" />
            <span className={styles.navTitle}> er </span>
        </nav>
    )
}

export default Navbar;