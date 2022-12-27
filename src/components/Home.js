import image from '../assets/1.png';
import CaseStudy from './CaseStudy';
import Founder from './Founder';
import JoinQuencil from './JoinQuencil';
import Alumni from './Alumni';
import Detail from './Detail';
import './Home.css';
import About from './About';

const Home = () => {
    return (
        <div className='homepage'>
            <div className='background'>
                <div className="">
                    <div className='bg'></div>
                    <div className="bg1"></div>
                    <div className="bg2"></div>
                </div>
                <div className='quencil-home'>
                    <div className='image-div'><img className="home-img" src={image} alt='newImage'></img></div>
                    <div className='heading'>
                        <h1>Learn all IT Courses from IT Experts</h1>
                        <input type="button" value="Enroll Now" className='button' />
                    </div>
                </div>
            </div>
            
            <Founder></Founder>
            <CaseStudy></CaseStudy>
            <JoinQuencil></JoinQuencil>
            <Alumni></Alumni>
            <Detail></Detail>
            <About></About>
            
        </div>
    )
}
export default Home;