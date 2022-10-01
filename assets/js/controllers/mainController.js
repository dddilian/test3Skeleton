window.addEventListener("hashchange", router.handleHashChange);
window.addEventListener("load", router.handleHashChange);

//logout
logoutNavLink.addEventListener("click", function (e) {
    e.preventDefault();
    userManager.logout();
    location.hash = "#login";
});


function search(e) {

    showLoadingDiv(homePageContent);

    countriesManager.searchCountryByName(e.target.value)
        .then(countries => {
            printCountriesCards(countriesManager.allCountries, homePageContent); //search работи в homePage
        }).catch(err => {
            console.log(err);
        })

};


function debounce(functionToBeDebounced, time) {

    let timerId;

    return function (...params) {
        clearTimeout(timerId);
        timerId = setTimeout(functionToBeDebounced, time, ...params);
    }

};

let debouncedSearch = debounce(search, 1000);

searchInputEl.addEventListener("input", debouncedSearch);