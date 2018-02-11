window.onload = function() {
    let amountUsd = parseFloat(prompt('Enter the amount of usd'));
    let amountEur = parseFloat(prompt('Enter the amount of eur'));
    let courseUSD = 27.1240;
    let courseEUR = 33.2324;

    if (amountUsd > 0 && amountEur > 0) {
        var exchangeUsdToUah = courseUSD * amountUsd;
        exchangeUsdToUah = parseFloat(exchangeUsdToUah.toFixed(2));
        var exchangeEurToUah = courseEUR * amountEur;
        exchangeEurToUah = parseFloat(exchangeEurToUah.toFixed(2));
        var eurToUsd = courseEUR / courseUSD;
        eurToUsd = parseFloat(eurToUsd.toFixed(2));
        console.log(amountEur + ' euros are equal ' + exchangeEurToUah + ' UAH, ' + amountUsd + ' dollars are equal ' + exchangeUsdToUah + ' UAH, one euro is equal ' + eurToUsd.toFixed(3) + ' dollars.');
    } else {
        console.log('Incorrect information');
    }

}