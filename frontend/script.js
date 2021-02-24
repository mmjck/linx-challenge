(function () {

    function formatPrice (n) {
        return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

    }
    const hostname = 'http://127.0.0.1:3001/main';

    const url = `${hostname}?maxProducts=16`;

    let container = document.querySelector(".container");

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(responseData => {
            if (responseData) {

                console.log(responseData)
                if (responseData.error) {
                    return
                }
                const { pMostPopular: mostPopular, pPriceReduction: priceReduction } = responseData.data;
                let rowOne = document.createElement("div");
                rowOne.className = 'rowOne';

                let title = document.createElement("p");
                title.innerHTML = "Mais Vendidos";

                let titleDescription = document.createElement("h1");
                titleDescription.innerHTML = "Vitrine de mais populares";


                let left = document.createElement("span");
                left.innerHTML = "&#139"
                let right = document.createElement("span");
                right.innerHTML = "&#155"


                container.appendChild(titleDescription);

                container.appendChild(title);

                rowOne.appendChild(left);
                rowOne.appendChild(right);

                console.log(mostPopular)
                mostPopular.forEach((item, i) => {
                    let product = item.data;
                    if (product != null && Object.keys(product).length != 0) {

                        const {
                            images,
                            installment,
                            name,
                            oldPrice,
                            price,
                        } = product;
                        let card = document.createElement("div");
                        card.className = 'card';

                        if (oldPrice != null) {
                            let dtopTag = document.createElement('div');
                            dtopTag.className = 'topTag'


                            let topTag = document.createElement('p');
                            topTag.innerHTML = `${i + 1}º`
                            dtopTag.appendChild(topTag);

                            card.appendChild(dtopTag);
                        }
                        let imageTag = document.createElement('img');
                        imageTag.src = images.default

                        card.appendChild(imageTag);


                        let ddecription = document.createElement('div');
                        ddecription.className = 'title'
                        let descriptionTag = document.createElement('p');
                        descriptionTag.innerHTML = name;

                        ddecription.appendChild(descriptionTag);
                        card.appendChild(ddecription);


                        let dprice = document.createElement('div');
                        dprice.className = 'price'

                        let priceTagText = document.createElement('p');
                        priceTagText.innerHTML = "Por ";

                        let priceTag = document.createElement('p');
                        priceTag.innerHTML = formatPrice(Number(price))

                        dprice.appendChild(priceTagText);

                        dprice.appendChild(priceTag);
                        card.appendChild(dprice);


                        let dparcelas = document.createElement('div');
                        dparcelas.className = 'price'
                        let priceParcelas = document.createElement('p');
                        priceParcelas.innerHTML = `${installment.count}x de ${formatPrice(Number(installment.price))}`;

                        dparcelas.appendChild(priceParcelas);
                        card.appendChild(dparcelas);


                        rowOne.appendChild(card);
                    }
                });

                container.appendChild(rowOne);


                let rowTwo = document.createElement("div");
                rowTwo.className = 'rowTwo';


                title = document.createElement("p");
                title.innerHTML = "Produtos que baixaram de preço";


                titleDescription = document.createElement("h1");
                titleDescription.innerHTML = "Vitrine de ofertas";

                left = document.createElement("span");
                left.innerHTML = "&#139"

                right = document.createElement("span");
                right.innerHTML = "&#155"

                container.appendChild(titleDescription);
                container.appendChild(title);

                rowTwo.appendChild(left);
                rowTwo.appendChild(right);

                priceReduction.forEach((item, i) => {
                    let product = item.data;
                    if (product != null && Object.keys(product).length != 0) {

                        const {
                            images,
                            installment,
                            name,
                            oldPrice,
                            price,
                        } = product;
                        let card = document.createElement("div");
                        card.className = 'card';

                        if (oldPrice != null && oldPrice > 0 && oldPrice > price) {
                            let dtopTag = document.createElement('div');
                            dtopTag.className = 'topTag'


                            let topTag = document.createElement('p');
                            topTag.innerHTML = `-${Math.floor(100 - ((price * 100) / oldPrice))}%`;;
                            dtopTag.appendChild(topTag);

                            card.appendChild(dtopTag);
                        }
                        let imageTag = document.createElement('img');
                        imageTag.src = images.default

                        card.appendChild(imageTag);


                        let dtitle = document.createElement('div');
                        dtitle.className = 'title'
                        let titleTag = document.createElement('p');
                        titleTag.innerHTML = name;

                        dtitle.appendChild(titleTag);
                        card.appendChild(dtitle);


                        let dprice = document.createElement('div');
                        dprice.className = 'price'

                        let priceTagText = document.createElement('p');
                        priceTagText.innerHTML = "Por ";

                        let priceTag = document.createElement('p');
                        priceTag.innerHTML = formatPrice(Number(price))

                        dprice.appendChild(priceTagText);

                        dprice.appendChild(priceTag);
                        card.appendChild(dprice);


                        let dparcelas = document.createElement('div');
                        dparcelas.className = 'price'
                        let priceParcelas = document.createElement('p');
                        priceParcelas.innerHTML = `${installment.count}x de ${formatPrice(Number(installment.price))}`;

                        dparcelas.appendChild(priceParcelas);
                        card.appendChild(dparcelas);


                        rowTwo.appendChild(card);
                    }
                });


                container.appendChild(rowTwo);

                slider();



            }

        })





    function setScroll (l, i, right = false) {
        if (i.className === 'card') {
            let j = 0;
            for (j = 0; j < l; j++) {
                i.style.left = `-${j * 600}px`;

            }
            if (l < 0) {
                l = 0
            }

            if (right && l > 7) {
                l = 7

            }
        }
        return l;
    }


    function slider () {
        var rowOne = document.getElementsByClassName('rowOne');
        var rowTwo = document.getElementsByClassName('rowTwo');

        var span = document.getElementsByTagName('span');
        var div = rowOne[0].children;
        var div2 = rowTwo[0].children;

        var l = 0, m = 0;

        span[0].onclick = function () {
            l--;
            for (var i of div) {
                l = setScroll(l, i);
            }
        }
        span[1].onclick = function () {
            l++;
            for (var i of div) {
                l = setScroll(l, i, true);
            }
        }


        span[2].onclick = function () {
            m--;
            for (var j of div2) {
                m = setScroll(m, j);
            }
        }
        span[3].onclick = function () {
            m++;
            for (var j of div2) {
                m = setScroll(m, j, true);
            }
        }
    };




})();
