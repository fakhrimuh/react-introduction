import PropTypes from "prop-types";
import NewsCard from "../newsCard";
import styles from "./newsList.module.css";

const NewsList = ({articles})=>{
    return(
    <div className={styles.NewsList}>
        {articles.map((article, index, array)=>{
            if (!article.urlToImage || !article.author || !article.content) {
                return null
            }

            return(
                <NewsCard
                    key = {index}
                    src = {article.urlToImage}
                    title = {article.title}
                    publishedAt = {article.publishedAt}
                    author = {article.author}
                    sourceName = {article.source.name}
                    description = {article.description}
                    url = {article.url}
                    notLastChild = {!(array.length === index+1)}
                />
            )
        })}
    </div>)
}

NewsList.propTypes = {
    articles: PropTypes.array
}

export default NewsList