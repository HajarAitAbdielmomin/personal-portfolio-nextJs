import HomePage from './components/sections/home-page/HomePage';
import Education from "@/app/components/sections/education/Educations";

export default function Page() {
    return (
        <main className="bg-gray-50">
            <HomePage />
            <Education />

            {/* Add other sections here as you build them */}
        </main>
    );
}