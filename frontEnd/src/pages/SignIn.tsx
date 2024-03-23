import { useState } from "react";
import InputBox from "../components/InputBox";
import SignButton from "../components/sign/SignButton";
import SignHeading from "../components/sign/SignHeading";
import SignSubHeader from "../components/sign/SignSubHeader";
import SignText from "../components/sign/SignText";
import { typeSignInSchema } from "blog-tester";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BackendUrl } from "../config";

const SignIn=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    async function handleClick(){
        try{
            const data:typeSignInSchema={
                email,
                password
            }
            const res=await axios({
                url:`${BackendUrl}/api/v1/user/signin`,
                method:"POST",
                data
            })
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("name",res.data.name);
            navigate("/blogs");
        }catch(e){
            console.log(e);
            alert("Failed to SignIn try again");
            navigate("/signup");
        }
        
    }
    return(
        <div className="grid md:grid-cols-2">
            <div className="flex justify-center items-center h-screen">
                <div className="md:w-[65%]">
                    <div 
                        className="flex justify-center items-center flex-col my-5"
                    >
                        <SignHeading 
                            text="Login to your Account"
                        ></SignHeading>
                        <SignSubHeader 
                            to="/signup" 
                            text="Don't have an account?"
                            value="Signup"
                        ></SignSubHeader>
                    </div>
                    <InputBox 
                        type="text" 
                        label="Email" 
                        placeholder="xyz@gmail.com" 
                        autoFocus={true}
                        setFunction={setEmail}
                    ></InputBox>
                    <InputBox 
                        type="password" 
                        label="Password" 
                        placeholder="******" 
                        autoFocus={false}
                        setFunction={setPassword}
                    ></InputBox>
                    <SignButton onClick={handleClick} text="Sign In"></SignButton>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen px-5  bg-grey-900">
                <div className="w-[80%]">
                    <SignText
                        para="Success is liking yourself, liking what you do, and liking how you do it. You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it."
                        author=" - Mayo Angeloui"
                        postion="CFO Blog-Panda"
                    ></SignText>
                </div>
            </div>
        </div>
    )
}
export default SignIn;