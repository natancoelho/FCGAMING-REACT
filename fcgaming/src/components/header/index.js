import { Link } from 'react-router-dom';
import './header.css'




function Header (){
    return(
        <div className='teste'>
        <header>
        
            <h2> 
            <Link to="/">FC GAMING </Link>
                

            </h2>

            <div className='icones'>

            <Link to="https://discord.gg/SRWSTtxsME">
                    <img className='discord' src='/imgs/discord.png'/>
                    </Link>

            </div>


            <div className='menu'>
                <Link to="/">
                <p className='phome'>Home</p>
                </Link>
                <Link to="/sobre">
                    <p className='psobre1'>Sobre</p>
                </Link>

            </div>
            </header>
          </div>
        
        
    )
}

export default Header;