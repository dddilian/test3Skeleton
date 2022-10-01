function renderHome() {
    console.log("Рендерираме home page");

    showLoadingDiv(homePageContent);

    countriesManager.getAllCountries()
        .then(countries => {
            //countries няма да го ползваме,защото вече имаме всички дъжави в allCountries в countryManager
            printCountriesCards(countriesManager.allCountries, homePageContent);

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            // removeLoadingDiv(homePageContent);
        })

};