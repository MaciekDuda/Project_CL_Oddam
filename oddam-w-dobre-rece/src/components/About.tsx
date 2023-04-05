const About = () => {
	return (
		<>
			<section className="about">
				<div className="about__box">
					<div className="about__box_head">
						<p className="about__box_head_title">O nas</p>
						<img
							src="./src/assets/Decoration.svg"
							alt="decor"
							className="decor"
						/>
					</div>

					<p className="about__box_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo
						incidunt sint non, corporis cumque sapiente nulla odio aut numquam!
					</p>

					<div className="about__box_sign signature_box">
						<img
							src="./src/assets/Signature.svg"
							alt="signature"
							className="sign"
						/>
					</div>
				</div>

				<div className="about__img"></div>

			</section>
		</>
	);
};

export default About;
