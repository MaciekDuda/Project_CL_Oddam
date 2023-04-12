import { Link } from 'react-router-dom';

const Logout = () => {
	return (
		<>
			<div className="container logout">
				<div className="logout__top_menu">
					<Link to="/">
						<button className="logout__top_menu_btn">Home</button>
					</Link>
					<Link to="/login">
						<button className="logout__top_menu_btn">Zaloguj</button>
					</Link>
					<Link to="/register">
						<button className="logout__top_menu_btn">Załóż konto</button>
					</Link>
				</div>

				<div className="logout__box">
					<div className="contact__box_form_head">
						<p className="contact__box_form_head_title">
							Wylogowanie nastąpiło pomyślnie
						</p>
						<img
							src="./src/assets/Decoration.svg"
							alt="decor"
							className="decor"
						/>
					</div>

					<div className="logout__box_buttons">
						<Link to="/">
							<button>Strona główna</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Logout;
