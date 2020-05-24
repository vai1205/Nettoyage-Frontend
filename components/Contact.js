const Contact = props => {
    const {contactHeading,contactBodyPre,contactBodyPost, hiwBoxHeading, contactUsNow} = props.language;
    return(
        <div className="container text-center pt-5 pb-5">
        <h1 className="jumbotron-heading mb-3 primary-color">{contactHeading}</h1>
        <hr className="my-4" style={{margin:"5%"}}/>
        <p className="lead">
            {contactBodyPre} 
            <span><a className="green-text" href="tel:(514) 589-4290">(514) 589-4290 </a></span>
            {contactBodyPost}
            <span><a className="green-text" href="mailto:info@nettoyageexclusif.com"> info@nettoyageexclusif.com </a></span>
        </p>
        <a style={{textDecoration:"none"}} href="#slider">
        <div style={{fontSize:"xxx-large"}}>{contactUsNow}</div>
        </a>
        </div>
    );
};
export default Contact;