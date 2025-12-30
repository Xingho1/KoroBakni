import {sec} from "@/UI/univ/font"
import Image from "next/image"
import Link from 'next/link';


export default function LatestPost(){
    const post = [
        {   "id":1,
            "img":"/hero.jpeg",
            "link":"/blog",
            "title":"Koch Alphabet",
            "description":`
            Koch Language has been an oral language for most part of the past, which was eventually written using Kamrupi and then the Assamese script. In modern times it is written using either the Assamese script or the Latin Based Script Designed`,
            "Date":"Date: 27 December, 2025"},
        {   "id":2,
            "img":"/hero.jpeg",
            "link":"/blog",
            "title":"Koch Alphabet",
            "description":`
            Koch Language has been an oral language for most part of the past, which was eventually written using Kamrupi and then the Assamese script. In modern times it is written using either the Assamese script or the Latin Based Script Designed`,
            "Date":"Date: 27 December, 2025"},
        {   "id":3,
            "img":"/hero.jpeg",
            "link":"/blog",
            "title":"Koch Alphabet",
            "description":`
            Koch Language has been an oral language for most part of the past, which was eventually written using Kamrupi and then the Assamese script. In modern times it is written using either the Assamese script or the Latin Based Script Designed`,
            "Date":"Date: 27 December, 2025"},
        ]
    return(
        <div className="w-full min-h-[500px] h-max flex flex-col pt-8 items-center bg-linear-to-b from-[var(--color-sec)] to-amber-50">
            <h1 className={`text-[var(--color-pri)] text-center text-4xl underline ${sec.className} w-[300px] md:w-[500px]`}>Latest Post</h1>
            <div className="w-full h-max flex gap-4">
                <div className="w-full min-h-4 my-8 h-max flex flex-wrap justify-evenly">
                    {post.map((post)=>{
                            return(
                                <Link
                                    key={post.id}
                                    href={post.link}
                                >
                                <div className="relative w-[300px] h-[400px] my-4 bg-amber-50 p-[5px] flex flex-col rounded-[10px] border-4 border-[var(--color-pri)] shadow-lg/70 shadow-red-950 hover:brightness-95">
                                    <div className="absolute w-full left-0 top-0 h-[210px] inline-block rumbaw-shadow"></div>
                                    <Image
                                    src={post.img}
                                    width="200"
                                    height="200"
                                    alt="post1"
                                    className="w-full h-[200px] "
                                    ></Image>
                                    <div className="mt-4">
                                        <h1 className="font-bold">{post.title}</h1>
                                        <hr className="border-2"/>
                                        <div className="text-[0.8rem]">
                                            {post.description}...
                                        </div>
                                        <pre className="font-light text-[0.7rem] text-right">{post.Date}</pre>
                                    </div>
                                </div>
                                </Link>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}