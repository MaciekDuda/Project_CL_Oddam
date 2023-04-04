import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

const NavHeader = () => {
	return (
		<section className="header">
			<img src="" alt="basket of home stuff" className="header__img" />

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
						<Link className='link'  to="/">Start</Link>
					</li>
					<li className="nav__menu_item">
						<Scroll className='link' to="/">O co chodzi?</Scroll>
					</li>
					<li className="nav__menu_item">
						<Scroll className='link' to="/">O nas</Scroll>
					</li>
					<li className="nav__menu_item">
						<Scroll className='link' to="/">Fundacja i organizacje</Scroll>
					</li>
					<li className="nav__menu_item">
						<Scroll className='link' to="/">Kontakt</Scroll>
					</li>
				</ul>
			<div className='cta'>
				<h1 className="header__h1">
					Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
				</h1>
				<img src="" alt="decor" className="header__decor" />

				<div className="header__buttons">
					<button className="header__btn">
						Oddaj <br /> rzeczy
					</button>
					<button className="header__btn">
						Zorganizuj <br /> zbiórkę
					</button>
				</div>
			</div>
			</div>
		</section>
	);
};

export default NavHeader;
