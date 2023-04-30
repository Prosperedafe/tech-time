import star from '../../assets/star.svg';
import time from '../../assets/time.svg';
import lessons from '../../assets/lessons.svg'
import victor from '../../assets/profile.svg'
import williams from '../../assets/williams.svg'
import mason from '../../assets/mason.svg'
import jessica from '../../assets/jessica.svg'
import jacobs from '../../assets/jacobs.svg'
import smith from '../../assets/smith.svg'

const courses = [
        {
            img: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888635/tech-time/unsplash_ui_l8wi2k.svg',
            type: 'Design',
            rating1: '4.7k',
            star: star,
            rating2: '(32.7k+)',
            topic: 'Introduction to user research in UX design',
            timeIcon: time,
            time: '23hrs 50mins',
            lessonsIcon: lessons,
            lessons: '15 Lessons',
            profilePic: victor,
            profileName: 'Leonard Victor',
            price: '$15.00',
        },
        {
            img: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888630/tech-time/unsplash_marketing_ojgpsz.svg',
            type: 'Marketing',
            rating1: '4.7k',
            star: star,
            rating2: '(8.7k+)',
            topic: 'Introduction to new marketing audience',
            timeIcon: time,
            time: '22hrs 30mins',
            lessonsIcon: lessons,
            lessons: '22 Lessons',
            profilePic: williams,
            profileName: 'Jeffrey Williams',
            price: '$32.00',
        },
        {
            img: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888633/tech-time/unsplash_development_hjcmru.svg',
            type: 'Development',
            rating1: '4.7k',
            star: star,
            rating2: '(12.7k+)',
            topic: 'Introduction to HTML, CSS & Bootstrap',
            timeIcon: time,
            time: '45hrs 50mins',
            lessonsIcon: lessons,
            lessons: '55 Lessons',
            profilePic: mason,
            profileName: 'Claretta Mason',
            price: '$55.00',
        },
        {
            img: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888634/tech-time/unsplash_coding_tqelpx.svg',
            type: 'Development',
            rating1: '4.7k',
            star: star,
            rating2: '(32.7k+)',
            topic: 'Introduction to javascript, Git & GitHub',
            timeIcon: time,
            time: '30hrs 50mins',
            lessonsIcon: lessons,
            lessons: '22 Lessons',
            profilePic: jessica,
            profileName: 'Leonard Victor',
            price: '$45.00',
        },
        {
            img: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888633/tech-time/unsplash_analysis_hjmmwo.svg',
            type: 'Marketing',
            rating1: '4.7k',
            star: star,
            rating2: '(4.7k+)',
            topic: 'Introduction to outroom  marketing analysis',
            timeIcon: time,
            time: '33hrs 50mins',
            lessonsIcon: lessons,
            lessons: '26 Lessons',
            profilePic: jacobs,
            profileName: 'Samuel Jacobs',
            price: '$25.00',
        },
        {
            img: 'https://res.cloudinary.com/dmztxdgak/image/upload/v1682888635/tech-time/unsplash_live_gxw2f6.svg',
            type: 'Marketing',
            rating1: '4.7k',
            star: star,
            rating2: '(15.7k+)',
            topic: 'Introduction to live  marketing analysis',
            timeIcon: time,
            time: '10hrs 50mins',
            lessonsIcon: lessons,
            lessons: '32 Lessons',
            profilePic: smith,
            profileName: 'Adam Smith',
            price: '$25.00',
        },
]

export default courses
    