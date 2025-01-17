import CarouselNavigation from "@/components/common/CarouselNavigation";
import MainNavbar from "@/components/common/MainNavbar"


export default function Home() {
  return (
    <div style= {{
      height: "5000px"
    }}>
      <MainNavbar />
      <div style={{
        marginTop: "48px"
      }}>
        <CarouselNavigation />
        <h1>Hello</h1>
        
      </div>
      
    </div>
  );
}
