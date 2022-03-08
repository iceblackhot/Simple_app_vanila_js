const navList = document.createElement("ul");
navList.setAttribute("id", "course-nav-list");

//Создание пунктов меню
function createMenu() {
    let menuList = [
        {
            name: "Home",
            link: "http://google.com",
        },
        {
            name: "Images",
            link: "http://google.com",
        },
        {
            name: "Contacts",
            link: "http://google.com",
        },
        {
            name: "Content",
            link: "http://google.com",
        },
        {
            name: "Login/Logout",
            link: "http://google.com",
        },
    ];

    let makeMenu = "";

    for (key in menuList) {
        makeMenu += `<li id="course-nav-item-${key}" title=" ${menuList[key].link} ">
                  <a class="link-${key} links" id="course-nav-link-${key}" href=" ${menuList[key].link} " > ${menuList[key].name}</a>
                </li>`;
        navList.innerHTML = makeMenu;
    }
}

createMenu();

//Отменил переход на "http://google.com" при клике на пункт меню
navList.addEventListener("click", (e) => {
    e.preventDefault();
});
