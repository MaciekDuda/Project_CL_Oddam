import { useState, useEffect } from 'react';
import Pagination from './Pagination';

interface Org {
	id: number;
	name: string;
	type: string;
	needs: string;
	mission: string;
}

const WhoWeHelp = () => {
	const [orgs, setOrgs] = useState<Org[]>([]);
	const [cat, setCat] = useState<string>('fundacja');
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage = 3;

	const handleError = (err: string) => {
		console.log('Error');
		console.error('Error');
	};

	const WhoWeHelpList = 'https://zfvfypwezhwsfphrfcws.supabase.co/storage/v1/object/sign/organisations/organisations.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvcmdhbmlzYXRpb25zL29yZ2FuaXNhdGlvbnMuanNvbiIsImlhdCI6MTY4MTQ4NDMxOCwiZXhwIjoxNzEzMDIwMzE4fQ.frYI4YfwUqhj7Qwk1u5D0NSfcgnBf9vYSLSj9vczcn4&t=2023-04-14T14%3A58%3A16.629Z'

	useEffect(() => {
		const getOrgs = async () => {
			const res = await fetch(WhoWeHelpList);

			if (!res.ok) {
				throw new Error('Error!');
			  }
			console.log(res);
			  const { organisations } = await res.json();
			
			  const filteredArray = organisations.filter(({ type }: Org) => type === cat);
			
			  setOrgs(filteredArray);
			};
			getOrgs().catch(handleError);
	}, [cat]);

	const lastItemIndex = currentPage * itemsPerPage;
	const firstItemIndex = lastItemIndex - itemsPerPage;

	const currentPosts = orgs.slice(firstItemIndex, lastItemIndex);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;
		setCat(target.dataset.name!);
		setCurrentPage(1);
		};

	// if (!orgs.length) return <p>ading...</p>;

	return (
		<>
			<section className="help" id="help">
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
							<button
								className="org_btn"
								data-name="fundacja"
								id="button1"
								onClick={(e) => handleClick(e)}
							>
								Fundacjom
							</button>
							<button
								className="org_btn"
								data-name="ngo"
								id="button2"
								onClick={(e) => handleClick(e)}
							>
								Organizacjom <br />
								pozarządowym
							</button>
							<button
								className="org_btn"
								data-name="zbiórka"
								id="button3"
								onClick={(e) => handleClick(e)}
							>
								Lokalnym <br />
								zbiórkom
							</button>
						</div>

						<div className="help__box_orgs_desc">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolores ipsa incidunt iusto voluptate assumenda et? Dicta
								laborum quidem voluptas doloremque voluptates voluptatum
								corporis explicabo, minus molestias. Libero alias amet!
							</p>
						</div>

						<ul className="help__box_orgs_list">
							{currentPosts.map((org) => {
								return (
									<li className="org_item" key={org.id}>
										<h3>{`"${org.name}"`}</h3>
										<p className="needs">{org.needs}</p>
										<p className="info">
										{org.mission}
										</p>
										<hr />
									</li>
								);
							})}
						</ul>

							<Pagination
								totalItems={orgs.length}
								itemsPerPage={itemsPerPage}
								setCurrentPage={setCurrentPage}
								currentPage={currentPage}
							/>
					</div>
				</div>
			</section>
		</>
	);
};

export default WhoWeHelp;
