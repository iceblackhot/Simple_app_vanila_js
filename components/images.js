async function createImg() {
    const containerImg = document.createElement("div");
    containerImg.className = "img-course";
    const dataServer = await getImg();
    dataServer.forEach((item) => {
        containerImg.append(showImg(item.album, item.id, item.title, item.url));
    });
    return containerImg;
}

function showImg(album, id, title, url) {
    const itemContainer = document.createElement("div");
    itemContainer.className = "item-container";

    const itemAlbum = document.createElement("span");
    itemAlbum.className = "album";
    itemAlbum.textContent = album;

    const itemId = document.createElement("span");
    itemId.className = "id";
    itemId.textContent = id;

    const itemTitle = document.createElement("h3");
    itemTitle.className = "title";
    itemTitle.textContent = title;

    const itemBigImg = document.createElement("img");
    itemBigImg.setAttribute("src", url);
    itemBigImg.className = "big-img";

    // const itemLittlelImg = document.createElement("img");
    // itemLittlelImg.setAttribute("src", url);
    // itemLittlelImg.className = "little-img";

    itemContainer.append(itemAlbum);
    itemContainer.append(itemId);
    itemContainer.append(itemTitle);
    itemContainer.append(itemBigImg);
    // itemContainer.append(itemLittlelImg);
    return itemContainer;
}

async function getImg() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = [];
    if (response.ok) {
        data = await response.json();
        data = data.splice(0, 20);
    }
    return data;
}

// function getImg(result) {
//     let parentEl = document.getElementById("img-course");
//     if (result) {
//         result.forEach((img) => {
//             let element = document.createElement("img");
//             element.width = "100";
//             element.src = img.path;
//             parentEl.appendChild(element);
//         });
//     } else {
//         alert("error");
//     }
// }

// let result = await fetch("https://jsonplaceholder.typicode.com/photos");
