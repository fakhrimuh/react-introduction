import React, { Component } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./emojis.module.css";
import EmojiBox from "../EmojiBox";
import Empty from "../Empty/empty";

import { filterEmojis } from "../../utils/filterEmojis";



const Emojis = ({emojisData, searchText}) => {
    const [filteredEmojis, setFilteredEmojis] =useState([])
    useEffect(()=>{
    setFilteredEmojis(filterEmojis({
        emojisData,
        searchText
    }))
}, [emojisData, searchText])

if (filteredEmojis.length > 0) {
    return(
        <div className={styles.emojisGrid}>
            {filteredEmojis.map((data, index) =>(
                <EmojiBox key={index}
                title={data.title} symbol={data.symbol} />
            ))}
        </div>
    )
} else{
    return <Empty text="Ooops look like what you search can't we find let's try another keyword" />
}
    
}

Emojis.propTypes = {
    emojisData : PropTypes.array,
    searchText : PropTypes.string
}

export default Emojis