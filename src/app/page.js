import Header from "@/myComponents/ui/Header/Header"
import Features from "@/myComponents/sections/Features/Features";
import Testimonials from "@/myComponents/sections/Testimonials/Testimonials";
import Bottom from "@/myComponents/sections/Bottom/Bottom";
import Footer from "@/myComponents/ui/Footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Testimonials />
      <Bottom />
      <Footer />
    </>
  );
}
