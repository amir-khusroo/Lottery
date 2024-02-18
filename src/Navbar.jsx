import Logo from './logo';
import './Navbar.css';

export default function () {
    return(
        <div id="Navbar">
            <Logo/>
            <div id='anchorDiv'>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
}