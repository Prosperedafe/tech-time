import Best from "../components/best/best";
import Courses from "../components/courses/courses";
import Faq from "../components/faq/faq";
import Hero from "../components/hero/hero";
import Join from "../components/join/join";
import Quality from "../components/quality/quality";
import Testimony from "../components/testimony/testimony";

const Main = () => {
    return (
        <main>
            <Hero />
            <Quality />
            <Best />
            <Courses />
            <Testimony />
            <Join />
            <Faq />
        </main>
    )
}

export default Main;