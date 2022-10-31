import About from '../../components/About/About';
import { ShowOn } from '../../components/ShowOn';
import { Header } from '../../layouts/Header';

function AboutPage() {
    return (
        <div>
            <ShowOn />
            <Header firstTitle={'About'} subTitle={'AboutMe'} colorTitle={'Me'} />
            <About />
        </div>
    );
}

export default AboutPage;
