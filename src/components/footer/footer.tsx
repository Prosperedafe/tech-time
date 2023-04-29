import './footer.css';
import logo from '../../../techtime.png';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import youtube from './assets/youtube.svg';
import instagram from './assets/Instagram svg.svg';
import discord from './assets/Discord svg.svg';
import { Button } from '../button';

export default function Footer() {
    return (
        <footer>
            <div className='reach-out'>
                <img src={logo} alt="logo" className='logo' />
                <p>Reach out to us on any of our social media networks</p>
                <div className='social-links'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="youtube" />
                    <img src={instagram} alt="instagram" />
                    <img src={discord} alt="discord" />
                </div>
            </div>
            <div>
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Our Courses</li>
                    <li>Testimonials</li>
                    <li>Our Community</li>
                </ul>
            </div>
            <div>
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Our Courses</li>
                    <li>Testimonials</li>
                    <li>Our Community</li>
                </ul>
            </div>
            <div>
                <h3>Subscribe Us</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder='nft123@gmail.com' />
                    <Button className='' content='Send Message' />
                </form>
            </div>
        </footer>
    )
}
