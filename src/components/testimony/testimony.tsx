import './testimony.css';
import bella from './assets/bella.svg'
import samuel from './assets/samuel.svg'
import jason from './assets/jason.svg'

const Testimony = () => {

    const testifiers = [
        {
            text: 'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
            icon: bella,
            name: 'Bella Moon',
            role: 'Product Designer'
        },
        {
            text: 'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
            icon: samuel,
            name: 'Samuel Fortune',
            role: 'Product Designer'
        },
        {
            text: 'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
            icon: jason,
            name: 'Bryce Jason',
            role: 'Product Designer'
        },
        {
            text: 'High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world',
            icon: bella,
            name: 'Bella Moon',
            role: 'Product Designer'
        }
    ]

    return (
        <section className="testimony">
            <h2>What our clients are saying</h2>
            <p>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <div className='testimonial'>
                {testifiers.map((test, index) => {
                    return (
                        <div key={index}>
                            <blockquote style={{ margin: '1rem 0' }}>{test.text}</blockquote>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src={test.icon} alt={test.name} />
                                <div>
                                    <h4>{test.name}</h4>
                                    <p>{test.role}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimony;