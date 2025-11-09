import React, { useState } from "react";

const BookService = () => {
  const [form, setForm] = useState({
    city: "",
    serviceCenter: "",
    serviceType: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${form.serviceType} on ${form.date} at ${form.time}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center">Book a Service</h2>

        <input
          name="city"
          placeholder="City (e.g. Bengaluru)"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="serviceCenter"
          placeholder="Service Center"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="serviceType"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Service Type</option>
          <option>Basic</option>
          <option>Full Service</option>
          <option>Oil Change</option>
          <option>Engine Repair</option>
        </select>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookService;
