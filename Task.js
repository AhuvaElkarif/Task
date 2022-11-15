const data = [
    {
        "id": "1",
        "name": "google",
        "url": "www.google.com",
        "subData": [
            {
                "id": "2",
                "name": "walla",
                "url": "www.walla.co.il"
            },
            {
                "id": "3",
                "name": "ynet",
                "url": "www.ynet.co.il",
                "subData": [
                    {
                        "id": "4",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    },
                    {
                        "id": "5",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "6",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    }
                ]
            },
            {
                "id": "7",
                "name": "google",
                "url": "www.google.com"
            }
        ]
    },
    {
        "id": "8",
        "name": "ynet",
        "url": "www.ynet.co.il",
        "subData": [
            {
                "id": "9",
                "name": "walla",
                "url": "www.walla.co.il"
            },
            {
                "id": "10",
                "name": "google",
                "url": "www.google.com",
                "subData": [
                    {
                        "id": "11",
                        "name": "ynet",
                        "url": "www.ynet.co.il",
                        "subData": [
                            {
                                "id": "12",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            },
                            {
                                "id": "13",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "14",
                                "name": "mako",
                                "url": "www.mako.co.il"
                            }
                        ]
                    },
                    {
                        "id": "15",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "16",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    }
                ]
            },
            {
                "id": "17",
                "name": "walla",
                "url": "www.walla.co.il",
                "subData": [
                    {
                        "id": "18",
                        "name": "ynet",
                        "url": "www.ynet.co.il"
                    },
                    {
                        "id": "19",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "20",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    }
                ]
            },
            {
                "id": "21",
                "name": "mako",
                "url": "www.mako.co.il"
            }
        ]
    }
]
const create = (type, value) => {
    const tag = document.createElement(type);
    var text = document.createTextNode(value);
    tag.appendChild(text);
    return tag;
}
const createElements = (data) => {
    // div
    const div = document.createElement("div");
    div.setAttribute("class", "div-container");
    // id
    const header = create("h3", "Id: " + data.id)
    div.appendChild(header);
    // name
    const name = create("p", "Site Name: " + data.name)
    div.appendChild(name);
    // url
    const url = create("a", "Site url: " + data.name)
    url.setAttribute("href", data.url);
    url.setAttribute("target", "_blank");
    div.appendChild(url);
    return div;
}
const displayData = () => {
    document.getElementById("display").innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const div = createElements(data[i]);
        div.setAttribute("class", "bigDiv")
        const width = 40;
        const color = 346;
        const left = 11;
        func(data[i], div, width, color, left)
        document.getElementById("display").appendChild(div)
    }
}
function func(obj, div, width, color, left) {
    if (obj.subData != undefined) {
        width /= 1.6;
        color +=60;
        left /= 1.6;
        for (let i = 0; i < obj.subData.length; i++) {
            const subDiv = createElements(obj.subData[i]);
            subDiv.style.width = `${width}vw`;
            subDiv.style.left = left+"rem";
            subDiv.style.backgroundColor = "#"+color;
            div.appendChild(subDiv);
            func(obj.subData[i], subDiv, width,color, left);
        }
    }
}


// Function getData - get data from the server 
function getData() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
        }
    };
    xhr.open("get", "http://localhost:8080/getData", true);
    xhr.send();
}