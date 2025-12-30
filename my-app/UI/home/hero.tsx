"use client"
import "./home.css"
import Image from "next/image"

export default function Hero(){
    return(
        <div className="flex bg-[#ba2c3d]">
            <div className="bg-hero"/>
            <div className="banner hidden md:block">
                <div className="bg-[#ffffff] absolute w-[13px] h-full left-[13px] hidden md:block"></div>
                <div className="bg-[#6e4263] absolute w-[13px] h-full left-[34px] hidden md:block"></div>
                <div className="bg-[#e8a062] absolute w-[13px] h-full left-[55px] hidden md:block"></div>
                <div className=" flex absolute w-[calc(100%-276px)] h-full left-[76px] center-box">
                    <div className="relative flex h-[345px] w-[500px]">
                        <div className="flex flex-col font-bold text-7xl text-white justify-between text-center">
                            <p>K</p>
                            <p>O</p>
                            <p>C</p>
                            <p>H</p>
                        </div>
                        
                        <div className="hero-slide h-full ms-2 w-[440px] z-10">
                        <div className=" bg-[#ffffff] flex relative h-full w--full justify-center items-center hero-c2">
                            <div className="bg-[#729fb5] absolute w-[13px] h-full left-[13px]"></div>
                            <div className="text-[#ba2c3d] font-bold text-6xl hero-c1">United Koch<br/>Community<br/>Forum</div>
                            
                            <div className="absolute right-0 text-[#ba2c3d] font-black text-5xl hero-c1">
                                <Image 
                                 src="/arrow.svg"
                                 width={60}
                                 height={60}
                                 alt="<-"
                                 className="rotate-[-180deg]"
                                 />
                            </div>
                        </div>
                        </div>
                        <div className="text-white absolute text-[1.09rem] left-[100px] h-full w-[300px] overflow-hidden z-0">The Koch or Koch-Rajbongshi is an ethnic group of Assam, North Bengal and Meghalaya in India. Also prominent in Rangpur,
                             Mymensingh, Sylhet states of Bangladesh, Nepal and Bhutan.
                             The  community traditionally consists of nine matrilineal and strictly exogamous clans,
                             with some of them preserving a  language called Koch,
                             whereas rest have switched to local varieties of Indo-Aryan languages such as Kamtapuri, Rangpuri, Assamese, Hajong.
                        </div>
                        
                    </div>
                </div>
                <div className="bg-[#f5ff3a] md:none absolute w-50 h-full right-0 hidden md:block">
                    <div>
                        <div className="bg-[#03a36a] absolute w-[13px] h-full right-[13px]"></div>
                        <div className="bg-[#f3b542] absolute w-[13px] h-full right-[34px]"></div>
                        <div className="bg-[#77d161] absolute w-[13px] h-full right-[55px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}