const axios = require('axios');


// Api catalogo
const hostname = 'http://localhost:3000';
const SERVER_URL = `${hostname}/products`;


function sortByWeight (array) {
    return array.sort(function (a, b) {
        if (a.weight > b.weight) {
            return 1;
        }
        if (a.weight < b.weight) {
            return -1;
        }
        return 0;
    })
}

async function index (req, res) {
    let {
        maxProducts
    } = req.query;

    if (maxProducts) {
        if (maxProducts < 10) {
            maxProducts = 10
        }
    } else {
        maxProducts = 10
    }

    const array = [
        'mostpopular',
        'pricereduction'
    ]


    const promise = []
    for (let i = 0; i < 2; i++) {
        let url = `https://wishlist.neemu.com/onsite/impulse-core/ranking/${array[i]}.json`
        let request = axios.get(url);
        promise.push(request);
    }


    const result = await Promise.all(promise)
        .then(async response => { return response })
        .catch(() => {
             res.json({
                error:true,
                status: 'BAD_REQUEST'
            })
        })

    let [mostPopular, priceReduction] = result;
    mostPopular = mostPopular.data
    priceReduction = priceReduction.data

    mostPopular = sortByWeight(mostPopular)

    const promiseMostPopular = [];


    for (let i = 0; i < maxProducts; i++) {
        let product = mostPopular[i];
        let { recommendedProduct } = product;
        let { id } = recommendedProduct;

        let url = `${SERVER_URL}/${id}`;
        let requestProduct = axios.get(url, {
            data: {
                format: 'complete',
            }
        })
        promiseMostPopular.push(requestProduct);

    };

    const promisePriceReduction = []

    for (let i = 0; i < maxProducts; i++) {
        let product = priceReduction[i];
        let { recommendedProduct } = product;
        let { id } = recommendedProduct;

        let url = `${SERVER_URL}/${id}`;

        let requestProduct = axios.get(url, {
            data: {
                format: 'complete',
            }
        });
        promisePriceReduction.push(requestProduct)


    };

    const resultMost = await Promise.all(
        promiseMostPopular
    ).then(resp => {
        const resultProduct = resp.map(item => item.data)
        return resultProduct;
    }).catch(() => {
        res.json({
            error:true,
            status: 'BAD_REQUEST'
        })
    })



    const resultReduction = await Promise.all(
        promisePriceReduction
    ).then(resp => {
        const resultProduct = resp.map(item => item.data)
        return resultProduct;

    }).catch(() => {
        res.json({
            error:true,
            status: 'BAD_REQUEST'
        })
    })

    res.json({
        data: {
            pMostPopular: resultMost.filter(item => {
                return item.status != 'AVAILABLE'
            }),
            pPriceReduction: resultReduction.filter(item => {
                return item.status != 'AVAILABLE';
            }),
        },
        status: 'OK'
    })


}



module.exports = { index }


