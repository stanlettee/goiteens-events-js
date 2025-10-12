import styles from './styles/Event.module.css'
import PropTypes from "prop-types";

export const Event = ({ name, start, end, type, location, speaker, Icon }) => {
  return (
    <li className={styles.event}>
      {Icon && <Icon className={styles.icon} />}
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.text}>Start: {start} - End: {end}</p>
        <p className={styles.text}>Type: {type}</p>
        <p className={styles.text}>Location: {location}</p>
        <p className={styles.text}>Speaker: {speaker}</p>
      </div>
    </li>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
};