function setup() {   
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(400,340);   
    document.getElementById('submit').addEventListener('click', event => {
    const mode = document.getElementById('vegetable').value;
    
    if('geolocation' in navigator) {
    /* geolocation is available */
        navigator.geolocation.getCurrentPosition( async position => {
        const lat = position.coords.latitude.toFixed(2);
        const lon = position.coords.longitude.toFixed(2);
        video.loadPixels();
        const image64 =  video.canvas.toDataURL();
        document.getElementById('lat').textContent =  lat;
        document.getElementById('lon').textContent =  lon;
        const data = {lat,lon,mode, image64};
        const options ={
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data),
        };
        const response  = await fetch('/api',options);
        const newdata = await response.json()
        console.log(newdata);
        });

    } else {
    /* geolocation IS NOT available */
    console.log('geolocation is not available');
    }
    });



 }


