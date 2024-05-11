import React, { useEffect, useState } from 'react';
import { Schedule } from '../../Schedule.js';
import styles from './Program.module.css';
import Header from '../../app/components/Header';
import Link from 'next/link';

function BandProgram() {
  const [schedule, setSchedule] = useState({});
  const [filterScene, setFilterScene] = useState('');

  useEffect(() => {
    const fest = {};
    const schedule = new Schedule(fest);
    setSchedule(schedule.slots);
  }, []);

  
  const danskeUgedage = {
    mon: 'Mandag',
    tue: 'Tirsdag',
    wed: 'Onsdag',
    thu: 'Torsdag',
    fri: 'Fredag',
    sat: 'Lørdag',
    sun: 'Søndag',
  };

  
  const translateSlot = slot => {
    return slot === 'break' ? 'Pause' : slot;
  };

  const scenes = [...new Set(Object.keys(schedule))];

  const filteredSchedule = Object.entries(schedule)
    .filter(([stage]) => stage === (filterScene || scenes[0]))
    .sort(([stageA], [stageB]) => stageA.localeCompare(stageB));

  return (
    <main>
      <Header />
      <div className={styles.Contentbox}>
        <div className={styles.Filterbox}>
          <div>
            {scenes.map(scene => (
              <h2 key={scene} onClick={() => setFilterScene(scene)}>
                {scene}
              </h2>
            ))}
          </div>
        </div>

        {filteredSchedule.map(([stage, days]) => (
          <div className={styles.Sceneprogrambox} key={stage}>
            <div className={styles.Sceneh2}>
              <h2>{stage}</h2>
            </div>
            <div className={styles.Dayschedule}>
              {Object.entries(days).map(([day, slots]) => (
                <div key={day}>
                  <h3>{danskeUgedage[day]}</h3>
                  {slots.map((slot, i) => (
                    <p key={i}>
                      {slot.start} - {slot.end}:{' '}
                      {translateSlot(slot.act) !== 'Pause' ? (
                        <Link href={`/bands/${encodeURIComponent(slot.act)}`}>
                          {translateSlot(slot.act)}
                        </Link>
                      ) : (
                        translateSlot(slot.act)
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BandProgram;
