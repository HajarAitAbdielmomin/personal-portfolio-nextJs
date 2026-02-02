import React from 'react';
import Image from 'next/image';

interface InternshipCardProps {
    position: string;
    company: string;
    companyLogo: string;
    location: string;
    startDate: string;
    endDate: string;
    tasks: string[];
    technologies: string[];
    uiImages?: string[];
    status?: 'completed' | 'in-progress' | 'upcoming';
    description?: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
                                                           position,
                                                           company,
                                                           companyLogo,
                                                           location,
                                                           startDate,
                                                           endDate,
                                                           tasks,
                                                           technologies,
                                                           uiImages = [],
                                                           status = 'completed',
                                                           description,
                                                       }) => {
    const statusColors = {
        completed: 'bg-green-500',
        'in-progress': 'bg-blue-600',
        upcoming: 'bg-gray-400',
    };

    const statusLabels = {
        completed: 'Completed',
        'in-progress': 'In Progress',
        upcoming: 'Upcoming',
    };

    return (
        <div className="relative flex gap-6 pb-12">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-linear-to-br from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 relative z-10"></div>
                <div className="w-1 h-24 bg-linear-to-b from-blue-400 to-purple-400 mt-4"></div>
            </div>

            {/* Card content */}
            <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Header section */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {position}
                        </h3>
                        <div className="flex items-center gap-2">
                            {companyLogo && (
                                <Image
                                    src={companyLogo}
                                    alt={`${company} logo`}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            )}
                            <p className="text-sm text-gray-600 font-medium">
                                {company}
                            </p>
                        </div>
                        {location && (
                            <div className="flex items-center gap-1 mt-1">
                                <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-xs text-gray-500">
                                    {location}
                                </p>
                            </div>
                        )}
                    </div>
                    <span
                        className={`${statusColors[status]} text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4`}
                    >
            {statusLabels[status]}
          </span>
                </div>

                {/* Date range */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span className="font-semibold">{startDate}</span>
                    <span>→</span>
                    <span className="font-semibold">{endDate}</span>
                </div>

                {/* Description if provided */}
                {description && (
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Tasks section */}
                {tasks.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                            Completed Tasks:
                        </h4>
                        <ul className="space-y-1">
                            {tasks.map((task, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-gray-700 flex items-start gap-2"
                                >
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies section */}
                {technologies.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                            Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* UI Images section */}
                {uiImages.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                            Work Examples:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {uiImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative h-40 bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src={image}
                                        alt={`UI work ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternshipCard;