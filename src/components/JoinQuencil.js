import './JoinQuencil.css';
import img from '../assets/7.png'


const JoinQuencil = () => {
    return (
        <div className='join-details'>
            <div className='details'>
                <h1 className='join-text-heading'>Why should you join Quencil?</h1>
                <p className='join-text'>No Matter What It Takes! We Will Empower You If You Have The Confidence And Willingness To Study Coding.
                    <br></br>
                    <br></br>
                    IIT And Stanford Alumni Created The Content.
                    <br></br>
                    Instant 1:1 Resolution Of Doubts
                    <br></br>
                    <br></br>
                    Each Course Includes 100+ Problems And 10+ Projects For Hands-On Learning.
                </p>
            </div>
            <div className='img'>
                <img className='join-img' src={img} alt="newImg" width={700} />
            </div>
        </div>
    )
}
export default JoinQuencil;