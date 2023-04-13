import './hero.css';
import upArrow from '../assets/arrow_outward.svg';
import user1 from '../assets/user1.svg';
import user2 from '../assets/user2.svg';
import user3 from '../assets/user3.svg';
import user4 from '../assets/user4.svg';
import user5 from '../assets/user5.svg';
import heroImg from '../assets/HERO IMAGEE.svg';
import greendot from '../assets/green-round.svg';
import waves from '../assets/wavy-bg.svg';
import yellowDot from '../assets/yellow-dot.svg';
import bulb from '../assets/bulb.svg';
import figma from '../assets/figma-logo.svg';
import curveArrow from '../assets/curved-arrow.svg';
import vscode from '../assets/vscode.svg';
import triangle from '../assets/yellow-triangle.svg';
import wordpress from '../assets/wordpress.png';
import zoom from '../assets/zoom.svg';
import stripe from '../assets/stripe.svg';
import monday from '../assets/monday.svg';
import slack from '../assets/slack.svg';
import dropbox from '../assets/dropbox.svg';
import { Button } from './button';

const Hero = () => {
    return (
        <>
            <section className="hero" title="grow your skills">
                <img src={greendot} className='green-dot' alt="" />
                <img src={waves} className='wave-bg' alt="" />
                <img src={yellowDot} className='yellow-dot' alt="" />
                <div className='hero__topic'>
                    <h1>Grow your skills to advance your career path</h1>
                    <p>Build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                    <div className='btns' style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '2rem 0' }}>
                        <button className='get-started'><span>Get Started Now</span><img src={upArrow} alt="arrow" /></button>
                        <Button className='enroll-btn' content='Enroll Now' />
                    </div>
                    <div className="followers">
                        <img src={user1} alt="followers" />
                        <img src={user2} alt="followers" />
                        <img src={user3} alt="followers" />
                        <img src={user4} alt="followers" />
                        <img src={user5} alt="followers" />
                        <div className='followers__number'>
                            <p>255k+</p>
                            <p>Previews</p>
                        </div>
                    </div>
                </div>
                <figure>
                    <img src={yellowDot} alt="" className='dot' />
                    <img src={bulb} alt="" className='bulb' />
                    <img src={greendot} alt="" className='green' />
                    <img src={figma} alt="" className='figma' />
                    <img src={vscode} alt="" className='vscode' />
                    <img src={triangle} alt="" className='triangle' />
                    <img src={wordpress} alt="" className='wordpress' />
                    <img src={heroImg} alt="hero" />
                    <img src={curveArrow} alt="" className='curve' />
                </figure>
            </section>
            <div className="platforms">
                <img src={zoom} alt="zoom" />
                <img src={stripe} alt="stripe" />
                <img src={monday} alt="monday" />
                <img src={slack} alt="slack" />
                <img src={dropbox} alt="dropbox" />
            </div>
        </>
    )
}
export default Hero;