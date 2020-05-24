import {FaRegCalendarCheck} from "react-icons/fa";
import {FiMail, FiSmile} from "react-icons/fi";
const HiwBox = props => {
    let icon;
    switch (props.hiwBoxHeading.icon) {
        case"FaWpforms": icon=<FaRegCalendarCheck/>; break;
        case"FaCheck": icon=<FiMail/>; break;
        case"FaBroom": icon=<FiSmile/>; break;
    }
    return(
        <div className="col-md-4" style={{position:"relative"}}>
        <div className="hiwBox"><span className="hiwBoxIcon">{icon}</span></div>
        <div className="primary-color hiwBoxText text-center">{props.hiwBoxHeading.text}</div>
        </div>
    );
};
export default HiwBox;