import { useMemo } from 'react';
import DOMPurify from 'dompurify';

const ArticleDetails = ({content} : {content: string}) => {
    const sanitizedContent = useMemo(() => ({
        __html: DOMPurify.sanitize(content)
      }), [content]);
    return (
        <div className='font-sans'>
            <p className="text-gray-500 text-center md:text-start" dangerouslySetInnerHTML={sanitizedContent}/>
        </div>
    )
}

export default ArticleDetails;