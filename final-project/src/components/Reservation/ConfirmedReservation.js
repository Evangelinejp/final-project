import check from '../../assets/images/green_check.png';
import banner from "../../assets/images/restaurant.jpg";

function ConfirmedReservation() {
    return(
        <div className="confirmation">
        <div> <img className="banner" src={banner} alt="the restaurant"/></div>
        <div className="check">
        <div> <img className="checkmark" src={check}  alt="a green checkmark"/> </div>
        <h1>Reservation Confirmed</h1>
        </div>
        </div>
    )
}

export default ConfirmedReservation;