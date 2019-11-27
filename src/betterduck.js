if (document.getElementsByClassName("header__logo").length !== 0) {
    document.getElementsByClassName("header__logo")[0].style = `background-image: url("https://raw.githubusercontent.com/joshrudi/betterDDG/master/src/icons/duck.png")`;
}
if (document.getElementsByClassName("logo_homepage").length !== 0) {
    document.getElementsByClassName("logo_homepage")[1].style = `background-image: url("https://raw.githubusercontent.com/joshrudi/betterDDG/master/src/icons/duck.png")`;
}

var tabIcon = document.querySelector('link[rel="shortcut icon"]');
tabIcon.setAttribute('type', 'image/png');
tabIcon.setAttribute('href', "https://raw.githubusercontent.com/joshrudi/betterDDG/master/src/icons/duck.png");