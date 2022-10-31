import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import java from '../img/java.png';
import bootstrap from '../img/bootstrap.png';
import react from '../img/react.png';
import sass from '../img/sass.png';

import music1 from '../img/projects/music1.png';
import music2 from '../img/projects/music2.png';
import weather1 from '../img/projects/weather1.png';
import weather2 from '../img/projects/weather2.png';
import weather3 from '../img/projects/weather3.png';
import web1 from '../img/projects/web1.png';
import web2 from '../img/projects/web2.png';
import profile1 from '../img/projects/profile1.png';
import profile2 from '../img/projects/profile2.png';
import profile3 from '../img/projects/profile3.png';
import profile4 from '../img/projects/profile4.png';

const MyProject = [
    {
        id: 1,
        name: 'profile',
        bgImage: web1,
        type: 'html',
        img: [web1, web2],
        app: 'Profile Web',
        desc: 'Sản phẩm đầu tiên, trang web profile cá nhân sử dụng HTML, CSS và JS. Web về thông tin cá nhân bản thân, các sở thích và mục tiêu tương lai!',
        created: '2022',
        role: 'Frontend',
        frontend: 'HTML, CSS, JS',
        backend: 'null',
        demo: 'https://mblan1.github.io/lanle-info/',
    },
    {
        id: 2,
        name: 'music player',
        bgImage: music1,
        type: 'html',
        img: [music1, music2],
        app: 'Music App',
        desc: 'Trang Web nghe nhạc được viết bằng HTML, CSS và JS. App có chức năng phát nhạc, tạm dừng, ngẫu nhiên, lặp lại, điều chỉnh âm lương, next hoặc prev bài ',
        created: '2022',
        role: 'Frontend',
        frontend: 'HTML, CSS, JS',
        backend: 'null',
        demo: 'https://mblan1.github.io/Music-player/',
    },
    {
        id: 3,
        name: 'weather',
        bgImage: weather1,
        type: 'api',
        img: [weather1, weather2, weather3],
        app: 'Weather App',
        desc: 'Trang Web thời tiết, được viết bằng HTML, CSS, JS. App có chức năng hiển thị thông tin thời tiết của nơi sau khi tìm kiếm, toggle Dark Mode.',
        created: '2022',
        role: 'Frontend',
        frontend: 'HTML, CSS, JS',
        backend: 'null',
        demo: 'https://mblan1.github.io/weatherApp/',
    },
    {
        id: 4,
        name: 'profile',
        bgImage: profile1,
        type: 'react',
        img: [profile1, profile2, profile3, profile4],
        app: 'Profile React',
        desc: 'Trang web profile được làm chỉnh chu viết bằng ReactJS, sau hơn tháng tìm tòi và code nên',
        created: '2022',
        role: 'Frontend',
        frontend: 'ReactJS',
        backend: 'null',
        demo: 'https://lelan-profile.netlify.app',
    },
];

const SkillData = [
    {
        id: 1,
        logo: html,
        skillName: 'html',
    },
    {
        id: 2,
        logo: css,
        skillName: 'css',
    },
    {
        id: 3,
        logo: js,
        skillName: 'js',
    },
    {
        id: 4,
        logo: java,
        skillName: 'java',
    },
    {
        id: 5,
        logo: react,
        skillName: 'react',
    },
    {
        id: 6,
        logo: bootstrap,
        skillName: 'bootstrap',
    },
    {
        id: 7,
        logo: sass,
        skillName: 'sass',
    },
];

const EduData = [
    {
        id: 1,
        time: '2017-2020',
        title: 'Tinh Gia 1 High School',
        desc: 'Một ngôi trường với bao cuộc vui và kỷ niệm khó quên',
    },
    {
        id: 2,
        time: '2020-2025',
        title: 'Hanoi University of Mining and Geology',
        desc: 'Một nơi mà tôi đang học để trở thành một kỹ sư CNTT',
    },
    {
        id: 3,
        time: '2020-',
        title: 'F8 - Fullstack',
        desc: 'Nơi đào tạo lập trình viên Web Fullstack',
    },
];

export { MyProject, SkillData, EduData };
