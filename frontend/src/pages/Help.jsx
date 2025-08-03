import React from 'react';
import { PhoneIcon, ExclamationTriangleIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Help = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Need Help?</h2>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Welcome to the <strong>MedConnect Hospital Help Center</strong>. Below are answers to frequently asked questions.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-3">
                    <CalendarIcon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-blue-600">How do I book an appointment?</h3>
                        <p className="text-gray-700 mt-1">
                            Go to the doctor’s profile page and click the <strong>“Book Appointment”</strong> button. Fill out your details and submit the form.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <PhoneIcon className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-blue-600">Can I cancel or reschedule?</h3>
                        <p className="text-gray-700 mt-1">
                            Currently, cancellations or rescheduling must be done by contacting the hospital front desk at <strong>+91-98765-43210</strong>.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-red-600">Need emergency assistance?</h3>
                        <p className="text-red-600 mt-1">
                            Call <strong>108</strong> or visit the nearest emergency room immediately.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
