import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
export default function RootLayout({ children }) {
    return (
      <>
      <Navbar/>
          {children}
      <Footer/>
      </>
    
    );
  }