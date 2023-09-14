import React, { useEffect, useRef, useState } from 'react'
import './style.css'
// import imag1 from '../assests/istockphoto-1329031407-170667a.jpg'
import Axios  from 'axios';

function Home() {
  const [imagesdetails, setImageDetails] = useState([]);
  const [inputtitle, setInputTitle] = useState("")
  const [inputdesc, setInputDesc] = useState("")
  useEffect(()=>{
     Axios.get("http://localhost:4000/pullimage").then((res)=>{
      console.log(res)
       setImageDetails(res.data);
       console.log(imagesdetails.current)
     }).catch((error)=>{
       console.log(error)
     })
  },[]) 

  

  const showimage = (e)=>{
    if(!document.getElementsByClassName('dn')[0].classList.contains('posting'))
  {
    document.getElementsByClassName('dn')[0].classList.add('posting')
  }
    if(e.target.files&&e.target.files[0])
    {
      let imge = e.target.files[0];
      let reader = new FileReader();
      const imgtag = document.getElementById("demo")
      reader.onload = function(e){
        imgtag.src = e.target.result
      }
     reader.readAsDataURL(imge)
      
    }
    document.getElementsByClassName('img-upload')[0].style.filter = "opacity(10%)";
    document.getElementsByClassName('template')[0].style.filter = "opacity(10%)";
    document.getElementsByClassName('dn')[0].style.filter = "opacity(100%)";
  }

  const sendimagedata = (res)=>{
   
    const obj = {
      imageuri : res.data.url,
      likes : 0,
      view : 0,
      name : inputtitle,
      desc : inputdesc
    }
    Axios.post("http://localhost:4000/sendimage",obj).then((res)=>{
      console.log(res)
      
    }).catch((error) => {
      console.log(error);
    });
  }

  const  [uploadFile, setUploadFIle] = useState("")
  
 const posting_image = (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file", uploadFile);
        formdata.append("upload_preset", "kivhdhgb");
  
        Axios.post("https://api.cloudinary.com/v1_1/dlmyu9wac/image/upload",
        formdata).then((res)=>{
          sendimagedata(res)
        }).catch((error) => {
          console.log(error);
        });

        document.getElementsByClassName('dn')[0].classList.remove('posting')
        document.getElementsByClassName('template')[0].style.filter = "opacity(100%)";
        document.getElementsByClassName('img-upload')[0].style.filter = "opacity(100%)";

        
 }

  const parentdiv = (e)=>{
    if(document.getElementsByClassName('dn')[0].classList.contains('posting'))
       {
         
          
          
           document.getElementsByClassName('dn')[0].classList.remove('posting')
           document.getElementsByClassName('template')[0].style.filter = "opacity(100%)";
           document.getElementsByClassName('img-upload')[0].style.filter = "opacity(100%)";
   
           setUploadFIle("")
        }
      
  }
   const showdesc = (i)=>{
        
    if(!document.getElementsByClassName('description')[i].classList.contains('normal'))
    {
  
      document.getElementsByClassName('descr')[i].classList.remove('dn')
      document.getElementsByClassName('imge')[i].style.filter = "brightness(20%)"
    }
        
   }

   const removedesc = (i)=>{
    if(!document.getElementsByClassName('description')[i].classList.contains('normal'))
    {
      document.getElementsByClassName('descr')[i].classList.add('dn')
      document.getElementsByClassName('imge')[i].style.filter = "brightness(80%)"
    }
   
   }
 

  const childdiv = (e)=>{
  
      
    e.stopPropagation()
     }

     const changedesc = (i)=>{
      if(!document.getElementsByClassName('description')[i].classList.contains('normal'))
      {
        document.getElementsByClassName('description')[i].classList.add('normal');
        document.getElementsByClassName('descr')[i].innerText = "remove desc"
      }
   else{
    document.getElementsByClassName('description')[i].classList.remove('normal');
    document.getElementsByClassName('descr')[i].innerText = "show desc"
   }
      
     }
   
  
  return (
    <div style={{display : "flex", width : "100%", alignItems : 'flex-start'}}>
    <div onClick={(e)=>parentdiv(e)} className='home-m'>
      <div className='img-upload'>
        <div className='bgi'>
        <label><i className='fa fa-user'></i>My Profile</label>
        <label ><i className='fa fa-search'></i>Search Others</label>
          <input onChange={(e)=>{setUploadFIle(e.target.files[0]);showimage(e)}} type='file' accept="image/*" id='img' style={{display:"none"}}></input>
          <label for='img' ><i className='fa fa-upload'></i>Upload Image</label>
         
        </div>
        </div>
       
        <div style={{position:"fixed", top : "3rem"}} onClick={(e)=>childdiv(e)} className='dn'>
          <img id='demo' style={{height : "270px"}} alt='' />
          <input id='title' value={inputtitle} onChange={(e)=>setInputTitle(e.target.value)} style={{width : "100%", height : "40px", borderRadius : "20px",marginTop : "2rem", marginBottom : "2rem", backgroundColor : "black", border : "2px solid white", color:'white'}} type='text' name='name' placeholder='Enter Title' />
          <textarea  value={inputdesc} onChange={(e)=>setInputDesc(e.target.value)} placeholder='Write descripton' style={{width : "100%", height : "100px", maxHeight : "100px", marginBottom:"2rem",  minHeight : "100px", backgroundColor : "black", border : "2px solid white", color : "white"}}></textarea>
          <button onClick={(e)=>posting_image(e)} style={{height : "40px", width : "100%", fontSize : "1rem",backgroundColor: "aqua",
backgroundImage: "linear-gradient(315deg, aqua 0%, #000000 74%)", border : "none", color : "white"}}>Post</button>
        </div>
        
    </div>
    <div onClick={(e)=>parentdiv(e)} className='template'>

      {
        imagesdetails.map((element,i) => 
           (
            <div className='user-images' key={i}>
              <div className='image-details-d'>
                <div className='image-rover' onMouseOver={()=>showdesc(i)}  onMouseOut={()=>removedesc(i)}>
              <img   className='imge' src={element.imageuri} alt = "im1"></img>
              <div onClick={()=>changedesc(i)}  className='dn descr' style={{padding : "1rem", color : "white", border : "2px solid white", borderRadius : "10px", position : "absolute", left : "100px", cursor : "pointer"}}>Show Desc</div></div>
              <div className='description'>{element.desc}</div>
              
              </div>
              <span style={{width:"300px", backgroundColor : "rgba(0, 0, 0, 0.5)", borderRadius : "10px", paddingTop : "0.3rem", paddingBottom : "0.3rem", marginTop : "0.5rem", marginBottom : "0.5rem", textAlign : "center"}}>   <i className='fa fa-thumbs-up' style={{color : "white"}}></i>  :  {element.likes}</span>
              <span><span style={{color : "white"}}>Title</span> : {element.name}</span>
              
              
              
           </div>
          )
          )
      }
     
          
        </div>
    </div>
  )
}

export default Home