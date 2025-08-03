import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-700 text-white px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Hospital Name */}
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide hover:text-blue-200 transition duration-200"
                >
                    🏥 MedConnect Hospital
                </Link>

                {/* Help Button with scale animation */}
                <Link
                    to="/help"
                    className="bg-white text-blue-700 px-4 py-2 rounded-3xl font-semibold shadow transition duration-300 animate-soft-scale"
                >
                    Help
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
