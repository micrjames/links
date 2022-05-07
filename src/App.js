import './index.scss';

import { profile_header, socials, websites, footer } from './data';
import { Header, Socials, HR, Footer } from './components';
import useTitle from './hooks/useTitle';

function App() {
	 useTitle('My Links'); 
	 return (
		<>
		   <main>
			  <section className="content-container">
				 <Header data={profile_header} />	
				 <HR color={'#3c3c3c'} />	
				 <Socials socials={socials} />	
				 <HR color={'#3c3c3c'} />	
				 <Socials socials={websites} />	
			  </section>
		   </main>
		   <Footer data={footer} />
		</>
	 );
}

export default App;
