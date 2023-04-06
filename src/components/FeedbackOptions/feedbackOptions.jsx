import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className="btn-container">
      <ul className="btn-list">
        {options.map(tytle => (
          <li className="btn-item" key={tytle}>
            {}{' '}
            <button
              className="btn-select"
              type="button"
              onClick={() => onLeaveFeedback(tytle)}
            >
              {tytle}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
