import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimeNotSelected() {
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
            (props.time.value !== "Select a time" && props.guests.value !== "" && props.location.value !== "")
        )
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            props.handleSubmit(e);
        }
        else {
            props.timeChange({target: {value: props.time.value}});
            props.guestsChange({target: {value: props.guests.value}});
            props.locationChange({target: {value: props.location.value}});
        }
    }

    return(
        <div className="bookingSection">
        <div><h1>Reserve your spot here!</h1></div>
        <div>
        <form onSubmit={submitForm} className="bookingForm">
            <div>
            <label htmlFor="res-date">What day?</label>
            <DatePicker id="res-date" selected={props.date} onChange={props.dateChange} wrapperClassName="datePicker"/>
            </div>

            <div>
            <label htmlFor="res-time">What time?</label>
            <select id="res-time" value={props.time.value} onChange={props.timeChange} className={(props.time.value === "Select a time" && props.time.isTouched === true) ? 'error' : ''}>
                {props.availableTimes.times.map((e, i) => <option key={i}>{e}</option>)}
            </select>
            {(props.time.value === "Select a time" && props.time.isTouched === true) ? <TimeNotSelected/> : null}
            </div>

            <div>
            <label htmlFor="guests">Who's coming for dinner?</label>
            <input type="number" min="1" max="10" id="guests" value={props.guests.value} onChange={props.guestsChange} className={(props.guests.value === "" && props.guests.isTouched === true) ? 'error' : ''}/>
            {(props.guests.value === "" && props.guests.isTouched === true)? <NumberNotSelected/> : null}
            </div>

            <div>
            <label htmlFor="location">Where do you wanna eat?</label>
            <select id="location" value={props.location.value} onChange={props.locationChange} className={(props.location.value === "" && props.location.isTouched === true) ? 'error' : ''}>
                <option>Inside</option>
                <option>Outside</option>
            </select>
            {(props.location.value === "" && props.location.isTouched === true) ? <LocationNotSelected/> : null}
            </div>

            <input className="submit" type="submit" value="Make Your Reservation!" aria-label="On Click" />
        </form>
        </div>
        </div>
    )
}

export default BookingForm;