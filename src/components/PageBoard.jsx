import styles from "./styles/PageBoard.module.css"
import { Event } from "./Event.jsx";

export const PageBoard = ({ events, icons }) => {
    
    return <div className={styles.container}>
        <h1 className={styles.title}>24th Core Worlds Coalition Conference</h1>
        <ul className={styles.list}>
            {events.map((item, index) => (
            <Event 
                key={index}
                name={item.name} 
                start={item.time.start} 
                end={item.time.end} 
                type={item.type} 
                location={item.location} 
                speaker={item.speaker} 
                icons={icons} 
            />
            ))}
        </ul>
    </div>
}