import React from 'react';
import Card from '@/app/components/ui/SkillCard/Card';
import { skillsData } from '@/app/components/sections/skills/skillsData';

const Skills: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* Badge */}
                    <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-800">
              Skills
            </span>
                    </div>

                    {/* Main heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 max-w-3xl mx-auto">
                        The skills, tools and technologies I am really good at:
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise across multiple domains
                    </p>
                </div>

                {/* Skills by Category */}
                <div className="space-y-16">
                    {skillsData.map((category) => (
                        <div key={category.id}>
                            {/* Category Title */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {category.description}
                                </p>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                                {category.skills.map((skill) => (
                                    <Card
                                        key={skill.id}
                                        name={skill.name}
                                        iconName={skill.iconName}
                                        category={skill.category}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: CTA section */}
                <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Looking to explore more about my skills or discuss a project?
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;