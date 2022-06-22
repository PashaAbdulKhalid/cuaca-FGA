const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(img/sky.jpg)'

inputKeyword.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
    event.preventDefault();
    searchButton.click();
    }
});

searchButton.addEventListener('click', function() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eba76e67edmshedaa781625ee7bcp1a0a7bjsn55b5162b3957',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+inputKeyword.value+'', options)
        .then(response => response.json())
        .then(response => {
            

            
            let imgs = document.querySelector('#imgs')
            let location = document.querySelector('#location');
            let temp1 = document.querySelector('#temp1');
            let temp3 = response.current.condition.text;
            let hum = document.querySelector('#hum');
            let winds = document.querySelector('#winds');
            let uvi = document.querySelector('#uvi');
            let locations = document.querySelector('#locations');
            imgs.src = `${response.current.condition.icon}`
            location.innerHTML = `${response.location.name}, ${response.location.country}`
            temp1.innerHTML = `${response.current.temp_c}°С `
            hum.innerHTML = `${response.current.humidity} %`
            winds.innerHTML = `${response.current.wind_kph} KM/Jam`
            uvi.innerHTML = `${response.current.uv}`
            locations.innerHTML = `[${response.location.lat}, ${response.location.lon}]`

            const encodedParams = new URLSearchParams();
            encodedParams.append("source", "en");
            encodedParams.append("target", "id");
            encodedParams.append("q", ""+temp3+"");

            const options2 = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Accept-Encoding': 'application/gzip',
                    'X-RapidAPI-Key': 'ea8b44b38dmsh2eb608ed160c2fcp1e6de2jsn823ad1a156da',
                    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
                },
                body: encodedParams
            };

            fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options2)
                .then(response2 => response2.json())
                .then(response2 => {
                    let temp2 = document.querySelector('#temp2');
                    temp2.innerHTML = `${response2.data.translations[0].translatedText}`
                    //console.log(response2)

                    document.querySelector('.result').style.display = "block";
                })
                .catch(err => console.error(err));
        })
        .catch(() => {
            let result2 = document.querySelector('.result')

            result2.innerHTML = `
            <h2 style="margin-top: 100px;">Location Not Found</h2>`
                            
        });
        
    inputKeyword.value = null;
        

})

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'ea8b44b38dmsh2eb608ed160c2fcp1e6de2jsn823ad1a156da',
// 		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
// 	},
// 	body: '[{"Text":"Moderate or heavy rain shower"}]'
// };

// fetch('https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to%5B0%5D=id&suggestedFrom=en&textType=plain&profanityAction=NoAction', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "${response.current.condition.text}");
// encodedParams.append("target", "id");
// encodedParams.append("source", "en");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': 'eba76e67edmshedaa781625ee7bcp1a0a7bjsn55b5162b3957',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'eba76e67edmshedaa781625ee7bcp1a0a7bjsn55b5162b3957',
// 		'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
// 	},
// 	body: '{"q":"Hello World!","source":"en","target":"id"}'
// };

// fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const encodedParams = new URLSearchParams();
// encodedParams.append("source", "en");
// encodedParams.append("target", "id");
// encodedParams.append("q", "sunny");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': 'ea8b44b38dmsh2eb608ed160c2fcp1e6de2jsn823ad1a156da',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));