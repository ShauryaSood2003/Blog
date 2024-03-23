import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';

const Footer=()=>{
    return(
        <div className="flex flex-col justify-center items-center space-y-6 p-10 bg-red-200">
            <div className='flex justify-center items-center space-x-5'>
                <a href="https://www.linkedin.com/in/shaurya-sood-87b968208/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={{fontSize: 30}} />
                </a>
                <a href="https://twitter.com/ShauyaSood" target="_blank" rel="noopener noreferrer">
                    <XIcon style={{fontSize:30}}/>
                </a>
                <a href="mailto:shauryasood293@gmail.com">
                    <EmailIcon style={{fontSize:30}}/>
                </a>
                <a href="https://shauryasportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Person3OutlinedIcon style={{fontSize:30}}/>
                </a>
            </div>
            <h1 className="text-md font-semibold text-slate-800">Copyrigth ©️ by Shaurya Sood</h1>
        </div>
    )
}
export default Footer;