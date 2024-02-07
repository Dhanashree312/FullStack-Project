export const Imagegenerator=({label,setAttribute}) =>{
    return (
      <div className="label-input-pair">
          <label className="label">Label</label>
          <input className="main-input" onChange={(e)=>setAttribute(e.target.value)}/>
      </div> 
    );
    };
  

































    
    // import React, {useRef, useState } from 'react'
// import './Imagegenerator.css';
// import poster from '../Images/image1.webp'


// const Imagegenerator = () => {
//     //   var=image_url func=setImage_url initializing usestate with /
//     const [image_url,setImage_url]=useState("/");
//     let inputRef =useRef(null);

//     const imageGenerator= async()=>{
//         if(inputRef.current.value===""){
//             return 0;
//         }
//         const response= await fetch(
//             "https://api.openai.com/v1/images/generations",
//             {
//                 method:"POST",
//                 headers:{
//                    "content-Type":"application/json",
//                    Authorization:
//                    "Bearer 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",
//                    "User-Agent":"Chrome",
//                 },
//                 body:JSON.stringify({
//                     prompt:`${inputRef.current.value}`,
//                     n:1,
//                     size:"512x512",
//                 }),
//             }
//         );
//         let data = await response.json();
//         let data_array=data.data;
//         setImage_url(data_array[0].url);
//     }

 
    // <div className='ai-img-generator'>
    //     <div className='header'>AI image <span>generator</span></div>
    //     <div className='img-loading'>
    //         <div className='image'><img src={image_url==="/"?poster:image_url} alt=''/></div>
    //     </div>
    //     <div className='search-box'>
    //     <input type='text' ref={inputRef} className='search-input' placeholder='Describe what kind of image you want'/>
    //     <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>
    //     </div>
    // </div>