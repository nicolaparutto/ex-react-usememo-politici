import CardMemo from "./components/Card";
import { useState, useEffect, useMemo } from "react";

function App() {

  const [politicians, setPoliticians] = useState([]);
  const [wordSearched, setWordSearched] = useState('');
  const [roleSelected, setRoleSelected] = useState('');


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
      const isInName = politician.name.toLowerCase().includes(wordSearched.toLowerCase())
      const isInBiography = politician.biography.toLowerCase().includes(wordSearched.toLowerCase())
      const isPosition = politician.position === roleSelected || roleSelected === ""
      return (isInName || isInBiography) && isPosition
    })
  }, [politicians, wordSearched, roleSelected])


  const allPoliticiansRoles = useMemo(() => {
    return politicians.reduce((acc, curr) => {
      if (acc.includes(curr.position)) {
        return acc
      } else {
        acc.push(curr.position)
      }
      return acc
    }, [])
  }, [politicians])

  useEffect(() => {
    fetchPoliticians();
  }, [])

  return (
    <>
      <section className="container">
        <h1>Lista dei Politici</h1>

        <div className="search-bar">
          <div>
            <input
              className="search-politician"
              type="text"
              placeholder="Cerca per nome o biografia"
              value={wordSearched}
              onChange={e => setWordSearched(e.target.value)}
            />
            <select className="role-select" name="roles" value={roleSelected} onChange={e => setRoleSelected(e.target.value)}>
              <option>Ruolo</option>
              {allPoliticiansRoles.map((role, index) => (
                <option key={index} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            {roleSelected ? <button className="remove-filter-btn" onClick={
              () => {
                setWordSearched('');
                setRoleSelected('');
              }
            }>Rimuovi filtri</button> : ''}
          </div>
        </div>

        <div className="cards-container">
          {polliticiansFiltered.map((politician) => (
            <CardMemo politicianData={politician} key={politician.id} />
          ))}
        </div>
      </section >
    </>
  )
}

export default App
