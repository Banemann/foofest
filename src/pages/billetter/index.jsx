import React, { useEffect, useState } from "react";
import { Booking } from "../../Booking.js";
import styles from "./Billetter.module.css";
import Header from "../../app/components/Header";
import { useRouter } from "next/router";

function Billetter() {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("Vælg Område");
  const [numTickets, setNumTickets] = useState(1);
  const [booking, setBooking] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fest = {};
    const booking = new Booking(fest);
    setBooking(booking);
    const areasData = booking.getData();
    setAreas(areasData);
  }, []);

  const handleReserve = () => {
    if (booking && selectedArea !== "Vælg Område" && numTickets > 0) {
      const result = booking.reserveSpot(selectedArea, numTickets);
      if (result.error) {
        alert(result.error);
      } else {
        router.push(
          `../personalinfo?area=${selectedArea}&tickets=${numTickets}`
        );
      }
    }
  };

  return (
    <main>
      <Header />
      <div className={styles.Contentbox}>
        <div>
          <div className={styles.AreaList}>
            {selectedArea !== "Vælg Område" ? (
              <h1 className={styles.SelectedAreaName}>{selectedArea}</h1>
            ) : (
              areas.map((area) => (
                <h2
                  className={styles.AreaName}
                  key={area.area}
                  onClick={() => setSelectedArea(area.area)}
                >
                  {area.area}
                </h2>
              ))
            )}
          </div>
        </div>
        <div className={styles.Reservation}>
  {selectedArea !== "Vælg Område" && (
    <>
      <button onClick={() => setNumTickets(prevTickets => Math.max(prevTickets - 1, 0))}>-</button>
      <span>{numTickets}</span>
      <button onClick={() => setNumTickets(prevTickets => prevTickets + 1)}>+</button>
      <button className={styles.Button} onClick={handleReserve}>
        Reservér
      </button>
    </>
  )}
</div>
      </div>
    </main>
  );
}

export default Billetter;
