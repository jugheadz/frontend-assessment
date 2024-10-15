//import data from "../../data.json";
import articleData from "../../articles.json";
import Article from "./article";
const Articles = () => {
  return (
    <div className="flex flex-row gap-6">
      {articleData.map((data, i) => {
        return <Article data={data} key={i} />;
      })}
    </div>
  );
};

export default Articles;
