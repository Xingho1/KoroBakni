import Hero from "./hero"
import WordOfDay from "./wordOfDay"
import LatestPost from "./latest"
import Contact from "./contact"
export default function Main(){
    return(
        <main>
            <Hero/>
            <WordOfDay/>
            <LatestPost/>
            <Contact/>
        </main>
    )
}