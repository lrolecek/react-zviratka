import React from 'react';

// zvirata je pole, ve kterem najdes kompletni seznam zvirat
// na udaje se muzes podivat v souboru /src/data.js
import zvirata from './../data.js';

const AnimalDetail = () => {

	return (
		<div className="detail">
			<div className="detail__obsah">

				<div className="detail__hlavicka">
					<img className="detail__foto" src="/assets/slon.jpg" alt="xxx" />
					<div className="detail__titulek">
						<h2 className="detail__nazev"><span>xxx</span></h2>
						<div className="detail__latinsky"><span>xxx</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__popis">popis</p>

					<div className="detail__udaje">
						<div className="detail__udaj">
							<h3>Domovina</h3>
							<p>xxx</p>
						</div>
						<div className="detail__udaj">
							<h3>Biotop</h3>
							<p>xxx</p>
						</div>
						<div className="detail__udaj">
							<h3>Potrava</h3>
							<p>xxx</p>
						</div>
						<div className="detail__udaj">
							<h3>Velikost</h3>
							<p>xxx</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export default AnimalDetail;