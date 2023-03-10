const links = document.querySelectorAll(".link-target");
const linkList = document.querySelectorAll(".links_ist");
const menu = document.querySelector(".mobile-menu");
const menuList = document.getElementById("mobile-menu");

menu.addEventListener("click", () => {


    menu.classList.toggle("menu-enable");
    menuList.classList.toggle("active");

})

links.forEach(e => {
    e.addEventListener("click", (link) => {
        removeClasses();

    if (e.classList.contains("enable")) {
        e.classList.remove("enable");

        removeClasses();
    }
    else {
        const list = e.parentElement.childNodes[3]; // select parent -> list element

        e.classList.toggle("enable");
        e.childNodes[3].classList.toggle("icon-direction"); // select arrow image
        list.classList.add("list-enable")
    }
    })
})

function removeClasses () {
    const images = document.querySelectorAll(".menu-icon");
    const listNode = document.querySelectorAll(".links__list");

    images.forEach(img => {
        img.classList.remove("icon-direction");
    })
    listNode.forEach(list => {
        list.classList.remove("list-enable");
    })
}