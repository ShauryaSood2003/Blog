const ErrorHandle=({e}:{e:string})=>{
    return(
        <div className="flex justify-center items-center">
            <p className="text-3xl font-bold">{e}</p>
        </div>
    );
}
export default ErrorHandle;