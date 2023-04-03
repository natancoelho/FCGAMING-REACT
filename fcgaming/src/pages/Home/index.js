import { Link}  from 'react-router-dom';
import './style.css'



function Home() {
    


    
    return (
       <body>
    
            <div className='descricao'>
                <div className='card1'>
                    <p className='desc1'>A maior comunidade de Gamers do Brasil</p>
                    <p className='desc2'>Se você é um jogador apaixonado em busca de uma comunidade ativa e acolhedora, junte-se a nós! Estamos sempre procurando novos membros para se juntar a nós e ajudar a construir uma comunidade ainda mais vibrante e diversificada. Venha jogar conosco e fazer novos amigos hoje mesmo!</p>
                </div>
            </div>

            <div className='divisao2'>
                <div className='card2'>
                <Link to="https://discord.gg/SRWSTtxsME">
                    <img className='discord1' src='/imgs/discord.png'/>
                    </Link>
                     <p className='desc3'>Venha fazer parte</p>
                     <p className='desc4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                        <button className='entrar'>
                            Entrar no Discord
                        <Link to="https://discord.gg/SRWSTtxsME"></Link>
                        </button>
                 </div>
         
                <div className='container'>
                   
                    <div className='item1'>
                        <div className='foto1'>
                            
                         </div>
                        <div className='sobre1'>
                            Jake
                            <p className='sobredesc'>
                                Fundador da FC GAMING
                            </p>
                         </div>
                    </div>


                    <div className='item2'>
                    <div className='foto2'>
                          
                         </div>
                        <div className='sobre2'>
                            Natan
                            <p className='sobredesc'>
                                Desenvolvedor e fundador
                            </p>
                        </div>
                    </div>


                    <div className='item3'>
                    <div className='foto3'>
                            
                         </div>
                        <div className='sobre3'>
                           Vitu
                           <p className='sobredesc'>
                                Desenvolvedor e fundador
                            </p>
                        </div>
                    </div>


                    <div className='item4'>
                    <div className='foto4'>
                            
                         </div>
                        <div className='sobre4'>
                            Ross
                            <p className='sobredesc'>
                                bla bla bla bla bla bla bla bla
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        

            <div className='rodape'>
           
            <Link to="/privacidade">
                    <p className='pprivacidade'> Politica de Privacidade</p>
                    </Link>
            </div>
      
        </body>
    );
}
 

export default Home;