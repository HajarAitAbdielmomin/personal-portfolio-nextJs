import Image from 'next/image';

interface EducationCardProps {
    logo: string;
    schoolName: any;
    location: string;
    degree: string;
    major: string;
    startYear: string;
    endYear: string;
    isGraduated?: boolean;
}

export default function EducationCard({
                                          logo,
                                          schoolName,
                                          location,
                                          degree,
                                          major,
                                          startYear,
                                          endYear,
                                          isGraduated = false,
                                      }: EducationCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                {/* Logo */}
                <div className="w-14 h-14   flex items-center justify-center overflow-hidden ">
                    <Image
                        src={logo}
                        alt={schoolName}
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                </div>

                {/* Save Button */}
                <button
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        isGraduated
                            ? 'bg-green-400 text-white'
                            : 'bg-yellow-200 text-black'
                    }`}
                >
                    {isGraduated ? 'Graduated ✓' : 'Ongoing'}
                </button>
            </div>

            {/* School Info */}
            <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{schoolName}</h3>
                <p className="text-sm text-gray-500 mb-3">{location}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{degree}</h4>

                {/* Major Tag */}
                <div className="inline-block">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            {major}
          </span>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                    <p className="text-sm text-gray-500">{startYear} - {endYear}</p>
                </div>
            </div>
        </div>
    );
}