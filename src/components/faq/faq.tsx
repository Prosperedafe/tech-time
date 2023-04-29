import './faq.css';
import icon from './add.svg';
import { useState } from 'react';

const questions = [
    {
        question: 'Can i change my plan later?',
        answer: ' High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image.',
        icon: icon
    },
    {
        question: 'Are the courses lifetime?',
        answer: ' High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image.',
        icon: icon
    },
    {
        question: 'Do i get certified after taking courses?',
        answer: ' High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image.',
        icon: icon
    },
    {
        question: 'How do i reach out to mentors?',
        answer: ' High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image.',
        icon: icon
    },
    {
        question: 'Do we get job ready after taking courses?',
        answer: ' High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image.',
        icon: icon
    }
]

const Faq = () => {

    const [style, setStyle] = useState<boolean>(false)

    return (
        <section className="faq">
            <div>
                <h2>Frequently Asked Questions</h2>
                <p>
                    High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image
                </p>
                <div style={{ margin: '2rem 0' }}>
                    <h3>Is there a free trial available?</h3>
                    <p>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                </div>
                <div>
                    {questions.map((question, index) => {
                        return (
                            <div className="questions" key={index}>
                                <div>
                                    <div onMouseOver={() => setStyle(!style)} className='question-heading'>
                                        <h4>{question.question}</h4>
                                        <img src={question.icon} alt="icon" />
                                    </div>
                                    {/* <p className={style ? 'show' : ''}>{question.answer}</p> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Faq