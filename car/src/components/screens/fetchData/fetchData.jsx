
const url = "http://localhost:3002/cars";

const FetchData = () => {
  let dataFetch = async () => {
    const respons = await fetch(url);
    if (respons.status !== 200) {
      throw new Error("cannot fetch data");
    }
    let car = await respons.json();
    return car;
  }

  dataFetch()
    .then((car) => {
      car.map(car => {
        <Home />
      })
    })
    .catch((err) => console.log('reject', err.message))

};
