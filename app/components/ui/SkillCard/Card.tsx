import React from 'react';
import * as Icons from '@icons-pack/react-simple-icons';

interface SkillCardProps {
    name: string;
    iconName: string;
    category?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, iconName, category }) => {
    const iconKey = `Si${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}` as keyof typeof Icons;
    const IconComponent = Icons[iconKey] as React.ElementType | undefined;

    return (
        <div className="flex flex-col items-center justify-center group cursor-pointer">
            {/* Icon Container */}
            <div className="relative w-20 h-20 mb-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl">
                {IconComponent ? (
                    <IconComponent size={40} color="default" />
                ) : (
                    <span className="text-xs text-gray-400">{name}</span>
                )}
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Skill Name */}
            <h4 className="text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                {name}
            </h4>

            {/* Optional: Category label */}
            {category && (
                <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category}
                </p>
            )}
        </div>
    );
};

export default SkillCard;