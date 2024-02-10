export const getHighlightHTML = (text: string, searchQuery: string) => {
		const regex = new RegExp(searchQuery, 'ig');
	
		const highlightedText = text.replace(regex, (match) => `<span class="text-[#f16e36]">${match}</span>`);
	
		return highlightedText;
}