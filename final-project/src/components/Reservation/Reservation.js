import React, { useState, useReducer } from 'react';
import BookingForm from "./BookingForm.js";
import LemonMap from "./LemonMap.js";
import fakeAPI from './Script.js';

const availableUpdate = (state, action) => {
    return {
        ...state,
        times: generateAvailabilities(action.date)
    };
}

const generateAvailabilities = (date) => {
    return fakeAPI.fetchAPI(date);
}

function Reservation() {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [location, setLocation] = useState("");

    const [availableTimes, updateAvailabilities] = useReducer(availableUpdate, {times: generateAvailabilities(date)});

    const dateChange = (e) => {
        setDate(e);
        updateAvailabilities({
            date: e
        });
      }

    const timeChange = (e) => {
        setTime(e.target.value)
    }

    const guestsChange = (e) => {
        setGuests(e.target.value)
    }

    const locationChange = (e) => {
        setLocation(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Reservation succesfully submitted!');
    }

    return(
        <main className="main">
            <LemonMap/>
            <BookingForm
                date={date}
                dateChange={dateChange}
                time={time}
                timeChange={timeChange}
                guests={guests}
                guestsChange={guestsChange}
                location={location}
                locationChange={locationChange}
                availableTimes={availableTimes}
                handleSubmit={handleSubmit}
            />
        </main>
    )
}

export default Reservation;