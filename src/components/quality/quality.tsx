import './quality.css';
import { Button } from "../button";
import audio from '../../assets/audio-classes.svg';
import recorded from '../../assets/recorded-classes.svg'
import live from '../../assets/live-classes.svg';
import notes from '../../assets/notes.svg';
import students from '../../assets/students.svg'
import maleStudents from '../../assets/male-student.png'
import femaleStudents from '../../assets/female-student.png'
import green from './assets/green.svg'
import hash from './assets/hash.svg'
import dots from './assets/dotts.svg';
import dot from './assets/dots.svg'

const classes = [
    {
        icon: audio,
        text: 'Audio Classes'
    },
    {
        icon: recorded,
        text: 'Recorded Classes'
    },
    {
        icon: live,
        text: 'Live Classes'
    },
    {
        icon: notes,
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
                <img className='male' src={maleStudents} alt="male student" />
                <img className='female' src={femaleStudents} alt="female student" />
                <img className='students' src={students} alt="students" />
            </picture>
        </section>
    )
}

export default Quality;