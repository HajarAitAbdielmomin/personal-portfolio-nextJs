export interface Education {
    logo: string;
    schoolName: string;
    location: string;
    degree: string;
    major: string;
    startYear: string;
    endYear: string;
    isGraduated?: boolean;
    footerText?: string;
}

export const educationsData: Education[] = [
    {
        logo: '/school-logo/bts.png',
        schoolName: 'Ibn Sina Technical High School - BTS',
        location: 'Kenitra, Morocco',
        degree: 'Higher Technician Certificate',
        major: 'Information System Development',
        startYear: '2018',
        endYear: '2020',
        isGraduated: true,
    },
    {
        logo: '/school-logo/UIT.png',
        schoolName: 'Ibn Tofail University - Faculty of Sciences',
        location: 'Kenitra, Morocco',
        degree: 'Bachelor’s Degree',
        major: 'Mathematics & Computer Sciences',
        startYear: '2020',
        endYear: '2021',
        isGraduated: true,
    },
    {
        logo: '/school-logo/ensa.png',
        schoolName: 'The National School of Applied Sciences',
        location: 'Berrechid, Morocco',
        degree: 'Engineer’s Degree',
        major: 'Computer Engineering',
        startYear: '2021',
        endYear: '2024',
        isGraduated: true,
    },
];