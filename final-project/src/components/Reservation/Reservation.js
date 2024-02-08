import React, { useState, useReducer } from 'react';
import BookingForm from "./BookingForm.js";

const availableUpdate = (state, action) => {
    return {times: state.times};
}

function Home() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [location, setLocation] = useState("");


    const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const [availableTimes, updateAvailabilities] = useReducer(availableUpdate, initialTimes);

    const dateChange = (e) => {
        setDate(e)
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

export default Home;