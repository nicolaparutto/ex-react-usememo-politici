import Card from "./components/Card";
import { useState, useEffect, useMemo } from "react";

function App() {

  const [politicians, setPoliticians] = useState([]);
  const [wordSearched, setWordSearched] = useState('');

  async function fetchPoliticians() {
    try {
      const fetchPromise = fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians");
      const fetchData = await fetchPromise;
      const politicianData = await fetchData.json();
      setPoliticians(politicianData);
    } catch (error) {
      console.error(error);
    }
  }

  const polliticiansFiltered = useMemo(() => {
    return politicians.filter((politician) => {
      return politician.name.toLowerCase().includes(wordSearched.toLowerCase()) || politician.biography.toLowerCase().includes(wordSearched.toLowerCase())
    })
  })

  useEffect(() => {
    fetchPoliticians();
  }, [])

  return (
    <>
      <section className="container">
        <h1>Lista dei Politici</h1>
        <input
          className="search-politician"
          type="text"
          placeholder="Cerca per nome o biografia"
          value={wordSearched}
          onChange={e => setWordSearched(e.target.value)}
        />

        <div className="cards-container">
          <Card politicianData={polliticiansFiltered} />
        </div>
      </section>
    </>
  )
}

export default App
