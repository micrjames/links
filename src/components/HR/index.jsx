const HR = ({ color }) => {
   return (
	  <hr
		 style={{
			background: color,
			color: color,
			borderColor: color,
			width: '75%',
			height: '2px',
			margin: '2rem'
		 }}
	  />
   );
};

export default HR;
