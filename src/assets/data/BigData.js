import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import java from '../img/java.png';
import bootstrap from '../img/bootstrap.png';
import react from '../img/react.png';
import sass from '../img/sass.png';

const MyProject = [
    {
        id: 1,
        name: 'profile',
        bgImage: 'https://cdn.discordapp.com/attachments/887375341180579860/1016240600628080702/unknown.png',
        type: 'html',
        img: [
            'https://cdn.discordapp.com/attachments/887375341180579860/1016240600628080702/unknown.png',
            'https://cdn.discordapp.com/attachments/887375341180579860/1017479605218717747/unknown.png',
        ],
        app: 'Web',
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
        bgImage: 'https://cdn.discordapp.com/attachments/887375341180579860/1016240498106716220/unknown.png',
        type: 'react',
        img: [
            'https://cdn.discordapp.com/attachments/887375341180579860/1016240498106716220/unknown.png',
            'https://cdn.discordapp.com/attachments/915218130811379822/1032489358898495518/unknown.png',
        ],
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
        bgImage: 'https://cdn.discordapp.com/attachments/915218130811379822/1032493423434936420/unknown.png',
        type: 'html',
        img: [
            'https://cdn.discordapp.com/attachments/915218130811379822/1032493423434936420/unknown.png',
            'https://cdn.discordapp.com/attachments/915218130811379822/1032493498953383986/unknown.png',
            'https://cdn.discordapp.com/attachments/915218130811379822/1032493692159803432/unknown.png',
        ],
        app: 'Weather App',
        desc: 'Trang Web thời tiết, được viết bằng HTML, CSS, JS. App có chức năng hiển thị thông tin thời tiết của nơi sau khi tìm kiếm, toggle Dark Mode.',
        created: '2022',
        role: 'Frontend',
        frontend: 'HTML, CSS, JS',
        backend: 'null',
        demo: 'https://mblan1.github.io/weatherApp/',
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
        desc: 'Một ngôi truòng với bao cuộc vui và kỷ niệm khó quên',
    },
    {
        id: 2,
        time: '2020-2025',
        title: 'Hanoi University of Mining and Geology',
        desc: 'Một nơi mà tôi đang học để trở thành một kỹ sư CNTT',
    },
];

export { MyProject, SkillData, EduData };
