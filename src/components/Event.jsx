import styles from './styles/Event.module.css'
import PropTypes from "prop-types";

export const Event = ({ name, start, end, type, location, speaker, icons }) => {
  const [TimeIcon, TypeIcon, LocationIcon, SpeakerIcon] = icons;
  return (
    <li className={styles.event}>
      
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
          <div className={styles.details}>
            <div className={styles.row}>
              <TimeIcon className={styles.icon} />
              <p>Start: {start} – End: {end}</p>
            </div>

            <div className={styles.row}>
              <TypeIcon className={styles.icon} />
              <p>Type: {type}</p>
            </div>

            <div className={styles.row}>
              <LocationIcon className={styles.icon} />
              <p>Location: {location}</p>
            </div>

            <div className={styles.row}>
              <SpeakerIcon className={styles.icon} />
              <p>Speaker: {speaker}</p>
            </div>
        </div>
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