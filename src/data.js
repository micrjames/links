import me from './assets/me.png';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';  
import { CgWebsite } from 'react-icons/cg';
import { IoShareSocialOutline} from 'react-icons/io5';
import { RiLinksFill } from 'react-icons/ri';
import { SiHashnode, SiBuymeacoffee } from 'react-icons/si';

const profile_header = {
   photo: {
	  image: me, alt_text: "an avatar of me" 
   },
   description: "I'm a ReactJS Developer, who is looking to connect with other developers."
};
const socials = {
   header: {
	  icon: <IoShareSocialOutline />,
	  text: "Social Media"
   },
   links: [
	  {
		 id: 1,
		 reference: "https://github.com/micrjames",
		 icon: <AiFillGithub />,
		 text: "Github"
	  },
	  {
		 id: 2,
		 reference: "https://twitter.com/michaelrjamesjr",
		 icon: <AiOutlineTwitter />,
		 text: "Twitter"
	  },
	  {
		 id: 3,
		 reference: "https://www.linkedin.com/in/michaelrjamesjr/",
		 icon: <AiFillLinkedin />,
		 text: "LinkedIn"
	  }
   ]
};
const websites = {
   header: {
	  icon: <RiLinksFill />,
	  text: "My Links"
   },
   links: [
	  {
		 id: 1,
		 reference: "https://micrjames.github.io",
		 icon: <CgWebsite />,
		 text: "My Website"
	  },
	  {
		 id: 2,
		 reference: "https://michaelrjames.hashnode.dev",
		 icon: <SiHashnode />,
		 text: "My Blog"
	  },
	  {
		 id: 3,
		 reference: "https://www.buymeacoffee.com/2pnz9bgy7be",
		 icon: <SiBuymeacoffee />,
		 text: "Buy Me a Coffee"
	  }
   ]
};
const footer = {
   text: "Michael James 2021"
};

export { profile_header, socials, websites, footer };
