const Header = ({ data }) => {
   return (
	  <>
		 <img
			 src={data.photo.image}
			 alt={data.photo.alt_text}
			 className="content-image"
		  />
		  <span className="description">
			 {data.description}                                
		  </span>
	  </>
   );
};

export default Header;
