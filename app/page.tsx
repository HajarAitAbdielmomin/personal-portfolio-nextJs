import HomePage from './components/sections/home-page/HomePage';
import Education from "@/app/components/sections/education/Educations";
import Internships from "@/app/components/sections/internships/Internships";

export default function Page() {
    return (
        <main className="bg-gray-50">
            <HomePage />
            <Education />
            <Internships />
            {/* Add other sections here as you build them */}
        </main>
    );
}