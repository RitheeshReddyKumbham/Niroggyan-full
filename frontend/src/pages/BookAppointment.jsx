import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [form, setForm] = useState({ name: '', email: '', dateTime: '' });
    const [confirmed, setConfirmed] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://niroggyan-backend-019n.onrender.com/api/doctors/${id}`)
            .then((res) => setDoctor(res.data))
            .catch(() => setDoctor(null))
            .finally(() => setLoading(false));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.dateTime) {
            setConfirmed(true);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="text-center text-red-600 text-lg mt-10 font-semibold">
                ❌ Doctor not found.
            </div>
        );
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Book Appointment with <br />
                <span className="text-blue-900">{doctor.name}</span>
            </h2>

            {confirmed ? (
                <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded-xl text-center shadow-md animate-fade-in transition duration-500">
                    ✅ Your appointment with <span className="font-bold">{doctor.name}</span> is confirmed on <br />
                    <span className="text-lg font-semibold">{new Date(form.dateTime).toLocaleString()}</span>.
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 bg-white p-6 rounded-xl shadow-md border border-blue-100 transition-all ease-in-out duration-300"
                >
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />

                    <input
                        type="datetime-local"
                        className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                        value={form.dateTime}
                        onChange={(e) => setForm({ ...form, dateTime: e.target.value })}
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
                    >
                        Confirm Appointment
                    </button>
                </form>
            )}
        </div>
    );
};

export default BookAppointment;
