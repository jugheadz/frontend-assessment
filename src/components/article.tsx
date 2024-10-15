import ArticleTitle from "./articleTitle";
import ArticleDetails from "./articleDetails";
import Image from "./image";
import ReadMoreButton from "./readMoreButton";

const Article = ({
  data: { title, content, image },
}: {
  data: { title: string; content: string; image: string };
}) => {
  return (
    <article>
      <Image src={image} />
      <ArticleTitle title={title} />
      <ArticleDetails content={content} />
      <ReadMoreButton/>
    </article>
  );
};

export default Article;
