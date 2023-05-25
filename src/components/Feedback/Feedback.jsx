import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
    return (
    <ul className={css.buttons}>
    {options.map(option => (
      <li className={css.buttonStyle} key={option}>
      <button className={css.button} name={option} onClick={onLeaveFeedback}>{option}</button>
      </li>
      ))}
      <canvas className={css.confetti}></canvas>
    </ul>
 
)}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;

//Good🙂

