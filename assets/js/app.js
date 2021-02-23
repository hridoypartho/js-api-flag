const mainContent = document.querySelector('.project__content');
const request = new XMLHttpRequest();
request.open('GET', "https://restcountries.eu/rest/v2/name/bangladesh");
request.send();
//To get the Response
request.addEventListener('load', function() {
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const htmlData = `
    <div class="project__card">
    <div class="project__card_body">
        <img src="${data.flag}" alt="">
        <h1>${data.name}</h1>
        <p>Capital :${data.capital} </p>
    </div>
    <div class="project__card_footer">
        <div class="project__card_social">
            <h3> ${data.nativeName} </h3>
            <p>Native Language</p>
        </div>
        <div class="project__card_social">
            <h3>${data.population}</h3>
            <p>Population</p>
        </div>
            <div class="project__card_social">
            <h3>${data.demonym}</h3>
            <p>Demonym</p>
            </div>
        </div>
    </div>
    `;
    mainContent.insertAdjacentHTML("afterbegin", htmlData)
});