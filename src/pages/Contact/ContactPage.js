import { Contact } from '../../components/Contact';
import { ShowOn } from '../../components/ShowOn';
import { Header } from '../../layouts/Header';

function ContactPage() {
    return (
        <div>
            <ShowOn />
            <Header firstTitle={'Get in'} colorTitle={'Touch'} subTitle={'contact'} />
            <Contact />
        </div>
    );
}

export default ContactPage;
