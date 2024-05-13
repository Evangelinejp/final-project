import React, { useState, useReducer } from 'react';
import BookingForm from "./BookingForm.js";
import LemonMap from "./LemonMap.js";
import fakeAPI from './Script.js';
import { useNavigate } from 'react-router-dom';

const generateAvailabilities = (date) => {
    return fakeAPI.fetchAPI(date);
}

const availableUpdate = (state, action) => {
    return {
        ...state,
        times: generateAvailabilities(action.date)
    };
}

function Reservation() {

    const navigate = useNavigate();

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState({value: "Select a time", isTouched: false});
    const [guests, setGuests] = useState({value: "", isTouched: false});
    const [location, setLocation] = useState({value: "Inside", isTouched: false});

    const [availableTimes, updateAvailabilities] = useReducer(availableUpdate, {times: generateAvailabilities(date)});

    const dateChange = (e) => {
        setDate(e);
        updateAvailabilities({
            date: e
        });
      }

    const timeChange = (e) => {
        console.log(e);
        setTime({value: e.target.value, isTouched: true})
    }

    const guestsChange = (e) => {
        setGuests({value: e.target.value, isTouched: true})
    }

    const locationChange = (e) => {
        setLocation({value: e.target.value, isTouched: true})
    }

    const handleSubmit = (e) => {
        if(fakeAPI.submitAPI(e)) {
            navigate('/confirmedreservation');
        }
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