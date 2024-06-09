
import Banner from './components/banner/Banner'
import Blog from './components/blogs/Blog'
import Contact from './components/contact/Contact'
import Feature from './components/features/Feature'
import Footer from './components/footer/Footer'
import FooterBottom from './components/footer/FooterBottom'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
// import Testimonial from './components/testimonial/Testimonial'


function App() {
 

  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4'>
    <div className='max-w-screen-2xl mx-auto px-16'>
    <Navbar/>
    
    <Banner/>
    <Feature/>
    <Projects/>
    <Resume/>
    <Blog/>
    <Contact/>
    <Footer/>
    <FooterBottom/>
    {/* <Testimonial/> */}
    </div>
    
    
    </div>
  )
}

export default App
