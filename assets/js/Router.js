let router = (function () {

    class Router {


        handleHashChange() {

            let hash = location.hash.slice(1);

            if (hash === "") {
                location.hash = "#home";
            }

            //Криене и показване на бутони, в зависимост от това дали има юзър
            if (userManager.currentUser) {
                logoutNavLink.style.display = "inline";
                registerNavLink.style.display = "none";
                loginNavLink.style.display = "none";

                searchFormContainer.style.display = "block";
            } else {
                logoutNavLink.style.display = "none";
                registerNavLink.style.display = "inline";
                loginNavLink.style.display = "inline";

                searchFormContainer.style.display = "none";
            }

            switch (hash) {

                case "home":

                    if (!userManager.currentUser) { //guard - нелогнат юзър не може да достъпи home
                        location.hash = "#login";
                    } else {
                        homePage.style.display = "block";
                        favoritesPage.style.display = "none";
                        detailsPage.style.display = "none";
                        loginPage.style.display = "none";
                        registerPage.style.display = "none";
                        errorPage.style.display = "none";

                        renderHome();
                    }


                    break;

                case "favorites":

                    if (!userManager.currentUser) { //guard - нелогнат юзър не може да достъпи favorites
                        location.hash = "#login";
                    } else {
                        homePage.style.display = "none";
                        favoritesPage.style.display = "block";
                        detailsPage.style.display = "none";
                        loginPage.style.display = "none";
                        registerPage.style.display = "none";
                        errorPage.style.display = "none";

                        searchFormContainer.style.display = "none";
                        renderFavorites();
                    }


                    break;

                case "details":

                    if (!userManager.currentUser) { //guard - нелогнат юзър не може да достъпи details
                        location.hash = "#login";
                    } else {
                        homePage.style.display = "none";
                        favoritesPage.style.display = "none";
                        detailsPage.style.display = "block";
                        loginPage.style.display = "none";
                        registerPage.style.display = "none";
                        errorPage.style.display = "none";

                        searchFormContainer.style.display = "none";
                    }

                    break;

                case "login":

                    if (userManager.currentUser) { //guard - логнат юзър не може да достъпи login
                        location.hash = "#home";
                    } else {
                        homePage.style.display = "none";
                        favoritesPage.style.display = "none";
                        detailsPage.style.display = "none";
                        loginPage.style.display = "block";
                        registerPage.style.display = "none";
                        errorPage.style.display = "none";
                    }

                    break;

                case "register":

                    if (userManager.currentUser) { //guard - логнат юзър не може да достъпи register
                        location.hash = "#home";
                    } else {
                        homePage.style.display = "none";
                        favoritesPage.style.display = "none";
                        detailsPage.style.display = "none";
                        loginPage.style.display = "none";
                        registerPage.style.display = "block";
                        errorPage.style.display = "none";
                    }

                    break;

                default:
                    homePage.style.display = "none";
                    favoritesPage.style.display = "none";
                    detailsPage.style.display = "none";
                    loginPage.style.display = "none";
                    registerPage.style.display = "none";
                    errorPage.style.display = "blcok";

                    searchFormContainer.style.display = "none";
                    break;
            }

        }

    }

    return new Router();

})();