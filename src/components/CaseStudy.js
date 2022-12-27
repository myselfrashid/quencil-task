import './CaseStudy.css';
import img1 from '../assets/2.jpg';
import img2 from '../assets/3.jpg';
import img3 from '../assets/4.jpg';
import img4 from '../assets/5.jpg';
import img5 from '../assets/6.jpg';

const CaseStudy = () => {
    return (
        <div className='case-main'>
            <div>
                <h1 className='main-text'>Case Studies and Projects</h1>
                <br/>
                <p className='main-text-para'>Solution to real-time scenarios on both client side & server side.</p>
            </div>
            <div className='casestudy-details'>
                <div className='cs-detail1'>
                    <div className='detail-img'>
                        <img className='myimg' src={img1} alt='img1' width={150}></img>
                        <h3>PLANNING</h3>
                        <p className="para">Understanding The Problem Statement.
                            <br></br>Ask WHO, WHAT, WHEN, WHERE, WHY?
                            <br></br>Create Clear Business Objective Statement
                        </p>
                    </div>
                    <div className='detail-img'>
                        <img className='myimg' src={img2} alt='img2' width={150}></img>
                        <h3>REQUIREMENT ANALYSIS</h3>
                        <p className="para">Identify User-Story Elaborations<br/>Identify Scope & Scope-Creep<br/>Identify Functional & Non-Functional Requirements</p>
                    </div>
                    <div className='detail-img'>
                        <img className='myimg' src={img3} alt='img3' width={150}></img>
                        <h3>DESIGN 7 MODELING</h3>
                        <p className="para">Use-Case Diagrams<br></br>Activity Diagrams<br></br>Class Diagrams<br></br>Sequence Diagrams</p>
                    </div>
                </div>
                <div className='cs-detail2'>
                    <div className='detail-img'>
                        <img className='myimg' src={img4} alt='img4' width={150}></img>
                        <h3>CODING & UNIT TESTING</h3>
                        <p className="para">Develop UI/UX Using Frontend Technologies
                            <br></br>Code Business Logic Using Backend Technologies
                            <br></br>Store & Retire Data using Database Technologies
                        </p>
                    </div>
                    <div className='detail-img'>
                        <img className='myimg' src={img5} alt='img5' width={150}></img>
                        <h3>INTEGRATION & DEPLOYMENT</h3>
                        <p className="para">Build
                            <br></br>Test
                            <br></br>Package
                            <br></br>Deploy
                            <br></br>Release Java Full-Stack
                            <br></br>Product
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CaseStudy;