import React from 'react';
import Image from 'next/image';

interface CertificationCardProps {
    id: string;
    organizationName: string;
    organizationLogo: string;
    courseName: string;
    certificationImage: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
                                                                 id,
                                                                 organizationName,
                                                                 organizationLogo,
                                                                 courseName,
                                                                 certificationImage,
                                                             }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Certification Image */}
            <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <Image
                    src={certificationImage}
                    alt={courseName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>

            {/* Card Content */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                {/* Organization Logo and Name */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 bg-white dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                            src={organizationLogo}
                            alt={organizationName}
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 truncate">
                            {organizationName}
                        </p>
                    </div>
                </div>

                {/* Course Name */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 line-clamp-3">
                    {courseName}
                </h3>

                {/* View Certificate Button */}
                <button
                    className={`w-full py-2.5 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform ${
                        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-90'
                    }`}
                >
                    View Certificate
                </button>
            </div>

            {/* Badge indicator */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Certified
            </div>
        </div>
    );
};

export default CertificationCard;