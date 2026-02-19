export interface Certification {
    id: string;
    organizationName: string;
    organizationLogo: string;
    courseName: string;
    certificationImage: string;
}

export const certificationsData: Certification[] = [
    {
        id: '1',
        organizationName: 'Google',
        organizationLogo: '/logos/google-logo.svg',
        courseName: 'UX Design Professional Certificate',
        certificationImage: '/certifications/google-ux-design.jpg',
    },
    {
        id: '2',
        organizationName: 'Figma',
        organizationLogo: '/logos/figma-logo.svg',
        courseName: 'Advanced UI/UX Design with Figma',
        certificationImage: '/certifications/figma-certification.jpg',
    },
    {
        id: '3',
        organizationName: 'Coursera',
        organizationLogo: '/logos/coursera-logo.svg',
        courseName: 'Web Design for Everybody: Basics of Web Development & Coding',
        certificationImage: '/certifications/coursera-web-design.jpg',
    },
    {
        id: '4',
        organizationName: 'Adobe',
        organizationLogo: '/logos/adobe-logo.svg',
        courseName: 'Adobe XD Masterclass - UI/UX Design',
        certificationImage: '/certifications/adobe-xd-certification.jpg',
    },
    {
        id: '5',
        organizationName: 'Udemy',
        organizationLogo: '/logos/udemy-logo.svg',
        courseName: 'The Complete Web Designer Course 2.0',
        certificationImage: '/certifications/udemy-web-design.jpg',
    },
    {
        id: '6',
        organizationName: 'LinkedIn Learning',
        organizationLogo: '/logos/linkedin-logo.svg',
        courseName: 'Advanced CSS Techniques for Modern Web Design',
        certificationImage: '/certifications/linkedin-css-advanced.jpg',
    },
];