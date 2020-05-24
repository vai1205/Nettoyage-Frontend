import HiwBox from "./hiwBox"

const HowItWorks = props => {
    const {howItWorksHeading, howItWorksDesc, hiwBoxHeading} = props.language;
    return(
        <div className="container pt-5 pb-5">
        <h1 className="jumbotron-heading mb-3 primary-color text-center">{howItWorksHeading}</h1>
        <hr className="mb-5" style={{margin:"0 5%"}}/>
        <p className="text-center mb-5"> {howItWorksDesc} </p>
        <div className="row">
            {hiwBoxHeading.map((val,index)=> <HiwBox key={index} hiwBoxHeading={val} />)}
        </div>
        </div>
    );
};
export default HowItWorks;