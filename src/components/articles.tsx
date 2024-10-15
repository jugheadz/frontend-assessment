import data from "../../data.json";
import Article from "./article";
const Articles = () => {
    return (
        data.map(data => {
            return <Article data={data}/>
        })
    )
}

export default Articles