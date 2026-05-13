export interface Skill {
    id: string;
    name: string;
    iconName: string;
    category: string;
}

export interface SkillCategory {
    id: string;
    title: string;
    description: string;
    skills: Skill[];
}

export const skillsData: SkillCategory[] = [
    {
        id: 'programming',
        title: 'Programming Languages',
        description: 'Core programming languages and fundamentals',
        skills: [
            {
                id: 'java',
                name: 'Java',
                iconName: 'java',
                category: 'Programming',
            },
            {
                id: 'python',
                name: 'Python',
                iconName: 'python',
                category: 'Programming',
            },
            {
                id: 'javaee',
                name: 'Java EE',
                iconName: 'java',
                category: 'Programming',
            },
        ],
    },
    {
        id: 'web-ui',
        title: 'Web & UI Development',
        description: 'Frontend frameworks, libraries and styling tools',
        skills: [
            {
                id: 'html',
                name: 'HTML',
                iconName: 'html5',
                category: 'Web & UI',
            },
            {
                id: 'css',
                name: 'CSS',
                iconName: 'css3',
                category: 'Web & UI',
            },
            {
                id: 'javascript',
                name: 'JavaScript',
                iconName: 'javascript',
                category: 'Web & UI',
            },
            {
                id: 'typescript',
                name: 'TypeScript',
                iconName: 'typescript',
                category: 'Web & UI',
            },
            {
                id: 'react',
                name: 'React.js',
                iconName: 'react',
                category: 'Web & UI',
            },
            {
                id: 'nextjs',
                name: 'Next.js',
                iconName: 'nextdotjs',
                category: 'Web & UI',
            },
            {
                id: 'angular',
                name: 'Angular',
                iconName: 'angular',
                category: 'Web & UI',
            },
            {
                id: 'tailwindcss',
                name: 'TailwindCSS',
                iconName: 'tailwindcss',
                category: 'Web & UI',
            },
            {
                id: 'bootstrap',
                name: 'Bootstrap',
                iconName: 'bootstrap',
                category: 'Web & UI',
            },
            {
                id: 'materialui',
                name: 'Material UI',
                iconName: 'mui',
                category: 'Web & UI',
            },
        ],
    },
    {
        id: 'backend',
        title: 'Backend & APIs',
        description: 'Server-side frameworks, security and API development',
        skills: [
            {
                id: 'springboot',
                name: 'Spring Boot',
                iconName: 'springboot',
                category: 'Backend',
            },
            {
                id: 'springsecurity',
                name: 'Spring Security',
                iconName: 'springsecurity',
                category: 'Backend',
            },
            {
                id: 'jwt',
                name: 'JWT',
                iconName: 'jsonwebtokens',
                category: 'Backend',
            },
            {
                id: 'restapis',
                name: 'REST APIs',
                iconName: 'fastapi',
                category: 'Backend',
            },
            {
                id: 'springai',
                name: 'Spring AI',
                iconName: 'spring',
                category: 'Backend',
            },
        ],
    },
    {
        id: 'databases',
        title: 'Databases',
        description: 'Database management and query languages',
        skills: [
            {
                id: 'sql',
                name: 'SQL',
                iconName: 'mysql',
                category: 'Databases',
            },
            {
                id: 'plsql',
                name: 'PL/SQL',
                iconName: 'oracle',
                category: 'Databases',
            },
        ],
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        description: 'Cloud platforms, containerization and deployment tools',
        skills: [
            {
                id: 'aws',
                name: 'AWS',
                iconName: 'amazonaws',
                category: 'Cloud & DevOps',
            },
            {
                id: 'docker',
                name: 'Docker',
                iconName: 'docker',
                category: 'Cloud & DevOps',
            },
            {
                id: 'git',
                name: 'Git',
                iconName: 'git',
                category: 'Cloud & DevOps',
            },
            {
                id: 'maven',
                name: 'Maven',
                iconName: 'apachemaven',
                category: 'Cloud & DevOps',
            },
            {
                id: 'digitalocean',
                name: 'DigitalOcean',
                iconName: 'digitalocean',
                category: 'Cloud & DevOps',
            },
        ],
    },
    {
        id: 'design-modeling',
        title: 'Design & Modeling',
        description: 'UML, BPMN and design methodologies',
        skills: [
            {
                id: 'uml',
                name: 'UML',
                iconName: 'uml',
                category: 'Design',
            },
            {
                id: 'bpmn',
                name: 'BPMN',
                iconName: 'bpmn',
                category: 'Design',
            },
        ],
    },
];