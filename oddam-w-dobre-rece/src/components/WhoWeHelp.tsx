const WhoWeHelp = () => {
	return (
		<>
			<section className="help">
				<div className="help__box">
					<div className="help__box_head">
						<p className="help__box_head_title">Komu pomagamy?</p>
						<img
							src="./src/assets/Decoration.svg"
							alt="decor"
							className="decor"
						/>
					</div>

					<div className="help__box_orgs">

						<div className="help__box_orgs_buttons">
							<button className="org_btn">Fundacjom</button>
							<button className="org_btn">
								Organizacjom <br />
								pozarządowym
							</button>
							<button className="org_btn">
								lokalnym <br />
								zbiórkom
							</button>
						</div>

                        <div className="help__box_orgs_desc">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa incidunt iusto voluptate assumenda et? Dicta laborum quidem voluptas doloremque voluptates voluptatum corporis explicabo, minus molestias. Libero alias, asperiores placeat accusamus in quidem vero amet!</p>
                        </div>

                        <ul className="help__box_orgs_list">
                            <li className="org_item">111111AAAAA <hr /></li>
                            <li className="org_item">222222BBBBB <hr /></li>
                            <li className="org_item">333333CCCCC</li>
                        </ul>

                        <div className="pagination">
                            <p>1</p>
                            <p>2</p>
                        </div>


					</div>
				</div>
			</section>
		</>
	);
};

export default WhoWeHelp;
