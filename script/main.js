document.addEventListener("DOMContentLoaded", init);

function init(event) {
    console.log("DOM Content loaded!");

    //All my initialization code goes here
    var element = document.getElementById("coolParagraph");

    element.addEventListener("click", paragraphClick);
    element.addEventListener("mouseover", paragraphMouseOver);
};

function paragraphClick(event) {
    console.log("Help! They are clicking me!")
};

function paragraphMouseOver(event) {
    console.log("Help! They are mousing me!")
};
