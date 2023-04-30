import './courses.css'
import { useState } from 'react'
import { Button } from '../button'
import courses from './data'
import pattern from './assets/Vector.svg';

const Courses = () => {
    const [current, setCurrent] = useState<string>('category')

    return (
        <section className="courses">
            <img src={pattern} className='pattern' alt="" />
            <h2>Browse our popular courses</h2>
            <p>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <div className="course__category">
                <button onClick={() => setCurrent('category')} className={current === 'category' ? 'current' : ''}>All Categories</button>
                <button onClick={() => setCurrent('design')} className={current === 'design' ? 'current' : ''}>Design</button>
                <button onClick={() => setCurrent('development')} className={current === 'development' ? 'current' : ''}>Development</button>
                <button onClick={() => setCurrent('marketing')} className={current === 'marketing' ? 'current' : ''}>Marketing</button>
            </div>

            <div className="courses__types">
                <>
                    {courses.map((course, index) => {
                        return (
                            <div key={index}>
                                <img width='100%' src={course.img} alt={course.type} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '.5rem 0' }}>
                                    <button className='course__type'>{course.type}</button>
                                    <p style={{ color: '#A1A1A1', fontSize: '.8rem', fontWeight: '500' }}>
                                        <span>{course.rating1}</span>
                                        <img style={{ margin: '0 8px 0 2px' }} src={course.star} alt='star' />
                                        <span>{course.rating2}</span>
                                    </p>
                                </div>
                                <h3>{course.topic}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '.5rem 0' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#A1A1A1', fontSize: '.9rem', fontWeight: '500' }}>
                                        <img height='15px' src={course.timeIcon} alt="time" />
                                        <span>{course.time}</span>
                                    </p>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#A1A1A1', fontSize: '.9rem', fontWeight: '500' }}>
                                        <img height='15px' src={course.lessonsIcon} alt="time" />
                                        <span>{course.lessons}</span>
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', margin: '1rem 0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src={course.profilePic} alt={course.profileName} />
                                        <p style={{ fontSize: '1rem', fontWeight: '600' }}>{course.profileName}</p>
                                    </div>
                                    <p style={{ color: '#004DB3', fontSize: '1.1rem', fontWeight: '600' }}>{course.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </>
            </div>
            <Button className='explore' content='Explore All Courses' />
        </section>
    )
}

export default Courses;