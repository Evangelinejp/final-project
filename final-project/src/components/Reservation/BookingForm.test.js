import { fireEvent, render, screen } from "@testing-library/react";
import {within}  from '@testing-library/dom';
import Reservation from './Reservation';
import BookingForm from './BookingForm';
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));



test('Renders the BookingForm heading', () => {
    render(<Reservation />);
    const headingElement = screen.getByText("Reserve your spot here!");
    expect(headingElement).toBeInTheDocument();
})

test('submitting works', () => {
    const placeholderData="0";
    const placeholderArray=['0', '1'];
    const placeholderDay = new Date();
    const placeholderTimes = {times: ['10:30']};
    const placeholderFn = jest.fn();

    const submit = jest.fn();
    render(<BookingForm
                date={placeholderDay}
                dateChange={placeholderFn}
                time={placeholderData}
                timeChange={placeholderFn}
                guests={placeholderArray}
                guestsChange={placeholderFn}
                location={placeholderArray}
                locationChange={placeholderFn}
                availableTimes={placeholderTimes}
                handleSubmit={submit}
            />);

    const submitButton = screen.getByDisplayValue('Make Your Reservation!');
    fireEvent.click(submitButton);

    expect(submit).toHaveBeenCalled();
})

test('times get initialized properly', () => {
    render(<Reservation />);
    const dropdown = screen.getByLabelText("What time?")
    expect(dropdown.length).toBeGreaterThanOrEqual(3); //would be 1 if the times didn't get initialized
})

test('times get updated properly', () => {
    render(<Reservation/>);
    const date = screen.getByLabelText("What day?");
    fireEvent.change(date, {target: {value: '01/01/2024'}});

    const dropdown = screen.getByLabelText("What time?");
    fireEvent.click(dropdown);
    const dropdownOptions = within(screen.getByLabelText("What time?")).getAllByRole("option");
    expect(dropdownOptions.map((e, i) =>
        e.text
    )).toEqual(["Select a time", "17:00", "18:00", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:30", "23:30"]);

})

test('time validation works', () => {
    render(<Reservation/>);
    const button = screen.getByText("Make Your Reservation!");
    fireEvent.click(button);

    const errorMessage = screen.getByText("Please select a time.");
    expect(errorMessage).toBeInTheDocument;
})

test('time validation no false positive', () => {
    render(<Reservation/>);
    const button = screen.getByText("Make Your Reservation!");

    //select date and time
    const date = screen.getByLabelText("What day?");
    fireEvent.change(date, {target: {value: '01/01/2024'}});

    const time = screen.getByLabelText("What time?");
    fireEvent.change(time, {target: {value: "17:00"}});

    fireEvent.click(button);

    expect(screen.queryByText("Please select a time.")).not.toBeInTheDocument();
})

test('party size validation works', () => {
    render(<Reservation/>);
    const button = screen.getByText("Make Your Reservation!");

    fireEvent.click(button);
    const errorMessage = screen.getByText("Please select a number.")
    expect(errorMessage).toBeInTheDocument;
})

test('party size no false positive', () => {
    render(<Reservation/>);
    const button = screen.getByText("Make Your Reservation!");

    //select a party size
    const party = screen.getByLabelText("Who's coming for dinner?");
    fireEvent.change(party, {target: {value: 3}});

    fireEvent.click(button);
    expect(screen.queryByText("Please select a number.")).not.toBeInTheDocument();
})

test('location validation', () => {
    render(<Reservation/>);
    const button = screen.getByText("Make Your Reservation!");

    //select invalid location
    const location = screen.getByLabelText("Where do you wanna eat?");
    fireEvent.change(location, {target: {value: 0}});

    fireEvent.click(button);
    expect(screen.queryByText("Please select a location.")).toBeInTheDocument();
})

test('location no false positive', () => {
    render(<Reservation/>);
    const button = screen.getByText("Make Your Reservation!");

    //select invalid location
    const location = screen.getByLabelText("Where do you wanna eat?");
    fireEvent.change(location, {target: {value: "Outside"}});

    fireEvent.click(button);
    expect(screen.queryByText("Please select a location.")).not.toBeInTheDocument();
})
