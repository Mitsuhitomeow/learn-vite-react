import styles from "./home.module.css";
import { cars } from "./cars.data.js";

const Home = () => {
  return (
    <div>
      <h1>Cars Catalog</h1>
      <div className={styles.catalog}>
        {cars.map(car => (
          <div key={car.id} className={styles.item}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${car.image})`
              }}
            />
            <div className={styles.info}>
              <h2>{car.name}</h2>
              <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(car.price)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home