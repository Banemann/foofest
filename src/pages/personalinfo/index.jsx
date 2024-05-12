import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Personalinfo.module.css';

function PersonalInfo() {
  const router = useRouter();
  const { area, tickets } = router.query;
  const [info, setInfo] = useState(Array(Number(tickets)).fill({ name: '', email: '' }));

  const handleChange = (index, field, value) => {
    const newInfo = [];
    newInfo[index][field] = value;
    setInfo(newInfo);
  };

  const handleSubmit = () => {
    console.log();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Personal Info for {area}</h1>
      {info.map((ticket, index) => (
        <div key={index} className={styles.form}>
          <h2 className={styles.subtitle}>Ticket {index + 1}</h2>
          <input
            type="text"
            placeholder="Name"
            value={ticket.name}
            onChange={e => handleChange(index, 'name', e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={ticket.email}
            onChange={e => handleChange(index, 'email', e.target.value)}
            className={styles.input}
          />
        </div>
      ))}
      <button onClick={handleSubmit} className={styles.button}>Submit</button>
    </div>
  );
}

export default PersonalInfo;