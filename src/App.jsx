import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {

  const [politicians, setPoliticians] = useState([])


  async function fetchPoliticians() {
    try {
      const fetchPromise = fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians");
      const fetchData = await fetchPromise;
      const politicianData = await fetchData.json();
      setPoliticians(politicianData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPoliticians();
  }, [])

  return (
    <>
      <section className="container">
        <div className="cards-container">
          <Card politicianData={politicians} />
        </div>
      </section>
    </>
  )
}

export default App
