import './quality.css';
import { Button } from "../button";
import green from './assets/green.svg';
import hash from './assets/hash.svg';
import dots from './assets/dotts.svg';
import dot from './assets/dots.svg';

const classes = [
    {
        icon: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888598/tech-time/audio-classes_d32i3l.svg',
        text: 'Audio Classes'
    },
    {
        icon: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888650/tech-time/recorded-classes_pjua7b.svg',
        text: 'Recorded Classes'
    },
    {
        icon: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888643/tech-time/live-classes_ae9nyo.svg',
        text: 'Live Classes'
    },
    {
        icon: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888647/tech-time/notes_i4sjfw.svg',
        text: '50+ Notes'
    },
]

const Quality = () => {
    return (
        <section className="quality">
            <img src={green} alt="" className='green' />
            <img src={hash} alt="" className='hash' />
            <img src={dot} alt="" className='dot' />
            <div>
                <h2>High quality video, audio & live classes</h2>
                <p>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <Button className="bg-blue" content='View courses' />
                <div className='class-types'>
                    {classes.map((classes, index) => {
                        return (
                            <div key={index}>
                                <img src={classes.icon} alt={classes.text} />
                                <p>{classes.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <picture>
                <img src={dots} alt="" className='dots' />
                <img className='male' src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888659/tech-time/male-student_vtpilm.png' alt="male student" />
                <img className='female' src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888622/tech-time/female-student_bxklpk.png' alt="female student" />
                <img className='students' src='https://res.cloudinary.com/dmztxdgak/image/upload/v1682888605/tech-time/students_asgj9w.svg' alt="students" />
            </picture>
        </section>
    )
}

export default Quality;