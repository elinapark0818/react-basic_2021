import React, {Component} from 'react';

class Habit extends Component {
    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>;
                <span className="habit-count">9</span>;
                <button className="habit-button habit-increase">
                    <i className="fas fa-plus-square"/>
                </button>
                <button className="habit-button habit-decrease">
                    <i className="fas fa-minus-square"/>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"/>
                </button>
            </li>
        );
    }
}

export default Habit;