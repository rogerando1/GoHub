import '../Style/Frontpage.css'
import {Navbar} from './Navigator'

export const Frontpage = () =>
{
    return(
        <section>
        <Navbar/>
        <div className='Pans'>
            <div className= 'bus'>
                <img src='Bus1.0.png' alt='Background'></img>
            </div>
        </div>
        </section>     
    )
}

