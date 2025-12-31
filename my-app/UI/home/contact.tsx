import {sec} from "@/UI/univ/font"
export default function Contact(){
    return(
        <div id="contact" className=" relative w-full min-h-[300px] h-max flex flex-col pt-8 items-center bg-linear-to-b to-[var(--color-pri)] from-amber-50">
            <div className="absolute w-full min-h-[100px] bottom-0 ">
                <h1 className={`text-amber-950 text-left pl-8 text-4xl ${sec.className} w-[300px] md:w-[500px]`}>CONTACTS</h1>
                <hr className="border-2 border-amber-950" />
                <div className="text-2xl text-amber-950 pb-[100px] pl-3">
                    <p>Email: <a href="mailto:jonakthakuria.koch@kocho.in" className="text-blue-800">jonakthakuria.koch@kocho.in</a></p>
                    <p>Instagram: <a href="https://www.instagram.com/korobakni?igsh=MTh2Zm9kOGF1OWU4bA==" className="text-blue-800">@korobakni</a></p>
                    <p>Koch Thorom Heng Tong!!!</p>
                </div>
            </div>
        </div>
    );
}