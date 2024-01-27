type ThemeType = 'light' | 'dark'
export function detectTheme(){
    let theme: ThemeType = 'light'
    //local storage is used to override OS theme settings
    if(window?.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as darkZZ
        theme = "dark";
    }
    let finalTheme: ThemeType = localStorage.getItem("theme") as ThemeType | null || theme
    //dark theme preferred, set document with a `data-theme` attribute
    document.documentElement.setAttribute("data-theme", finalTheme);
    return finalTheme
}
