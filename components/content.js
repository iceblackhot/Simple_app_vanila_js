async function createContent() {
    const containerData = document.createElement("div");
    containerData.className = "content-data";
    const dataServer = await getData();
    // console.log(dataServer);
    dataServer.forEach((item) => {
        containerData.append(showContent(item.title, item.body));
    });

    return containerData;
}

function showContent(title, body) {
    const itemElement = document.createElement("div");
    itemElement.className = "item-data";
    const titleData = document.createElement("h3");
    const textData = document.createElement("p");
    titleData.textContent = title;
    textData.textContent = body;

    itemElement.append(titleData);
    itemElement.append(textData);
    return itemElement;
}

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}
