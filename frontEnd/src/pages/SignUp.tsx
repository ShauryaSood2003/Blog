import { useState } from "react";
import InputBox from "../components/InputBox";
import SignButton from "../components/sign/SignButton";
import SignHeading from "../components/sign/SignHeading";
import SignSubHeader from "../components/sign/SignSubHeader";
import SignText from "../components/sign/SignText";
import axios from "axios";
import {typeSignUpSchema} from "blog-tester";
import { useNavigate } from "react-router-dom";
import { BackendUrl } from "../config";

const SignUp=()=>{
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const navivgate=useNavigate();
    async function handelClick(){
        try{
            const data:typeSignUpSchema={
                email,
                name,
                password
            }
            const res=await axios({
                url:`${BackendUrl}/api/v1/user/signup`,
                method:"POST",
                data,
            })
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("name",res.data.name);
            navivgate("/blogs");
        }catch(e){
            console.log(e);
            alert("Failed to Sign Up try again!")
            navivgate("/signup")
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
                            text="Create an Account"
                        ></SignHeading>
                        <SignSubHeader 
                            to="/signin" 
                            text="Already have an account?"
                            value="Login"
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
                        type="text" 
                        label="UserName" 
                        placeholder="John Doe" 
                        autoFocus={false}
                        setFunction={setName}
                    ></InputBox>
                    <InputBox 
                        type="password" 
                        label="Password" 
                        placeholder="******" 
                        autoFocus={false}
                        setFunction={setPassword}
                    ></InputBox>
                    <SignButton onClick={handelClick} text="Sign Up"></SignButton>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen px-5  bg-grey-900">
                <div className="w-[80%]">
                    <SignText
                        para="Embrace the unknown, for within it lies the potential for growth and discovery. Each step forward is a chance to unveil new horizons and embrace the beauty of uncertainty."
                        author=" - Theodore Roosevelt"
                        postion="CEO Blog-Panda"
                    ></SignText>
                </div>
            </div>
        </div>
    )
}
export default SignUp;