import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => (
    <Link
        to={`/doctor/${doctor.id}`}
        className="bg-white border border-blue-100 rounded-2xl shadow-md p-5 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-blue-300"
    >
        <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 object-cover rounded-full border-4 border-blue-200 shadow mb-4"
        />
        <h2 className="text-lg font-bold text-blue-800">{doctor.name}</h2>
        <p className="text-blue-600 font-medium">{doctor.specialization}</p>
        <p
            className={`text-sm mt-1 font-medium ${doctor.availability === 'Available Today'
                    ? 'text-green-600'
                    : doctor.availability === 'On Leave'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                }`}
        >
            {doctor.availability}
        </p>
    </Link>
);

export default DoctorCard;
