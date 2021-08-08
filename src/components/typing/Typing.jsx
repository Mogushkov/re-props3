import PropTypes from 'prop-types';

export default function Typing({ from, message }) {
    return (
      <li>
        <div className="message-data">
          <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
          <span className="message-data-time">{message.time}</span>
        </div>
        <div className="typing">
          <i className="fa fa-circle online" />
          <i className="fa fa-circle online" />
          <i className="fa fa-circle online" />
        </div>
      </li>
    );
  }
  
  Typing.propTypes = {
    from: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    message: PropTypes.shape({
      time: PropTypes.string,
    }).isRequired,
  }