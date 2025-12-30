import {sec} from "@/UI/univ/font"

export default function Foooter(color:string){
    return(
        <div className="w-full h-max flex justify-center items-center bg-[var(--color-sec)]">
            <p className={`font-bold my-2 text-[0.8rem] ${sec.className} text-[var(--color-pri)]`}>©JonakThakuria</p>
        </div>
    )
}