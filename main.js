import {authUser} from "./components/auth.js";
//Не могу корректно подключить модули ниже, ошибки сыпет...
import {createContacts} from "./components/contacts.js";
// import {createContent} from "./components/content.js";
// import {createMenu} from "./components/menu.js";

function createDoc() {
    const rootEl = document.querySelector(".playground");
    const headerCourse = document.createElement("header");
    const navCourse = document.createElement("nav");
    const asideCourse = document.createElement("aside");
    const mainCourse = document.createElement("main");
    const footerCourse = document.createElement("footer");
    const logo = document.createElement("img");
    logo.setAttribute("src", "beetroot.svg");

    rootEl.append(headerCourse);
    headerCourse.append(navCourse);
    navCourse.append(navList);
    navList.prepend(logo);
    rootEl.append(asideCourse);
    rootEl.append(mainCourse);
    rootEl.append(footerCourse);

    headerCourse.setAttribute("id", "header-course");
    navCourse.setAttribute("id", "course-nav");
    asideCourse.setAttribute("id", "aside-course");
    mainCourse.setAttribute("id", "main-course");
    footerCourse.setAttribute("id", "footer-course");
    footerCourse.textContent = "JS Course Beetroot";

    const placeHolder = document.createElement("h2");
    let userName = localStorage.getItem("nameUser");

    if (userName) {
        placeHolder.append(`Welcome dear ${userName}!!!`);
        const loginUser = document.createElement("h2");
        loginUser.className = "user-login";
        loginUser.append(`Respect ${userName}!!!`);
        asideCourse.append(loginUser);
    } else {
        placeHolder.append("Welcome dear strange!!!");
    }

    placeHolder.className = "place-course";
    placeHolder.addEventListener("click", (evgeny) =>
        handlerPlaceHolder(evgeny, placeHolder, authUser())
    );

    navList.addEventListener("click", (evgeny) =>
        handlerPlaceHolder(evgeny, authUser())
    );

    //Home
    const homeCourse = document.querySelector(".link-0");
    homeCourse.onclick = () => window.location.reload();

    //Images
    const courseImg = document.querySelector(".link-1");
    courseImg.addEventListener("click", async (e) => {
        const dataContent = await createImg();
        const mainCourse = document.querySelector("#main-course");
        handlerPlaceHolder(e, mainCourse.firstChild, dataContent);
    });

    //Contacts
    const courseContacts = document.querySelector(".link-2");
    courseContacts.addEventListener("click", async (e) => {
        const dataContent = await createContacts();
        const mainCourse = document.querySelector("#main-course");
        handlerPlaceHolder(e, mainCourse.firstChild, dataContent);
    });

    //Content
    const content = document.querySelector(".link-3");
    content.addEventListener("click", async (e) => {
        const dataContent = await createContent();
        const mainCourse = document.querySelector("#main-course");
        handlerPlaceHolder(e, mainCourse.firstChild, dataContent);
    });

    //Login/Out
    const getLoginOut = document.querySelector(".link-4");
    getLoginOut.addEventListener("click", async (e) => {
        const dataContent = authUser();
        const mainCourse = document.querySelector("#main-course");
        handlerPlaceHolder(e, mainCourse.firstChild, dataContent);
    });

    //Replace "Welcome dear strange!!!" with ${userName}
    const loginOut = document.querySelector(".link-4");
    loginOut.addEventListener("click", (e) =>
        handlerPlaceHolder(e, placeHolder, authUser())
    );

    mainCourse.append(placeHolder);
    // mainCourse.append(authUser());
}

//ReplaceWith function
function handlerPlaceHolder(event, oldNode, newNode) {
    const loginOut = document.querySelector(".link-4");
    let userName = localStorage.getItem("nameUser");
    loginOut.textContent = userName;

    oldNode.replaceWith(newNode);
}

createDoc();
