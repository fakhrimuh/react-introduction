import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./input.module.css";

const Input = ({onChange, value}) => {
    return(
        <input 
            className={styles.input}
            onChange = {onChange}
            placeholder ="SEARCH"
            value = {value}
        />
    )
}

Input.propTypes ={
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input
