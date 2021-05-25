import React from 'react';
import Animal from './../Animal';

// zvirata je pole, ve kterem najdes kompletni seznam zvirat
// na udaje se muzes podivat v souboru /src/data.js
import zvirata from './../data.js';

const AnimalList = () => {

	return (
    <div className="zvirata">
			{
				zvirata.map(zvire =>
					<Animal key={zvire.id} id={zvire.id} nazev={zvire.nazev} nazevLatinsky={zvire.nazevLatinsky} foto={zvire.foto} />
				)
			}
    </div>
	);
}

export default AnimalList;
