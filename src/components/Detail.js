import './Detail.css';

const Detail = () => {
    return (
        <div className='text-box'>
            <div className='detail-main'>
                <div className='detail-heading-para'>
                    <h1 className='detail-heading'>Detailed Placements Drive Analysis</h1>
                    <br></br>
                    <p className='text'>
                        Quencil has created a strong network of prestigious Corporate Clients. A commitment to filling
                        colours into our Trainees' ambitions and aspirations by persistently preparing them for fast-
                        changing future skills and future workplaces is at the heart of our Placements team's DNA.
                        Our corporate clientele includes top MNCs, mid-sized organisations, and IT start-up initiatives,
                        and spans both service and product-based businesses. Our prestigious clients hire throughout
                        the year to meet their project-specific skilled fresher requirements. We exclusively work with
                        technical job roles and do not work with Tech-Support/KPO/BPO sorts of jobs
                    </p>
                    <input type="button" value="LEARN MORE" className='white-button' />
                </div>
                <div className='blank'></div>
            </div>
        </div>
    )
};

export default Detail;