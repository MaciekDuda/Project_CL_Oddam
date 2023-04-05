const SimpleSteps = () => {
	return (
		<>
			<section className="simple-steps">
				<div className="steps__title">
					<p className="steps__title_text">Wystarczą 4 proste kroki</p>
					<img
						src="./src/assets/Decoration.svg"
						alt="decor"
						className="decor"
					/>
				</div>

				<div className="steps__process">
					<div className="process_item">
						<img src="./src/assets/Icon-1.svg" alt="" />
						<p className="process__title">Wybierz rzeczy</p><hr></hr>
						<p className="process_desc">ubrania, zabawki, sprzęt i inne</p>
					</div>

					<div className="process_item">
						<img src="./src/assets/Icon-2.svg" alt="" />
						<p className="process__title">Spakuj je</p><hr></hr>
						<p className="process_desc">skorzystaj z worków na smieci</p>
					</div>

					<div className="process_item">
						<img src="./src/assets/Icon-3.svg" alt="" />
						<p className="process__title">Zdecyduj komu chcesz pomóc</p><hr></hr>
						<p className="process_desc">wybierz zaufną organizację</p>
					</div>

					<div className="process_item">
						<img src="./src/assets/Icon-4.svg" alt="" />
						<p className="process__title">Zamów kuriera</p><hr></hr>
						<p className="process_desc">
							kurier przyjedzie w dogodnym terminie
						</p>
					</div>
				</div>

				<button className="process__btn">
					Oddaj <br /> rzeczy
				</button>

			</section>
		</>
	);
};

export default SimpleSteps;
