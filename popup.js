let pages = ["letters", "schedule"];
let current;

function displayTime(text) {
    let date = document.createTextNode(text);
    let dateSpot = document.getElementById("time");
    let p = document.createElement("p");
    p.setAttribute("id", "time");
    p.appendChild(date);
    document.getElementById("timeSpot").appendChild(p);
}

function changePage(page, width) {
    if (current) {
        document.getElementById("image").remove();
        document.getElementById("time").remove();
    }
    if (page == "letters") {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        
        if (dd < 10) {
            dd = '0' + dd;
        }
        
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd;
        displayTime(today);
    }
    if (page == "schedule") {
        var d = new Date();
        let currTime = d.getHours().toString() + d.getMinutes().toString();
        if (currTime < 755 || currTime > 1435) {
            displayTime("School has not started");
        } else if (currTime >= 755 && currTime <= 843) {
            displayTime("1st Period");
        } else if (currTime > 843 && currTime <= 927) {
            displayTime("2nd Period");
        } else if (currTime > 927 && currTime <= 1011) {
            displayTime("3rd Period");
        } else if (currTime > 1011 && currTime <= 1055) {
            displayTime("4th Period");
        } else if (currTime > 1055 && currTime <= 1139) {
            displayTime("5th Period");
        } else if (currTime > 1139 && currTime <= 1223) {
            displayTime("6th Period");
        } else if (currTime > 1223 && currTime <= 1307) {
            displayTime("7th Period");
        } else if (currTime > 1307 && currTime <= 1351) {
            displayTime("8th Period");
        } else if (currTime > 1351 && currTime <= 1435) {
            displayTime("9th Period");
        }
    }
    let img = document.createElement("img");
    img.setAttribute("src", "assets/" + page + ".jpg");
    img.setAttribute("id", "image");
    img.setAttribute("height", "auto");
    img.setAttribute("width", width);
    document.getElementById("pictureContainer").appendChild(img);
    current = page;
}

document.addEventListener('DOMContentLoaded', () => {
    changePage(pages[0], 800);
    document.getElementById("schedule").addEventListener("click", () => {
        if (current !== "schedule") {
            changePage(pages[1], 800);
        }
    });
    document.getElementById("letters").addEventListener("click", () => {
        if (current !== "letters") {
            changePage(pages[0], 800);
        }
    });
});