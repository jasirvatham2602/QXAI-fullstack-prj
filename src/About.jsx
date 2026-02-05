import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

function About() {
    let [content, setContent] = useState(null); 

    useEffect(() => {
        fetch("/README.md").then(res => res.text()).then(text => setContent(text))
    }, []);
    return (
        <>
            <h1>About</h1>  
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={rehypeKatex} skipHtml={false}
            components={{math: ({value}) => <span>{value}</span>}}
            > 
                {content}
            </ReactMarkdown>
        </>
    );
}
export default About; 