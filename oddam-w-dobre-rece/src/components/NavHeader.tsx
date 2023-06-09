import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

const NavHeader = () => {
	return (
		<section className="header">
			<img
				src="./src/assets/Home-Hero-Image.jpg"
				alt="basket of home stuff"
				className="header__img"
			/>

			<div className="header__content">
				<div className="nav__login">
					<Link to="/login">
						<button className="nav__login_btn">Zaloguj</button>
					</Link>
					<Link to="/register">
						<button className="nav__login_btn">Załóż konto</button>
					</Link>
				</div>

				<ul className="nav__menu">
					<li className="nav__menu_item">
						<Link className="link" to="/">
							Start
						</Link>
					</li>
					<li className="nav__menu_item">
						<Scroll
							className="link"
							to="simple-steps"
							spy={true}
							smooth={true}
							offset={-100}
							duration={600}
						>
							O co chodzi?
						</Scroll>
					</li>
					<li className="nav__menu_item">
						<Scroll
							className="link"
							to="about-us"
							spy={true}
							smooth={true}
							offset={-100}
							duration={600}
						>
							O nas
						</Scroll>
					</li>
					<li className="nav__menu_item">
						<Scroll
							className="link"
							to="help"
							spy={true}
							smooth={true}
							offset={-100}
							duration={600}
						>
							Fundacja i organizacje
						</Scroll>
					</li>
					<li className="nav__menu_item">
						<Scroll className="link" to="contact"
							spy={true}
							smooth={true}
							offset={-100}
							duration={600}>
							Kontakt
						</Scroll>
					</li>
				</ul>
				<div className="cta">
					<h1 className="header__h1">
						Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
					</h1>
					<img
						src="./src/assets/Decoration.svg"
						alt="decor"
						className="header__decor"
					/>

					<div className="header__buttons">
						<Link to="/login">
							<button className="header__btn">
								Oddaj <br /> rzeczy
							</button>
							<button className="header__btn">
								Zorganizuj <br /> zbiórkę
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NavHeader;
