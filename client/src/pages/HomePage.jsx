import { useState, useEffect } from "react";
import axios from "axios";
import CardTrip from "../components/CardTrip";

function HomePage() {
  const [trips, setTrips] = useState([]);
  const [keywords, setKeywords] = useState("");

  const getTrips = async () => {
    const getTripFromServer = await axios.get(
      `http://localhost:4001/trips?keywords=${keywords}`
    );
    // console.log(getTripFromServer.data.data);
    setTrips(getTripFromServer.data.data);
  };

  useEffect(() => {
    getTrips();
  }, [keywords]);

  return (
    <main className=" w-[1100px] flex justify-center mx-auto ">
      <section className=" w-full flex flex-col items-center">
        <nav className=" py-8">
          <h1 className=" text-[#2D9ADA] text-5xl">เที่ยวใหนดี</h1>
        </nav>
        <section className=" w-full flex flex-col items-center px-10">
          <p className=" self-start">ค้นหาที่เที่ยว</p>
          <input
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน .."
            value={keywords}
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
            className=" w-full border-b-2 outline-none ring-0 text-center py-1"
          />
        </section>
        <div className=" mt-12 w-full flex flex-col gap-12 items-center ">
          {trips.map((item) => (
            <CardTrip
              key={item.eid}
              title={item.title}
              imgSrc={item.photos}
              description={item.description}
              tag={item.tags}
              url={item.url}
              setKeywords={setKeywords}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
