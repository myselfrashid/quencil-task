import './Founder.css';

const Founder = () => {
    return (
        <div className='founder'>
            <div className='founder-box'>
                <div className='founder-text'>
                    <h1 className='founder-heading'>Meet our Founder</h1>
                    <p className='founder-para'>
                        Our Founder Mr. Kunal Sharma has designed and delivered the Quencil Java Full Stack Developer (JFSD)
                        course, which is a 1000+ hour comprehensive, intensive, immersive, Edutainment based 360° Skills
                        program and is a full one-stop solution to pursue your IT professional goals.
                        <br></br>
                        <br></br>
                        The Quencil JFSD Program is structured as a hands-on case study and real-time project-based learning
                        approach that will enable every trained aspirant to improve their analytical and problem-solving skills by
                        structuring, designing, coding, testing, and deploying end-to-end Full Stack software solutions to real-
                        time scenarios using Modeling and DevOps concepts.
                    </p>
                    <input type="button" value="LEARN MORE" className='white-button' />
                </div>
                <div className='founder-box1'></div>
            </div>
        </div>
    )
};

export default Founder;