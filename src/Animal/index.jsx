import React from 'react';

const Animal = ({id, nazev, nazevLatinsky, foto}) => {

	return (
		<div className="zvire">
			<div className="zvire__foto">
				<img src={`/assets/${foto}`} alt={nazev} />
			</div>
			<div className="zvire__popis">
				<div className="zvire__nazev">{nazev}</div>
				<div className="zvire__latinsky">{nazevLatinsky}</div>
			</div>
		</div>
  );
}

export default Animal;