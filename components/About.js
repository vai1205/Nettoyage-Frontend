const About = props => {
    const {aboutHeading, aboutSubHeading, aboutText} = props.language;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12 p-5" style={{position:"relative"}}>
                        <h2 className="primary-color heading text-center">{aboutHeading}</h2>
                        <hr className="my-4" style={{margin:"5%"}}/>
                        <h3 className="text-center subHeading">{aboutSubHeading}</h3>
                        <p className="text-center">{aboutText}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;



{/* <div className="col-md-6">
                        <img 
                            src="/static/images/cleaner.webp"
                            className="img img-fluid"
                            style={{height:"auto", width:"100%", objectFit: "cover"}}
                        />
                    </div> */}