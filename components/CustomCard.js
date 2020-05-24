import {smartTrim} from "../helper";
import Popup from "../components/Popup";

const CustomCard = props => {
    const service = props.service;
    return (
        <div className="col-md-4 mb-5">
            <div className="card">
            <img className="card-img-top" src={service.imageSource} alt="Card image cap"/>
                <div className="card-body" style={{color:"black"}}>
                    <h5 className="card-header" style={{lineHeight:1.5, color:"#14287b"}}>
                        <span className="card-heading-text">
                            {service.title.toUpperCase()}
                        </span>
                    </h5>
                    <p className="card-text text-justify mx-auto">
                        {smartTrim(service.content, 145, " ", ".....")}
                        <br/>
                        <span>
                            <Popup 
                                body={service.content} 
                                title={service.title}
                                popupOpener={props.readMore.toUpperCase()}
                                popupOpenerClass="card-read-more"
                                close={props.close}
                                showArrow
                                arrowClass="arrow-class"
                            />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CustomCard;