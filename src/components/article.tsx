import ArticleTitle from "./articleTitle";
import ArticleDetails from "./articleDetails";
import Image from "./image";
import ReadMoreButton from "./readMoreButton";
import { useRef } from "react";

const Article = ({
  data: { title, content, image, url },
}: {
  data: { title: string; content: string; image: string; url: string };
}) => {
  const articleRef = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(e.currentTarget, articleRef.current);
  };
  return (
    <article
      className="flex-1 items-center justify-center md:items-start md:justify-start"
      ref={articleRef}
    >
      <a
        onClick={handleClick}
        href={url}
        className="flex flex-col flex-1 gap-y-4 items-center justify-center md:items-start md:justify-start"
      >
        <Image src={image} />
        <ArticleTitle title={title} />
        <ArticleDetails content={content} />
        <ReadMoreButton />
      </a>
    </article>
  );
};

export default Article;
