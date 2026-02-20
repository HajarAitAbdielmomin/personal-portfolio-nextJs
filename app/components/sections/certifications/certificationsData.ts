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
        organizationName: 'Coursera - AWS',
        organizationLogo: '/logo/organizations/coursera.jpg',
        courseName: 'AWS Cloud Technical Essentials',
        certificationImage: '/certificates/aws.jpg',
    },
    {
        id: '2',
        organizationName: 'Oracle',
        organizationLogo: '/logo/organizations/oracle.png',
        courseName: 'Oracle Certified Professional: Java SE 17 Developer',
        certificationImage: '/certificates/java17.jpg',
    },
    {
        id: '3',
        organizationName: 'Huawei',
        organizationLogo: '/logo/organizations/huawei.png',
        courseName: 'Huawei Certified Specialist Associate Sales-IP Network',
        certificationImage: '/certificates/huawei.jpg',
    },
    {
        id: '4',
        organizationName: 'Simplilearn',
        organizationLogo: '/logo/organizations/simplilearn.jpg',
        courseName: 'Getting Started with JUnit',
        certificationImage: '/certificates/junit.jpg',
    },
    {
        id: '5',
        organizationName: 'LinkedIn Learning',
        organizationLogo: '/logo/organizations/linkedin.jpg',
        courseName: 'GitHub Career Essentials – Professional Certificate',
        certificationImage: '/certificates/github.jpg',
    },

    {
        id: '6',
        organizationName: 'Coursera',
        organizationLogo: '/logo/organizations/coursera.jpg',
        courseName: 'Introduction to Test Automation with Selenium and Java',
        certificationImage: '/certificates/selenium.jpg',
    },
    {
        id: '7',
        organizationName: 'Simplilearn',
        organizationLogo: '/logo/organizations/simplilearn.jpg',
        courseName: 'Angular Basics',
        certificationImage: '/certificates/angular.jpg',
    },
    {
        id: '8',
        organizationName: 'Coursera',
        organizationLogo: '/logo/organizations/coursera.jpg',
        courseName: 'Building CI/CD Pipelines with Jenkins (Declarative & IaC)',
        certificationImage: '/certificates/jenkins.jpg',
    },
    {
        id: '9',
        organizationName: 'Simplilearn',
        organizationLogo: '/logo/organizations/simplilearn.jpg',
        courseName: 'Containerization Basics with Docker',
        certificationImage: '/certifications/docker.jpg',
    },
];