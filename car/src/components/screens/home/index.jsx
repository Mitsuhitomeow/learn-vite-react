import style from "./home.module.css"

const Home = () => {
  return (
    <div>
      <h1>Cars Catalog</h1>
      <div className={style.home}>
        <h2>Car 1</h2>
        <p>$100 000</p>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Home