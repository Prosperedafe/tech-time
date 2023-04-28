import Best from "./components/best";
import Courses from "./components/courses/courses";
import Hero from "./components/hero"
import Quality from "./components/quality";
import Testimony from "./components/testimony/testimony";

const Landing = () => {
    return (
        <main>
            <Hero />
            <Quality />
            <Best />
            <Courses />
            <Testimony />
        </main>
    )
}

export default Landing;