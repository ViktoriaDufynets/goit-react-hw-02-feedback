import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
    <div>
        <ul className={css.stats}>
          <li><p className={css.stat}>Good: {good}</p></li>
          <li><p className={css.stat}>Neutral: {neutral}</p></li>
          <li><p className={css.stat}>Bad: {bad}</p></li>
          <li><p className={css.stat}>Total: {total}</p></li>
          <li><p className={css.stat}>Positive feedback: {percentage}%</p></li>
        </ul>
  </div>  
)};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;

