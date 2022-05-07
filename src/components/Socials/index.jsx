import Icon from '../Icon/Icon';
import Social from '../Social';

const Socials = ({ socials }) => {
   return (
	  <>
		 <div className="section-header">
			<Icon which={socials.header.icon} style="section-header-icon" />
            &nbsp;
            <span className="section-header-text">{socials.header.text}</span>
         </div>
		 {socials.links.map(social => 
			  <Social key={social.id} data={social} />
		 )}
	  </>
   );
};

export default Socials;
