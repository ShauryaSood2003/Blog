import Logo from "./Logo";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from "react-router-dom";

const PublishNavbar=()=>{
    const navigate=useNavigate();
    return(
        <div className="flex my-8 mx-5 md:mx-[10%] flex-col md:justify-between md:flex-row">
            <Logo></Logo>
            <div className="flex space-x-4 mt-5 md:mt-0">
                <button onClick={()=>{navigate("/publish")}} className="bg-green-600 rounded-3xl px-5 text-xl h-12 mt-2 text-white font-semibold">Publish</button>
                <MoreHorizIcon style={{fontSize:40,marginTop:"8px",color:"#4a4947"}}/>
                <NotificationsNoneOutlinedIcon style={{fontSize:40,marginTop:"8px",color:"#4a4947"}}/>
                <p className=" rounded-full bg-slate-400 p-3 text-2xl h-14 w-14 flex justify-center items-center font-bold">H</p>
            </div>
        </div>
    )
}
export default PublishNavbar;