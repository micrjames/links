const Footer = ({ data }) => {
	return (
	   <footer>
			<div className="footer-content__signature">
			   &copy;{data.text}
			</div>
	   </footer>
    );
};

export default Footer;

