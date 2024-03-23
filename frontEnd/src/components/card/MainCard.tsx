const MainCard=({url,title,line}:{url:string,title:string,line:string})=>{
    return(
        <div className=" bg-[url('https://t3.ftcdn.net/jpg/05/09/85/40/360_F_509854035_W21rTwRsVVAgNq9djRvaqiUSciX1px8K.jpg')] p-2 rounded-md ">
            <img className="w-[100%] h-40 md:h-52 rounded-md text-white " src={url}></img>
            <h1 className="text-2xl font-bold text-white  p-1">{title}</h1>
            <p className="text-lg text-slate-400 font-semibold p-1">{line}</p>
        </div>
    )
}
export default MainCard;