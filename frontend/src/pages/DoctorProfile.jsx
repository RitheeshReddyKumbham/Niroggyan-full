import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorProfile = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://niroggyan-backend-019n.onrender.com/api/doctors/${id}`)
            .then((res) => setDoctor(res.data))
            .catch(() => setDoctor(null))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="p-4 text-center text-red-600 font-semibold">
                Doctor not found.
            </div>
        );
    }

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md border border-gray-100">
            <div className="flex flex-col items-center gap-3">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 object-cover rounded-full shadow"
                />
                <h2 className="text-2xl font-bold text-blue-800">{doctor.name}</h2>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
            </div>

            <div className="mt-6 space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">About</h3>
                    <p className="text-gray-700 mt-1 leading-relaxed">{doctor.bio}</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Availability</h3>
                    {doctor.schedule.length > 0 ? (
                        <ul className="list-disc ml-6 text-gray-700 mt-1 space-y-1">
                            {doctor.schedule.map((slot) => (
                                <li key={slot}>{new Date(slot).toLocaleString()}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No slots available.</p>
                    )}
                </div>

                <div className="text-center mt-6">
                    <Link
                        to={`/book/${doctor.id}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow transition-transform duration-200 hover:scale-105"
                    >
                        Book Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
