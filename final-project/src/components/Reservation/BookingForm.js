import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimeErrorMessage() {
    return(
        <div className="formErrorMessage">
            <p>Please select a time.</p>
        </div>
    )
}

function NumberNotSelected() {
    return (
        <div className="formErrorMessage">
            <p>Please select a number.</p>
        </div>
    )
}

function LocationNotSelected() {
    return (
        <div className="formErrorMessage">
            <p>Please select a location.</p>
        </div>
    )
}


function BookingForm(props) {

    function isFormValid() {
        return(
            (props.time !== "Select a time" && props.guests !== "" && props.location !== "")
        )
    }

    return(
        <div className="bookingSection">
        <div><h1>Reserve your spot here!</h1></div>
        <div>
        <form onSubmit={props.handleSubmit} className="bookingForm">
            <div>
            <label htmlFor="res-date">What day?</label>
            <DatePicker id="res-date" selected={props.date} onChange={props.dateChange} wrapperClassName="datePicker"/>
            </div>

            <div>
            <label htmlFor="res-time">What time?</label>
            <select id="res-time" value={props.time} onChange={props.timeChange}>
                {props.availableTimes.times.map((e, i) => <option key={i}>{e}</option>)}
            </select>
            {props.time === "Select a time" ? <TimeErrorMessage/> : null}
            </div>

            <div>
            <label htmlFor="guests">Who's coming for dinner?</label>
            <input type="number" min="1" max="10" id="guests" value={props.guests} onChange={props.guestsChange}/>
            {props.guests === "" ? <NumberNotSelected/> : null}
            </div>

            <div>
            <label htmlFor="location">Where do you wanna eat?</label>
            <select id="location" value={props.location} onChange={props.locationChange}>
                <option>Inside</option>
                <option>Outside</option>
            </select>
            {props.location === "" ? <LocationNotSelected/> : null}
            </div>

            <input className="submit" type="submit" value="Make Your Reservation!" disabled={!isFormValid()} />
        </form>
        </div>
        </div>
    )
}

export default BookingForm;