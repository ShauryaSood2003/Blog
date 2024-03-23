import axios from "axios";
import BlogDate from "../components/blog/BlogDate";
import BlogHeading from "../components/blog/BlogHeading";
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useState } from "react";
import { BackendUrl } from "../config";
import { useParams  } from "react-router-dom";
import Loader from "../components/Loader";
import NavBar from "../components/NabBar";


const Blog=()=>{
    const [object,setObject]=useState({
        author:{ 
            name: "",
            aboutMe:""
        },
        content: "",
        createdAt:"",
        published: false,
        title: ""
    });
    const [loader,setLoading]=useState(true);

    const {id}=useParams();

    useEffect(()=>{
        try{
            async function callMe(){
             
                const res=await axios({
                    url:`${BackendUrl}/api/v1/blog/${id}`,
                    method:"GET",
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    }
                });
                console.log(res.data);
                setObject(res.data);
                setLoading(false);
            }
            callMe();
        }catch(e){
            alert("Failed to get blog try again!");
        }
    },[]);
    return(
        <>
        {
            loader?
            <div className="m-[10%]">
                <Loader></Loader>
            </div>
            :
            <div className="m-[10%] mt-0 space-y-8 md:space-y-16">
                    <NavBar to="/blogs"></NavBar>
                    <hr></hr>
                <div className="grid  md:grid-cols-5">
                    <div className="md:col-span-4  m-[7%] mt-5">
                        <BlogHeading text={object.title}></BlogHeading>
                        <div>
                            <BlogDate text={"Created Date: "+(object.createdAt+"").slice(0,10)}></BlogDate>
                            <BlogDate text={"Created Time: "+(object.createdAt+"").slice(11,19)}></BlogDate>
                        </div>
                        <p className="text-xl leading-relaxed text-slate-700">{object.content}</p>
                    </div>
                    <div className="md:col-span-1 mx-8 md:mt-[40%] sm:mx-0">
                        <h1 className="text-md md:text-xl font-bold text-slate-800">Author</h1>
                        <div className="flex sm:ml-2 mt-5 ">
                            <CircleIcon style={{color:"#c9b1af",fontSize:50}}></CircleIcon>
                            <div className="ml-2">
                                <p className="text-2xl md:text-3xl">{object.author.name}</p>
                                <p className="text-lg text-slate-500 w-[100%]">{object.author.aboutMe ||"I love to add new Blog daily. As i am free all the time"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
        
    );
    
}
export default Blog;