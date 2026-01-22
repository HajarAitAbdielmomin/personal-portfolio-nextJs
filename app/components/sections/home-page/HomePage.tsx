// app/components/sections/home-page/HomePage.tsx
import Image from 'next/image';
import { FaLinkedin, FaBehance, FaGithub, FaMediumM } from 'react-icons/fa';
import Link from "next/link";

export default function HomePage() {
    return (
        <section className="w-full min-h-screen flex items-start justify-center pt-20">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-16">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold">
                            Hi,
                            <br />
                            I&#39;m <span className="text-blue-600">Hajar</span>
                            <br />
                            <span className="text-gray-900">Software Engineer</span>
                        </h1>

                        <Link href="/resume/cv.pdf" download="Hajar_CV" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors" >
                            Download Resume
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-8">
                            <a
                                href="https://linkedin.com/in/hajar-ait-abdielmomin-98638421b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://medium.com/@hajar.aitabdielmomin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <FaMediumM size={24} />
                            </a>
                            <a
                                href="https://github.com/HajarAitAbdielmomin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Blue blob background */}
                            <div className="absolute inset-0 bg-blue-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transform scale-110"></div>

                            {/* Profile Image */}
                            <div className="relative w-80 h-80 rounded-full overflow-hidden">
                                <Image
                                    src="/profile.jpg" // Add your image to public folder
                                    alt="AitHajar"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}