import SkillLogo from "@/app/components/ui/SkillCard/SkillLogo";
import {skillGroups} from "@/app/lib/data";
export default function Skills() {

    return (
        <section id="skills" className="w-full py-20 px-8 bg-white">
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
                        My Skills
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What I bring to the table
                        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
                    </h2>
                </div>

                {/* Skills */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((skill, index) => (

                                    <SkillLogo
                                        key={index}
                                        icon={skill.icon}
                                        name={skill.name}
                                        color={skill.color}
                                    />
                    ))}
                    </div>

            </div>
        </section>
    );
}