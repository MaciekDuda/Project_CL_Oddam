import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
			<div className="container login">
				<div className="login__top_menu">
					<Link to="/">
						<button className="login__top_menu_btn">Home</button>
					</Link>
					<Link to="/login">
						<button className="login__top_menu_btn">Zaloguj</button>
					</Link>
					<Link to="/register">
						<button className="login__top_menu_btn">Załóż konto</button>
					</Link>
                    <Link to="/logout">
						<button className="register__top_menu_btn">Wyloguj</button>
					</Link>
				</div>

				<div className="login__box">
					<div className="contact__box_form_head">
						<p className="contact__box_form_head_title">Zaloguj się</p>
						<img
							src="./src/assets/Decoration.svg"
							alt="decor"
							className="decor"
						/>
					</div>

					<div className="login__box_inputs">
						<label htmlFor="">Email</label>
						<input type="email" />
						<label htmlFor="">Hasło</label>
						<input type="password" />
					</div>

					<div className="login__box_buttons">
						<button>Zaloguj się</button>
						<button>Załóż konto</button>
					</div>
				</div>
			</div>
		</>
     );
}
 
export default Login;