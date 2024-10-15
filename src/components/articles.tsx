//import data from "../../data.json";
import articleData from "../../articles.json"
import Article from "./article";
const Articles = () => {
    return (
        articleData.map((data, i) => {
            return <Article data={data} key={i}/>
        })
    )
}

export default Articles