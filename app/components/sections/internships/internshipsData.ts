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
    description?: string;
}

export const internshipsData: Internship[] = [
    {
        id: '1',
        position: 'UX/UI Design — Websites',
        company: 'Company Name 1',
        companyLogo: '/images/company-logo-1.svg',
        location: 'Morocco',
        startDate: 'Jan 2024',
        endDate: 'Mar 2024',
        status: 'completed',
        description: 'Composition, typography, color theory...',
        tasks: [
            'Web design and interface development',
            'Creating mockups and prototypes',
            'User experience research',
            'Collaboration with development team',
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'CSS', 'HTML'],
        uiImages: [
            '/images/ui-work-1-1.jpg',
            '/images/ui-work-1-2.jpg',
            '/images/ui-work-1-3.jpg',
        ],
    },
    {
        id: '2',
        position: 'UX/UI Design — Applications',
        company: 'Company Name 2',
        companyLogo: '/images/company-logo-2.svg',
        location: 'Remote',
        startDate: 'Apr 2024',
        endDate: 'Jun 2024',
        status: 'completed',
        description: 'Mobile application interface design...',
        tasks: [
            'Mobile interface development',
            'Design system creation',
            'User testing',
            'Iterative design improvement',
        ],
        technologies: ['Figma', 'React Native', 'Swift', 'Kotlin'],
        uiImages: [
            '/images/ui-work-2-1.jpg',
            '/images/ui-work-2-2.jpg',
        ],
    },
    {
        id: '3',
        position: 'UX/UI Design — Animation',
        company: 'Company Name 3',
        companyLogo: '/images/company-logo-3.svg',
        location: 'Remote',
        startDate: 'Jul 2024',
        endDate: 'Aug 2024',
        status: 'in-progress',
        description: 'Element animation and interfaces...',
        tasks: [
            'Creating micro-interactions',
            'Transition animations',
            'Performance optimization',
            'Animation documentation',
        ],
        technologies: ['After Effects', 'Lottie', 'Framer Motion', 'CSS Animations'],
        uiImages: [
            '/images/ui-work-3-1.jpg',
        ],
    },
    {
        id: '4',
        position: 'UX/UI Design — Animation',
        company: 'Company Name 3',
        companyLogo: '/images/company-logo-3.svg',
        location: 'Remote',
        startDate: 'Jul 2024',
        endDate: 'Aug 2024',
        status: 'in-progress',
        description: 'Element animation and interfaces...',
        tasks: [
            'Creating micro-interactions',
            'Transition animations',
            'Performance optimization',
            'Animation documentation',
        ],
        technologies: ['After Effects', 'Lottie', 'Framer Motion', 'CSS Animations'],
        uiImages: [
            '/images/ui-work-3-1.jpg',
        ],
    },
];