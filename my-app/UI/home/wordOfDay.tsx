import "./home.css"
import {sec} from "@/UI/univ/font"

export default function WordOfDay(){
    const word = {
        word:"Rang-Krang",
        pronunciation:"ɾɑŋ-kɾɑŋ",
        type:"Noun",
        meaning:[`Sky
            Example: “Tini Rang-Kranga hinchachak dongjok.”
            Assamese: “Aji akax halodhiya hoise”
            English: “Today the sky has turned yellow”`,
            `Heaven
            Example: “Nang jeghenek rang-krangenin pori”
            Assamese: “Tumi jen sworgore pori.”
            English: “You like an angel from heaven.”
`]   }

    return(
        <div className="flex flex-col w-full py-8 h-max border-b-[4px] border-[var(--color-pri)] justify-center items-center">
           <h1 className={`text-[var(--color-pri)] text-center text-4xl underline ${sec.className} w-[300px] md:w-[500px]`}>Word of The Day</h1>
           <div className="grid grid-cols-[1fr_4px_1fr] pt-2 justify-center w-[200px] md:w-[700px] h-max min-h-[100px]">
                <div className="pe-2 text-right">
                    <p className="font-bold text-2xl">{word.word}</p>
                    <p className="text-gray-800">/{word.pronunciation}/</p>
                    <p className="font-bold">.{word.type}</p>
                </div>
                <div className="bg-[var(--color-pri)] "></div>
                <div className="ps-2 ml-4">
                    <ol className="list-decimal">
                    {word.meaning.map(i=><li key={word.meaning.indexOf(i)}>{i}</li>)}
                    </ol>
                </div>
           </div>
        </div>
    )};