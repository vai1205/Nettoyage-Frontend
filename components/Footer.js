const Footer = props => {
    let date = new Date();
    const {copyRight, rightsReserved} = props.language;
    return (
        <React.Fragment>
            <footer className="footer-sticky">
                <div className="container-sticky-footer text-center">
                    <span className="text-muted">
                    {copyRight}
                    &nbsp; &copy; Nettoyage Exclusif &nbsp;
                    {date.toLocaleString('default', { month: 'long' })},&nbsp;
                    {date.getFullYear()}&nbsp; 
                    {rightsReserved}
                    </span>
                </div>
            </footer>
        </React.Fragment>
    );
};
export default Footer;