let prevTheme = ''  
export const saveTheme =  (theme: 'dark' | 'light') => {
	let curTheme =  theme
	if (prevTheme === theme && theme === 'dark')
		curTheme =  'light'

	if (curTheme === 'light')  {
		document.documentElement.removeAttribute("data-theme");
	}
	else 
		document.documentElement.setAttribute("data-theme", "dark");
	prevTheme = curTheme
	localStorage.setItem('theme', curTheme)
	console.log(curTheme)
}