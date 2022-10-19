import { Project } from '../../components/Project';
import { ShowOn } from '../../components/ShowOn';
import { Header } from '../../layouts/Header';

function ProjectPage() {
    return (
        <div>
            <ShowOn />
            <Header firstTitle={'My'} colorTitle={'project'} subTitle={'works'} />
            <Project />
        </div>
    );
}

export default ProjectPage;
