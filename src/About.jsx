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
            <p>
                This project aims to create a easy-to-use UI interface for neurologists to use and test the QXAI and XAI models. The MRI scan should be a T1-weighted MRI scan in the axial view of the brain for proper classification of AD and CONTROL and must be T2-weighted MRI scan in axial view for proper PD diagnosis. The code to train the model produces different performance due to not having a specified seed during the stratified sampling of the dataset into train, test, and validation data; one result of the model can be seen on <a href="https://github.com/jasirvatham2602/QXAI-prj" target='_blank'>QXAI-prj Github Link</a>. Since these models weren't saved, the models had to be retrained and may have slightly different performance. The code for the fullstack website can be seen on <a href="https://github.com/jasirvatham2602/QXAI-fullstack-prj">QXAI-fullstack-prj Github Link</a>. The diagnosis of the QXAI and XAI models may be incorrect; therefore, the sole use of this site in diagnosis of a patient for a neurological disorder is not recommended, as it risks the persons life. Neurologists should only use this site and other AI tools as an aid, and should make the final diagnosis. Overall, this project helps create trust between both Quantum and Classical AI models in healthcare and improves usability of AI in healthcare.
            
            </p>
            <p>
                   In the future, T1-weighted MRI scans of PD can be added to the dataset, so the input MRI scan can be T1-weighted for proper diagnosis of AD, PD, and CONTROL. Furtheremore, a seed should be chosen to ensure reproducibility it the performance of the model and a larger training and test dataset could lead increased performace of these models. 
            </p>
            <p>
                   The use of Quantum and Classical Saliency Maps help improves interpretability of the AI models; neurologists can see why each model produces a certain diagnosis, helping them determine whether to trust the model or not. The UI interface not only allows other researchers to test the AI models, but also helps bring AI into healthcare facilities, with the goal to provide both fast and accurate diagnoses. 
            </p>
            {/* <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={rehypeKatex} skipHtml={false}
            components={{math: ({value}) => <span>{value}</span>}}
            > 
                {content}
            </ReactMarkdown> */}
        </>
    );
}
export default About; 