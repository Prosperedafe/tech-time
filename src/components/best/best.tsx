import './best.css';
import mentors from '../../assets/mentors.svg';
import inPerson from '../../assets/meetings.svg';
import onOne from '../../assets/on-on-one.svg';
import affordable from '../../assets/affordable.svg';
import yellow from './assets/yellow.svg'
import dot from './assets/dot.svg'
import triangle from './assets/triangle.svg'
import circle from './assets/circle.svg'

const data = [
    {
        icon: mentors,
        heading: 'Experienced mentors',
        paragraph: 'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ',
    },
    {
        icon: onOne,
        heading: 'One-on-one meetings',
        paragraph: 'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ',
    },
    {
        icon: inPerson,
        heading: 'In-person Meetings',
        paragraph: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ',
    },
    {
        icon: affordable,
        heading: 'Affordable Prices',
        paragraph: 'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. ',
    },
]

export default function Best() {
    return (
        <section className="best">
            <img src={yellow} alt="" className='yellow' />
            <img src={dot} className='dot' alt="" />
            <img src={triangle} alt="" className='triangle' />
            <img src={circle} alt="" className='circle' />
            <div>
                <h2>This is why we are best from others</h2>
                <p>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <img src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888619/tech-time/unsplash_6MePtA9EVDA_q7hrzi.png' alt="Best Student" />
            </div>
            <div className='best_reason'>
                {data.map((data, index) => {
                    return (
                        <div key={index}>
                            <img src={data.icon} alt="mentors" />
                            <h3>{data.heading}</h3>
                            <p>{data.paragraph}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}