import ArticleTitle from "./articleTitle";
import ArticleDetails from "./articleDetails";
const Article = ({data: {title, content}} : { data: {title: string; content: string}}) => {
    return (
        <article>
            <ArticleTitle title={title}/>
            <ArticleDetails content={content}/>
        </article>
    )
}

export default Article