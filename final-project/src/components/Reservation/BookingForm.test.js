import { fireEvent, render, screen } from "@testing-library/react";
import Reservation from './Reservation';
import BookingForm from './BookingForm';


test('Renders the BookingForm heading', () => {
    render(<Reservation />);
    const headingElement = screen.getByText("Choose Date");
    expect(headingElement).toBeInTheDocument();
})

test('submitting works', () => {
    const placeholderData="0";
    const placeholderArray=['0', '1'];
    const placeholderFn = jest.fn();

    const submit = jest.fn();
    render(<BookingForm
                date={placeholderData}
                dateChange={placeholderFn}
                time={placeholderData}
                timeChange={placeholderFn}
                guests={placeholderArray}
                guestsChange={placeholderFn}
                location={placeholderArray}
                locationChange={placeholderFn}
                availableTimes={placeholderArray}
                handleSubmit={submit}
            />);

    const submitButton = screen.getByDisplayValue('Make Your Reservation');
    fireEvent.click(submitButton);

    expect(submit).toHaveBeenCalled();
})