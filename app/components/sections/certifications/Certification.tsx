"use client"
import React from 'react';
import CertificationCard from '@/app/components/ui/CertificationCard/Card';
import { certificationsData } from '@/app/components/sections/certifications/certificationsData';

const Certifications: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-linear-to-b from-white via-blue-50/30 to-white dark:from-gray-50 dark:via-blue-100 dark:to-gray-50">
                {/* Styled horizontal line */}
                <div className="flex items-center mb-20">
                    <div className="grow border-t-2 border-gray-300"></div>
                    <div className="mx-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="grow border-t-2 border-gray-300"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                        My Certifications
                    </h2>
                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-700 mb-4">
                        Explore a collection of my certifications and course completions, each crafted to deliver excellence, user-centric experiences.
                    </p>
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationsData.map((certification) => (
                        <CertificationCard
                            key={certification.id}
                            id={certification.id}
                            organizationName={certification.organizationName}
                            organizationLogo={certification.organizationLogo}
                            courseName={certification.courseName}
                            certificationImage={certification.certificationImage}
                        />
                    ))}
                </div>

                {/* Optional: View All Button */}
                <div className="flex justify-center mt-12">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        View All Certifications
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Certifications;