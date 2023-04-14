import React from 'react';

interface PaginationProps {
	totalPosts: number;
	postsPerPage: number;
	setCurrentPage: (page: number) => void;
	currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
	totalPosts,
	postsPerPage,
	setCurrentPage,
	currentPage,
}) => {
	let pages: number[] = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pages.push(i);
	}

	if (pages.length === 1) {
		return null;
	} else {
		return (
			<div className='pagination'>
				{pages.map((page, index) => {
					return (
						<button
							key={index}
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</button>
					);
				})}
			</div>
		);
	}
};

export default Pagination;
