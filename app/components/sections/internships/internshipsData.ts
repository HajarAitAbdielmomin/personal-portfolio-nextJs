export interface Internship {
    id: string;
    position: string;
    company: string;
    companyLogo: string;
    location: string;
    startDate: string;
    endDate: string;
    tasks: string[];
    technologies: string[];
    uiImages?: string[];
    status: 'completed' | 'in-progress' | 'upcoming';
    topic?: string;
    width: number;
    height: number;
}

export const internshipsData: Internship[] = [
    {
        id: '1',
        position: 'Software Engineer Intern',
        company: 'Capgemini Engineering',
        companyLogo: '/logo/companies/cap.png',
        location: 'Casablanca, Morocco',
        startDate: 'Fev 2024',
        endDate: 'Jun 2024',
        status: 'completed',
        topic: 'Digitalization Of the Onboarding Process for New Hires and Monitoring the Skill Development of Capgemini Consultants: « Welcome In » Platform',
        tasks: [],
        technologies: ['Figma', 'NextJs', 'NodeJs', 'TailwindCss', 'MUI', 'TypeScript', 'NodeMailer','Strapi CMS', 'AWS', 'Docker', 'UML', 'BPMN', 'MySql', 'JWT', 'Agile/Scrum'],
        uiImages: [
            '/images/cap-project/ui-work-1.png',
            '/images/cap-project/ui-work-2.png',
            '/images/cap-project/ui-work-3.png',
            '/images/cap-project/ui-work-4.png',
            '/images/cap-project/ui-work-5.png',
            '/images/cap-project/ui-work-6.png',
            '/images/cap-project/ui-work-7.png',
            '/images/cap-project/ui-work-8.png',
            '/images/cap-project/ui-work-9.png',
            '/images/cap-project/ui-work-10.png',
            '/images/cap-project/ui-work-11.png',
            '/images/cap-project/ui-work-12.png',
            '/images/cap-project/ui-work-13.png',
            '/images/cap-project/ui-work-14.png',
            '/images/cap-project/ui-work-15.png',
        ],
        width: 40,
        height: 40,
    },
    {
        id: '2',
        position: 'Software Engineer - Spring-boot/ReactJs',
        company: 'Info Etoile',
        companyLogo: '/logo/companies/info-etoile.png',
        location: 'Kenitra, Morocco',
        startDate: 'Jul 2023',
        endDate: 'Sep 2023',
        status: 'completed',
        topic: 'Integrated Management of Jobs and Recruitment Process, « CareerHub » Platform',
        tasks: [],
        technologies: ['UML', 'ReactJS', 'Spring boot', 'Spring security', 'JDK17','Bootstrap', 'Axios', 'MySql'],
        uiImages: [
            '/images/info-project/ui-work-1.png',
            '/images/info-project/ui-work-2.png',
            '/images/info-project/ui-work-3.png',
            '/images/info-project/ui-work-4.png',
            '/images/info-project/ui-work-5.png',
            '/images/info-project/ui-work-6.png',
            '/images/info-project/ui-work-7.png',
            '/images/info-project/ui-work-8.png',
            '/images/info-project/ui-work-9.png',
            '/images/info-project/ui-work-10.png',
            '/images/info-project/ui-work-11.png',
            '/images/info-project/ui-work-12.png',
            '/images/info-project/ui-work-13.png',
            '/images/info-project/ui-work-14.png',
        ],
        width: 90,
        height: 90,
    },
    {
        id: '3',
        position: 'Web Developer - PHP/Laravel',
        company: 'Web Eco',
        companyLogo: '/logo/companies/webeco.png',
        location: 'Kenitra, Morocco',
        startDate: 'Jul 2022',
        endDate: 'Aug 2022',
        status: 'completed',
        topic: 'IT Ticketing System',
        tasks: [],
        technologies: ['Laravel', 'PHP', 'HTML', 'CSS', 'JQuery', 'JavaScript', 'MySql', 'PhpMyAdmin'],
        uiImages: [
            '/images/webeco-project/ui-work-1.png',
            '/images/webeco-project/ui-work-2.png',
            '/images/webeco-project/ui-work-3.png',
            '/images/webeco-project/ui-work-4.png',
            '/images/webeco-project/ui-work-5.png',
            '/images/webeco-project/ui-work-6.png',
            '/images/webeco-project/ui-work-1-6.png',
            '/images/webeco-project/ui-work-2-6.png',
            '/images/webeco-project/ui-work-7.png',
            '/images/webeco-project/ui-work-8.png',
            '/images/webeco-project/ui-work-9.png',
            '/images/webeco-project/ui-work-10.png',
            '/images/webeco-project/ui-work-11.png',
            '/images/webeco-project/ui-work-12.png',
            '/images/webeco-project/ui-work-13.png',
            '/images/webeco-project/ui-work-14.png',
        ],
        width: 60,
        height: 40,
    },
    {
        id: '4',
        position: 'Web developer — PHP',
        company: 'The court of appeal',
        companyLogo: '/logo/companies/courDappel.png',
        location: 'Kenitra, Morocco',
        startDate: 'Jul 2019',
        endDate: 'Aug 2019',
        status: 'completed',
        topic: 'Internal Library Management System',
        tasks: [
            'Creating micro-interactions',
            'Transition animations',
            'Performance optimization',
            'Animation documentation',
        ],
        technologies: ['Merise', 'PhpMyAdmin', 'PHP', 'CSS', 'HTML'],
        uiImages: [
            '/images/court-project/ui-work-1.jpg',
            '/images/court-project/ui-work-2.jpg',
            '/images/court-project/ui-work-3.jpg',
            '/images/court-project/ui-work-4.jpg',
        ],
        width: 40,
        height: 40,
    },
];