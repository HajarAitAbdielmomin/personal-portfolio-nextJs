import HomePage from './components/sections/home-page/HomePage';
import Education from "@/app/components/sections/education/Educations";
import Internships from "@/app/components/sections/internships/Internships";
import Certifications from "@/app/components/sections/certifications/Certification";
import Skills from "@/app/components/sections/skills/Skills";

export default function Page() {
    return (
        <main className="bg-gray-50">
            <HomePage />
            <Education />
            <Internships />
            <Certifications />
            <Skills />
            {/* Add other sections here as you build them */}
        </main>
    );
}