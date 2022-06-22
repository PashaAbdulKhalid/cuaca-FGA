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
    document.querySelector('.result').style.display = "none";

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

            const source = `{"q":"${temp3}","source":"en","target":"id"}`;
            const options2 = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'eba76e67edmshedaa781625ee7bcp1a0a7bjsn55b5162b3957',
                    'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
                },
                body: source
            };
            
            fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options2)
                .then(response2 => response2.json())
                .then(response2 => {
                    let temp2 = document.querySelector('#temp2');
                    temp2.innerHTML = `${response2.data.translations.translatedText}`

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

