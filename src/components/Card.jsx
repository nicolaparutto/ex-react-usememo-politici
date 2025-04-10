function Card({ politicianData }) {
	return (
		<>
			{politicianData.map((politician) => (
				<div className="card" key={politician.id}>
					<div className="card-content">
						<div className="card-img">
							<img src={politician.image} alt={politician.name} />
						</div>
						<div className="card-text">
							<h3>{politician.name}</h3>
							<span>Ruolo: {politician.position}</span>
							<p>{politician.biography}</p>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default Card