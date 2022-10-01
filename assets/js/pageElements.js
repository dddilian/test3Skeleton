let homePage = document.getElementById("homePage"); //самата страница, която ще крием и показваме
let homePageContent = document.getElementById("homePageContent"); //bootstrap контейнер

let favoritesPage = document.getElementById("favoritesPage"); //самата страница, която ще крием и показваме
let favoritesPageContent = document.getElementById("favoritesPageContent"); //bootstrap контейнер

let detailsPage = document.getElementById("detailsPage"); //самата страница, която ще крием и показваме
let detailsPageContent = document.getElementById("detailsPageContent"); //bootstrap контейнер

let loginPage = document.getElementById("loginPage"); //самата страница, която ще крием и показваме
let loginPageContent = document.getElementById("loginPageContent"); //bootstrap контейнер

let registerPage = document.getElementById("registerPage"); //самата страница, която ще крием и показваме
let registerPageContent = document.getElementById("registerPageContent"); //bootstrap контейнер

let errorPage = document.getElementById("errorPage"); //самата страница, която ще крием и показваме
let errorPageContent = document.getElementById("errorPageContent"); //bootstrap контейнер

let loginBtn = document.getElementById("loginBtn"); //самата страница, която ще крием и показваме
let registerBtn = document.getElementById("registerBtn"); //bootstrap контейнер

//nav link-овете, които ще показваме и крием, в зависимост дали има логнат юзър
let logoutNavLink = document.getElementById("logoutNavLink");
let loginNavLink = document.getElementById("loginNavLink");
let registerNavLink = document.getElementById("registerNavLink");

//контейнерът, който съдържа search полето, което ще искаме да крием, ако няма юзър
let searchFormContainer = document.getElementById("searchFormContainer");
let searchForm = document.getElementById("searchForm");
let searchInputEl = document.getElementById("searchInputEl");