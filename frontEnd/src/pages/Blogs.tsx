import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { BackendUrl } from "../config";
import Loader from "../components/Loader";
import NavBar from "../components/NabBar";


interface BlogsInterface {
    author: {
        name: string
    },
    content: string,
    createdAt: Date,
    id: string,
    link:string,
    published: boolean,
    title: string,
}
const Blogs=()=>{
    const [blogs,setBlogs]=useState<BlogsInterface[]>([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        async function callme() {
            try{
                const res=await axios({
                    url:`${BackendUrl}/api/v1/blog/all/bulk`,
                    method:"GET",
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    }
                })
                console.log(res.data);
                setBlogs(res.data);
                setLoading(false);
            }catch(e:any){
               alert("Failed to get Blogs try again!")
            }
        }
        callme()
    },[])

    return(
        <div>
            {
                loading?
                <div className="m-[10%]">
                    <Loader></Loader>
                </div>
                :
                <div className="m-[10%] mt-0 space-y-8 md:space-y-16">
                    <NavBar to="/"></NavBar>
                    <hr></hr>
                    {
                        blogs.map((blog)=><Card key={blog.id} id={blog.id} title={blog.title} content={blog.content} name={blog.author.name} link={blog.link} createdAt={blog.createdAt}></Card>)
                    }
                </div>
            }
        </div>
    )
}
export default Blogs;