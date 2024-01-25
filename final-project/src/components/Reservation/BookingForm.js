function BookingForm(props) {


    return(
        <form>
            <label htmlFor="res-date">Choose Date</label>
            <input type="date" id="res-date" value={props.date} onChange={props.dateChange}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={props.time} onChange={props.timeChange}>
                {props.availableTimes.map((e, i) => <option key={i}>{e}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" min="1" max="10" id="guests" value={props.guests} onChange={props.guestsChange}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={props.occasion} onChange={props.occasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingForm;