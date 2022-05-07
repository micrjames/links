import Icon from '../Icon/Icon';        
                                                   
const Social = ({ data }) => {                   
    return (                                       
       <>                                          
          <a                                       
               href={data.reference}          
               className="btn slate"               
               target="_blank"                     
               rel="noreferrer"                    
          >                                        
             <Icon which={data.icon} style="link-icon" />
             &nbsp;                                
             <span className="link-text">{data.text}</span>                                  
          </a>                                     
       </>                                         
    );                                             
};                                                
                                              
export default Social;
