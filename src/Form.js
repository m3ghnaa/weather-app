import React from 'react';

const Form = ({ fetchWeather }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const cityInput = e.target.city.value;
        fetchWeather(cityInput);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" placeholder="Enter city" required />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
