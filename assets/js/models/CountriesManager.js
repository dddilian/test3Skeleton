let countriesManager = (function () {

    class CountriesManager {

        constructor() {
            this.allCountries = [];
            this.filteredCountries = [];
        }

        getAllCountries() {

            return getRes(`https://restcountries.com/v3.1/all`)
                .then(data => {
                    console.log(data);

                    //!В this.allCountries слагаме обекти от class Country, съдържащи само пропъртитата, които ни интересуват за тази задача
                    this.allCountries = data.map(country => new Country(country.name.common, country.capital && country.capital[0], country.flags.png, country.latlng[0], country.latlng[1]));
                    console.log(this.allCountries);
                    return data;
                }).catch(err => {
                    console.log(err);
                })
        }

        searchCountryByName(countryName) {

            let url = `https://restcountries.com/v3.1/name/${countryName}`;

            if (!countryName) {
                url = "https://restcountries.com/v3.1/all";
            }

            return getRes(url)
                .then(data => {
                    console.log(data);
                    this.allCountries = data.map(country => new Country(country.name.common, country.capital && country.capital[0], country.flags.png, country.latlng[0], country.latlng[1]));
                    return data;
                }).catch(err => {
                    console.log(err);
                })
        }

        // getForecast(latitude, longitude) {
        //     console.log(latitude, longitude);

        //     return getRes(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`)
        //         .then(data => {
        //             return data;
        //         }).catch(err => {
        //             console.log(err);
        //         })
        // }

        //!по условие заявките трябвало да са две последователни...
        getForecast(countryName) {
            return getRes(`https://restcountries.com/v3.1/name/${countryName}`)
                .then(data => {
                    console.log(data);
                    return data[0].latlng;
                })
                .then(([latitude, longitude]) => {
                    return getRes(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`)
                        .then(forecastData => {
                            return forecastData.properties.timeseries.slice(0, 6);
                        }).catch(err => {
                            console.log(err);
                        })
                }).catch(err => {
                    console.log(err);
                })


        }

    }

    return new CountriesManager();

})();




// {
//     "name": {
//         "common": "Guatemala",
//         "official": "Republic of Guatemala",
//         "nativeName": {
//             "spa": {
//                 "official": "República de Guatemala",
//                 "common": "Guatemala"
//             }
//         }
//     },
//     "tld": [
//         ".gt"
//     ],
//     "cca2": "GT",
//     "ccn3": "320",
//     "cca3": "GTM",
//     "cioc": "GUA",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//         "GTQ": {
//             "name": "Guatemalan quetzal",
//             "symbol": "Q"
//         }
//     },
//     "idd": {
//         "root": "+5",
//         "suffixes": [
//             "02"
//         ]
//     },
//     "capital": [
//         "Guatemala City"
//     ],
//     "altSpellings": [
//         "GT"
//     ],
//     "region": "Americas",
//     "subregion": "Central America",
//     "languages": {
//         "spa": "Spanish"
//     },
//     "translations": {
//         "ara": {
//             "official": "جمهورية غواتيمالا",
//             "common": "غواتيمالا"
//         },
//         "bre": {
//             "official": "Republik Guatemala",
//             "common": "Guatemala"
//         },
//         "ces": {
//             "official": "Republika Guatemala",
//             "common": "Guatemala"
//         },
//         "cym": {
//             "official": "Republic of Guatemala",
//             "common": "Guatemala"
//         },
//         "deu": {
//             "official": "Republik Guatemala",
//             "common": "Guatemala"
//         },
//         "est": {
//             "official": "Guatemala Vabariik",
//             "common": "Guatemala"
//         },
//         "fin": {
//             "official": "Guatemalan tasavalta",
//             "common": "Guatemala"
//         },
//         "fra": {
//             "official": "République du Guatemala",
//             "common": "Guatemala"
//         },
//         "hrv": {
//             "official": "Republika Gvatemala",
//             "common": "Gvatemala"
//         },
//         "hun": {
//             "official": "Guatemalai Köztársaság",
//             "common": "Guatemala"
//         },
//         "ita": {
//             "official": "Repubblica del Guatemala",
//             "common": "Guatemala"
//         },
//         "jpn": {
//             "official": "グアテマラ共和国",
//             "common": "グアテマラ"
//         },
//         "kor": {
//             "official": "과테말라 공화국",
//             "common": "과테말라"
//         },
//         "nld": {
//             "official": "Republiek Guatemala",
//             "common": "Guatemala"
//         },
//         "per": {
//             "official": "جمهوری گواتِمالا",
//             "common": "گواتِمالا"
//         },
//         "pol": {
//             "official": "Republika Gwatemali",
//             "common": "Gwatemala"
//         },
//         "por": {
//             "official": "República da Guatemala",
//             "common": "Guatemala"
//         },
//         "rus": {
//             "official": "Республика Гватемала",
//             "common": "Гватемала"
//         },
//         "slk": {
//             "official": "Guatemalská republika",
//             "common": "Guatemala"
//         },
//         "spa": {
//             "official": "República de Guatemala",
//             "common": "Guatemala"
//         },
//         "swe": {
//             "official": "Republiken Guatemala",
//             "common": "Guatemala"
//         },
//         "tur": {
//             "official": "Guatemala Cumhuriyeti",
//             "common": "Guatemala"
//         },
//         "urd": {
//             "official": "جمہوریہ گواتیمالا",
//             "common": "گواتیمالا"
//         },
//         "zho": {
//             "official": "危地马拉共和国",
//             "common": "危地马拉"
//         }
//     },
//     "latlng": [
//         15.5,
//         -90.25
//     ],
//     "landlocked": false,
//     "borders": [
//         "BLZ",
//         "SLV",
//         "HND",
//         "MEX"
//     ],
//     "area": 108889,
//     "demonyms": {
//         "eng": {
//             "f": "Guatemalan",
//             "m": "Guatemalan"
//         },
//         "fra": {
//             "f": "Guatémaltèque",
//             "m": "Guatémaltèque"
//         }
//     },
//     "flag": "🇬🇹",
//     "maps": {
//         "googleMaps": "https://goo.gl/maps/JoRAbem4Hxb9FYbVA",
//         "openStreetMaps": "https://www.openstreetmap.org/relation/1521463"
//     },
//     "population": 16858333,
//     "gini": {
//         "2014": 48.3
//     },
//     "fifa": "GUA",
//     "car": {
//         "signs": [
//             "GCA"
//         ],
//         "side": "right"
//     },
//     "timezones": [
//         "UTC-06:00"
//     ],
//     "continents": [
//         "North America"
//     ],
//     "flags": {
//         "png": "https://flagcdn.com/w320/gt.png",
//         "svg": "https://flagcdn.com/gt.svg"
//     },
//     "coatOfArms": {
//         "png": "https://mainfacts.com/media/images/coats_of_arms/gt.png",
//         "svg": "https://mainfacts.com/media/images/coats_of_arms/gt.svg"
//     },
//     "startOfWeek": "monday",
//     "capitalInfo": {
//         "latlng": [
//             14.62,
//             -90.52
//         ]
//     },
//     "postalCode": {
//         "format": "#####",
//         "regex": "^(\\d{5})$"
//     }
// }