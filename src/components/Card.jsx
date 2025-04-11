import { memo } from "react"

function Card({ politicianData }) {
	const { name, image, position, biography } = politicianData;
	return (
		<>
			<div className="card">
				<div className="card-content">
					<div className="card-img">
						<img src={image} alt={name} />
					</div>
					<div className="card-text">
						<h3>{name}</h3>
						<span>Ruolo: {position}</span>
						<p>{biography}</p>
					</div>
				</div>
			</div>
		</>
	)
}

const CardMemo = memo(Card);

export default CardMemo