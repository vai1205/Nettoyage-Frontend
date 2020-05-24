const Cta = props => {
    const {ctaHeading,ctaBody,ctaFooter,ctaButton} = props.language;
    return(
        <React.Fragment>
            <div className="text-center pb-5">
            <h1 className="display-4 primary-color">{ctaHeading}</h1>
            <p className="lead">{ctaBody}</p>
            <hr className="my-4" style={{backgroundColor:"black", margin:"5%"}}/>
            <p>{ctaFooter}</p>
            <br/>
            <a id="cta-btn" className="btn btn-lg btn-outline-dark" href="#slider" role="button">{ctaButton}</a>
            </div>
        </React.Fragment>
    );
};
export default Cta;