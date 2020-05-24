import CustomCard from "./CustomCard";
import { useEffect } from "react";

const Services = props => {
    let {serviceHeading, serviceSubHeading, services, readMore, close} = props.language;
    return(
        <React.Fragment>
            <div className="pt-5 pb-5">
                <h2 className="heading text-center primary-color">
                    {serviceHeading}
                </h2>
                <hr className="my-4" style={{margin:"5%"}}/>
                <h3 className="text-center subHeading">{serviceSubHeading}</h3>
                <div className="container">
                    <div className="row">
                        {
                            services && services.map((service, index) => 
                            <CustomCard 
                                key={index} 
                                service={service} 
                                readMore={readMore}
                                close={close}
                            />)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Services