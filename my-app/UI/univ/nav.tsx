import { styleText } from "util"
import "./unv.css"
import Link from "next/link"
export default function Nav(){
        const tabStyle = "bg-[var(--color-pri)] h-[28px] p-2 w-max rounded-[5px] flex items-center text-amber-50 font-black align-middle"
    return (
        <nav className="h-[80px] w-full  bg-[var(--color-pri)]">
                <div className="h-[45px]">
                        <h1 className="font-black mx-3 text-amber-50 text-4xl">Kocho</h1>
                </div>
                <div className="w-full h-[35px] ps-8 flex items-center gap-1.5 bg-red-500">
                        <div className={tabStyle + " active"}>
                                <p>HOME</p>
                        </div>
                        <a href="#contact">
                                <div className={tabStyle + " inactive"}>
                                        <p>CONTACT</p>
                                </div>
                        </a>
                </div>
        </nav>)
}