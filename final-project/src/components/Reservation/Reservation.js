import React, { useState, useReducer } from 'react';
import BookingForm from "./BookingForm.js";

const availableUpdate = (state, action) => {
    return {times: state.times};
}

function Home() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");


    const initialTimes = ["17:00", "18:00", "19:30", "20:00", "21:00", "22:00"];

    const [availableTimes, updateAvailabilities] = useReducer(availableUpdate, initialTimes);

    const dateChange = (e) => {
        setDate(e.target.value)
      }

    const timeChange = (e) => {
        setTime(e.target.value)
    }

    const guestsChange = (e) => {
        setGuests(e.target.value)
    }

    const occasionChange = (e) => {
        setOccasion(e.target.value)
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
                occasion={occasion}
                occasionChange={occasionChange}
                availableTimes={availableTimes}
            />
        </main>
    )
}

export default Home;