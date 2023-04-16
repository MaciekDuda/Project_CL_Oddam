import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FormValues {
	name: string;
	email: string;
	message: string;
}

const Contact = () => {
	const [nameCheck, setNameCheck] = useState<boolean>(false);
	const [emailCheck, setEmailCheck] = useState<boolean>(false);
	const [messageCheck, setMessageCheck] = useState<boolean>(false);
	const [success, setSuccess] = useState(false);

	const [form, setForm] = useState<FormValues>({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.name.trim().length < 1) {
			setNameCheck(true);
		} else {
			setNameCheck(false);
		}

		if (!form.email.includes('@')) {
			setEmailCheck(true);
		} else {
			setEmailCheck(false);
		}
		if (form.message.trim().length < 120) {
			setMessageCheck(true);
		} else {
			setMessageCheck(false);
		}
	};

	return (
		<>
			<section className="contact" id="contact">
				<div className="contact__box">
					<div className="contact__box_shadow"></div>

					<form onSubmit={handleSubmit} className="contact__box_form">
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
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									placeholder="podaj imię"
								/>
								{nameCheck && (
									<p className="error">Pole imię nie może być puste!</p>
								)}
							</div>
							<div className="contact_input">
								<label htmlFor="email">Wpisz swój email</label>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									placeholder="podaj email"
								/>
								{emailCheck && <p className="error">Podaj poprawny email!</p>}
							</div>
						</div>

						<div className="contact__box_form_textarea">
							<label htmlFor="message">Wpisz wiadomość</label>
							<textarea
								name="message"
								id=""
								value={form.message}
								onChange={handleChange}
								placeholder="Twoja wiadomość...."
							></textarea>
							{messageCheck && (
								<p className="error">
									Wiadomość musi mieć conajmniej 120 znaków!
								</p>
							)}
						</div>

						{success === true ? (
							<p className="success-sent">
								Wiadomość została wysłana!<br></br>Wkrótce się skontaktujemy.
							</p>
						) : null}

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
