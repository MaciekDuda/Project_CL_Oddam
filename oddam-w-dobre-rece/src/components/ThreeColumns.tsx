const ThreeColumns = () => {
	return (
		<>
			<section className="three-columns">
				<div className="columns_box">
					<div className="column column-one">
						<h3 className="column_number">10</h3>
						<p className="column_title">Oddanych worków</p>
						<p className="column_text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Veritatis corrupti quisquam, dignissimos maiores
						</p>
					</div>
					<div className="column column-two">
						<h3 className="column_number">5</h3>
						<p className="column_title">Wspartych organizacji</p>
						<p className="column_text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Veritatis corrupti quisquam, dignissimos maiores
						</p>
					</div>
					<div className="column column-three">
						<h3 className="column_number">7</h3>
						<p className="column_title">Zogranizowanych zbiórek</p>
						<p className="column_text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Veritatis corrupti quisquam, dignissimos maiores
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default ThreeColumns;
