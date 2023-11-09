import '../Style/Navigator.css'

export const Navbar = () =>
{
        return(
            <nav className="NavBar1">
                <div className=" DivNavBar">
                    <img src='logo1.1.png' alt='Background'></img>
                </div>
                <div className='gohub'>
                    GOHub
                </div>
                <ul className="NavMenu">
                    <li><a> Home</a></li>
                    <li><a> Services</a></li>
                    <li><a> Contacts</a></li>
                    <li><a> About</a></li>
                    <li><a> Login</a></li>
                </ul>
            </nav>
        )
    
}

