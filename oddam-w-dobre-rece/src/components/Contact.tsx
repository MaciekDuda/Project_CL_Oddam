const Contact = () => {
	return (
		<>
			<section className="contact" id="contact">
				<div className="contact__box">
					<div className="contact__box_shadow"></div>

					<form action="" className="contact__box_form">
						<div className="contact__box_form_head">
							<p className="contact__box_form_head_title">
								Skontaktuj się z nami
							</p>
							<img
								src="./src/assets/Decoration.svg"
								alt="decor"
								className="decor"
							/>
						</div>

						<div className="contact__box_form_inputs">
							<div className="contact_input">
								<label htmlFor="name">Wpisz swoje imię</label>
								<input type="text" name="name" placeholder="podaj imię" />
							</div>
							<div className="contact_input">
								<label htmlFor="email">Wpisz swój email</label>
								<input type="email" name="email" placeholder="podaj email" />
							</div>
						</div>

						<div className="contact__box_form_textarea">
							<label htmlFor="message">Wpisz wiadomość</label>
							<textarea
								name="message"
								id=""
								placeholder="Twoja wiadomość...."
							></textarea>
						</div>

						<button type="submit">Wyślij</button>
					</form>

					<div className="footer">
						<p>Copyright by Coders Lab</p>
						<img src="./src/assets/Fb.svg" alt="" />
						<img src="./src/assets/Instagram.svg" alt="" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
