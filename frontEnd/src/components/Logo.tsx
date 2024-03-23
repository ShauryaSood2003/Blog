import { useNavigate } from "react-router-dom";

const Logo=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex">
            <img 
                src="https://img.freepik.com/premium-photo/panda-astronaut-space-suit-floating-front-moon-generative-ai_958192-28776.jpg"
                className="rounded-full w-16"
            ></img>
            <p
                className="text-2xl mt-4 ml-6 font-bold text-slate-800"
                onClick={()=>{navigate('/blogs')}}
            >Draft in Panda</p>
        </div>
    )
}
export default Logo;