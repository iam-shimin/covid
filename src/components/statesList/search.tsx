import React from 'react';

interface SearchProps {
	onSearch: Function
}

export default function Search({ onSearch }: SearchProps) {

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const textNode = event.currentTarget.elements.namedItem('q') as HTMLInputElement;
		onSearch(textNode.value);
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const current = event.target.value;
		onSearch(current);
	}

	return (
		<form className="search-box" onSubmit={handleSubmit}>
			<input
				type="search"
				id="q"
				className="search-item"
				aria-label="Search Query"
				onChange={handleChange} />
			<button className="search-item">🔍</button>
		</form>
	)
}
