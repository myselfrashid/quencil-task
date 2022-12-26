import image from '../assets/1.png';
import './Home.css';

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
                    <div><img className="home-img" src={image} alt='newImage'></img></div>
                    <div className='heading'>
                        <h1>Learn all IT Courses from IT Experts</h1>
                        <input type="button" value="Enroll Now" className='button' />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home;