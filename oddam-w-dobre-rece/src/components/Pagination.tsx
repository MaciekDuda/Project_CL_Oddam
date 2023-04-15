import React from 'react';

interface PaginationProps {
	totalItems: number;
	itemsPerPage: number;
	setCurrentPage: (page: number) => void;
	currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
	totalItems,
	itemsPerPage,
	setCurrentPage,
	currentPage,
}) => {
	let pages: number[] = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
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
