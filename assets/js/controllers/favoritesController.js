function renderFavorites() {
    
    console.log("Рендерираме favorites page");

    showLoadingDiv(favoritesPageContent);


    countriesManager.getAllCountries()
        .then(countries => {

            // let favoriteCountries = countries.filter(country => userManager.currentUser.favoriteLocations.includes(country.name.common));

            let favoriteCountries = countriesManager.allCountries.filter(country => userManager.currentUser.favoriteLocations.includes(country.name));

            printCountriesCards(favoriteCountries, favoritesPageContent);

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            // removeLoadingDiv();
        })
};