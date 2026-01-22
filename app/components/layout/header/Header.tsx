import Link from 'next/link';
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full py-6 px-8 h-20">
            <nav className="max-w-7xl mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <div className="h-12 flex items-center">
                    <Image
                        src="/images/hajar-logo.png"
                        alt="hajar logo"
                        width={100}
                        height={2}
                        className="object-contain"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center gap-8">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#about"
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#skills"
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#works"
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                        >
                            Works
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contact"
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}