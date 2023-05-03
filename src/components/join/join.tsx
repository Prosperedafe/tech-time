import './join.css';
import { Button } from '../button';
import join from '../../../Frame 209.png'

const Join = () => {
    return (
        <section className="join">
            <p style={{ fontWeight: '600' }}>JOIN OUR COMMUNITY</p>
            <h2 style={{ margin: '1rem auto' }}>Are you  ready to connect with the future talent of the tech world</h2>
            <p>Meet Up With other Techstars and grow Together</p>
            <figure>
                <img src={join} alt="friends" />
            </figure>
            <Button className='join-btn' content='Join Our Community' />
        </section>
    )
}
export default Join;