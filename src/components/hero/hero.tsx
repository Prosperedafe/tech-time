import './hero.css';
import upArrow from '../../assets/arrow_outward.svg';
import { Button } from '../button';

const Hero = () => {
    return (
        <>
            <section className="hero" title="grow your skills">
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888640/tech-time/green-round_eipeo1.svg' className='green-dot' alt="" />
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888638/tech-time/wavy-bg_io4h5m.svg' className='wave-bg' alt="" />
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888640/tech-time/yellow-dot_ovcsfd.svg' className='yellow-dot' alt="" />
                <div className='hero__topic'>
                    <h1>Grow your skills to advance your career path</h1>
                    <p>Build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                    <div className='btns' style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', margin: '2rem 0' }}>
                        <button className='get-started'><span>Get Started Now</span><img src={upArrow} alt="arrow" /></button>
                        <Button className='enroll-btn' content='Enroll Now' />
                    </div>
                    <div className="followers">
                        <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888634/tech-time/user1_ntwbvm.svg' alt="followers" />
                        <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888636/tech-time/user2_dpwxx0.svg' alt="followers" />
                        <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888638/tech-time/user3_enlqtp.svg' alt="followers" />
                        <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888637/tech-time/user4_dkxvzc.svg' alt="followers" />
                        <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888639/tech-time/user5_jqi0hg.svg' alt="followers" />
                        <div className='followers__number'>
                            <p>255k+</p>
                            <p>Previews</p>
                        </div>
                    </div>
                </div>
                <figure>
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888640/tech-time/yellow-dot_ovcsfd.svg' alt="" className='dot' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888611/tech-time/bulb_ezicd3.svg' alt="" className='bulb' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888640/tech-time/green-round_eipeo1.svg' alt="" className='green' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888636/tech-time/figma-logo_rqdibm.svg' alt="" className='figma' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888638/tech-time/vscode_wgm4mm.svg' alt="" className='vscode' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888640/tech-time/yellow-triangle_q8dxj7.svg' alt="" className='triangle' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888639/tech-time/wordpress_c5mjz8.svg' alt="" className='wordpress' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682075027/HERO_IMAGEE_rdpdlf.svg' alt="hero" className='hero-img' />
                    <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888604/tech-time/curved-arrow_aqr3qf.svg' alt="" className='curve' />
                </figure>
            </section>
            <div className="platforms">
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888641/tech-time/zoom_brqsyz.svg' alt="zoom" />
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888598/tech-time/stripe_z3oovg.svg' alt="stripe" />
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888658/tech-time/monday_qbyzrq.svg' alt="monday" />
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888656/tech-time/slack_ivbtx4.svg' alt="slack" />
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888611/tech-time/dropbox_gh5bho.svg' alt="dropbox" />
            </div>
        </>
    )
}
export default Hero;