import { useNavigate } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import MainCard from "../components/card/MainCard";
import { mainCard } from "../config";
import Footer from "../components/Footer";

const Main=()=>{
    const navigate=useNavigate();
    return(
        <div className="bg-pink-100">
            <div className="mx-5 md:mx-[10%]  space-y-10 mb-10">
                <div className="flex  space-y-5 justify-between pt-5 md:pt-10">
                    <h1 className="font-bold text-3xl mt-6">Blogs.CoM</h1>
                    {
                        !localStorage.getItem("token")?
                        <button onClick={()=>{navigate("/signup")}} type="button" className="p-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
                        :
                        <button onClick={()=>{navigate("/blogs")}} type="button" className="p-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Blogs</button>
                    }
                </div>
                <hr className="h-1 bg-black"></hr>
                <Carousel></Carousel>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                    {
                        mainCard.map((card)=><MainCard url={card.url} title={card.title} line={card.line}></MainCard>)
                    }
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Main;