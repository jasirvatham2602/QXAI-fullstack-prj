// import AIPage from "./AIPage";
import { useState } from "react";
function Home() {
    const [image, setImage] = useState(null); 
    const [preview, setPreview] = useState(null); 
    const [file, setFile] = useState(null); 
    const [res, setRes] = useState(null); 
    const [saliencyMapsPath, setSaliencyMapsPath] = useState(null); 
    const [isChecked, setIsChecked] = useState(false); 
    // const onImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         setImage(event.target.files[0]);
    //         setPreview(URL.createObjectURL(event.target.files[0]))
    //     }
    //     console.log(image);
    //     console.log(preview);
    // }
    let previewImage = (event) => {
        let reader = new FileReader(); 
        let file = event.target.files[0]; 
        let imageBase64; 
        if (!file) {
            setFile(null);
            setPreview(null); 
            return;
        }
        reader.onload = () => {
            document.getElementById("preview").src = reader.result
            console.log(reader.result);
            imageBase64 = reader.result; 
        }; 
        reader.readAsDataURL(event.target.files[0]);
        setFile(file); 
        setPreview(URL.createObjectURL(file)); 
        console.log("file");
        console.log(file);
        console.log("preview");
        console.log(preview);
    } 
    let handleSubmit = async (event) => {
        event.preventDefault();  
        if (!isChecked) {
            alert('Please agree to the Terms and Conditions');
            return; 
        }
        if (!file) {
            alert("Please upload an image"); 
            return; 
        }
        const formData = new FormData(); 
        formData.append('image', file);
        // formData.append('link', preview);
        // console.log(formData); 

        const res = await fetch("https://jasirvatham2602-qxai-backend-hugging-face.hf.space/predict", {
            method: 'POST',
            body: formData, 
        }); 
        const data = await res.json(); 
        console.log('data');
        console.log(data);
        setRes(data); 
        // upload data to backend here 
    };
    return (
            <>
            <div className="container" style={{display: 'block',width: 'fit-content', boxSizing: 'border-box'}}>
                <form onSubmit={handleSubmit} style={{display: 'block', maxWidth:'400px', marginLeft:'auto', marginRight:'auto',width: 'fit-content', boxSizing: 'border-box'}}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">XAI and QXAI detection</label>
                    </div> 
                    <div className="form-group form-check" style={{maxWidth: '200'}}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => setIsChecked(e.target.value) }/>
                        <label className="form-check-label" htmlFor="exampleCheck1" style={{maxWidth: '200', overflowWrap: 'break-word', display: 'inline-block', width: '200'}}>I understand that models' ouptuts may be accurate and should not be used for clinical decision-making without assistance of a trained neurologist</label>
                    </div>
                    <img id='preview' width="200" src="" alt="" /> <br />
                    <input type="file" onChange={previewImage}/>
                    <button type= "submit" className="btn btn-primary">Upload</button>
                </form>
                <br />
                    {res && (
                    <pre>{JSON.stringify(res, null, 2)}</pre>
                        )}
                <br />
                <div className='SaliencyMaps' style={{display: 'block'}}>
                        <img src={res == null ? "" : res.saliency_map_url} style={{width: 1000, display: 'block'}} alt="" />
                </div>
            </div>
        </>
    );
}
export default Home;