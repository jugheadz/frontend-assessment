import { useMemo } from 'react';
import DOMPurify from 'dompurify';

const ArticleDetails = ({content} : {content: string}) => {
    const sanitizedContent = useMemo(() => ({
        __html: DOMPurify.sanitize(content)
      }), [content]);
    return (
        <div>
            <p dangerouslySetInnerHTML={sanitizedContent}/>
        </div>
    )
}

export default ArticleDetails;