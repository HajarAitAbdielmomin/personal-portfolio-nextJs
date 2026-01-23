import EducationCard from "@/app/components/ui/EducationCard/Card";


export default function Education() {
    const educationData = [

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

    return (
        <section id="education" className="w-full py-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Styled horizontal line */}
                <div className="flex items-center mb-20">
                    <div className="flex-grow border-t-2 border-gray-300"></div>
                    <div className="mx-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex-grow border-t-2 border-gray-300"></div>
                </div>

                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                        My journey
                    </p>
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Academic Path
                        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                    </h2>
                </div>

                {/* Education Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {educationData.map((edu, index) => (
                        <EducationCard
                            key={index}
                            logo={edu.logo}
                            schoolName={edu.schoolName}
                            location={edu.location}
                            degree={edu.degree}
                            major={edu.major}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            isGraduated={edu.isGraduated}
                        />
                    ))}
                </div>
            </div>
        </section>
);
}