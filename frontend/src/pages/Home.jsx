import { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import axios from 'axios';

const Home = () => {
    const [search, setSearch] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://niroggyan-backend-019n.onrender.com/api/doctors')
            .then((res) => setDoctors(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const filtered = doctors.filter(
        (d) =>
            d.name.toLowerCase().includes(search.toLowerCase()) ||
            d.specialization.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center transition-all duration-300">
                🩺 Find Your Specialist
            </h1>

            <input
                type="text"
                placeholder="Search by name or specialization..."
                className="w-full p-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out mb-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out">
                    {filtered.length > 0 ? (
                        filtered.map((doc) => <DoctorCard key={doc.id} doctor={doc} />)
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            No doctors found.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
