import { Link } from 'react-router-dom';
import './style.css'




function Header (){
    return(
        <div className='teste'>
        <header>
        
            <h2> 
            <Link to="/">FC GAMING </Link>
                

            </h2>

            <div className='icones'>

            <Link to="https://www.instagram.com/niicolasmota/">
                    <img className='discord' src='/imgs/discord.png'/>
                    </Link>

            </div>


            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>

            </div>
            </header>
          </div>
        
        
    )
}

export default Header;