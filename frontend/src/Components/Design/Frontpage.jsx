import '../Style/Frontpage.css'
import {Navbar} from './Navigator'

export const Frontpage = () =>
{
    return(
        <section>
        <Navbar/>
        <div className='Pans'>
            <img  className= 'background' src='Bus1.0.png' alt='Background'></img>
        </div>
        </section>     
    )
}

