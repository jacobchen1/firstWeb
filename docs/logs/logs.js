
getData();
async function getData() {
    const response = await  fetch('/api');
    const data = await response.json();
    console.log(data);
    for (item of data){
    const root  = document.createElement('div');
    const mode  = document.createElement('div');
    const geo  = document.createElement('div');
    const date  = document.createElement('div');
    const  image = document.createElement('img');


    mode.textContent = `mode: ${item.mode}`,
    geo.textContent = `geo: ${item.lat}, ${item.lon}`;
    const dateStr = new Date(item.timestamp).toLocaleString();
    date.textContent = dateStr;
    image.src = item.image64;

    root.append(mode,geo,date,image);
    document.body.append(root);

    } 


}

