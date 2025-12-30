import Main from "@/UI/home/home"
import Nav from "@/UI/univ/nav"
import Footer from "@/UI/univ/footer"

export default function Home() {
  return (
    <div className="bg-amber-50 text-black">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}