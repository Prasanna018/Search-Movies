const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "FBbnvpZh3fuMC2eu-ogjjS8vUUHEoIRYHEVnb0iXpoZaKQkDBa");
myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "d3ee0b1f-e51c-46bc-99eb-c660726b0a1b");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");



let btnVal = document.querySelector("btn-cmn");

let main = document.querySelector("main");

async function getData(btnVal) {
    main.innerHTML = "";
    let search;
    main.classList.add("loader");

    try {
        let id = btnVal.id;
        if (id === "btn1") {

            search = btn1.innerText;
        }
        else if (id === "btn2") {
            search = btn2.innerText;
        }
        else {
            search = btn3.innerText;
        }
        document.title = search;

        let res = await fetch(`https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/${search}`, requestOptions)
        let data = await res.json();
        main.classList.remove("loader");
        console.log(data);
        let display = data.movies;

        display.forEach(element => {
            let div = document.createElement("div");
            main.appendChild(div);
            let span = document.createElement("span");
            span.textContent = element.title;
            div.appendChild(span);
            let img = document.createElement("img");
            img.setAttribute("src", element.image);
            div.appendChild(img);
            let a = document.createElement("a");
            a.href = element.link;
            a.textContent = "visit movie"
            div.appendChild(a)


        });



    } catch (error) {
        console.error(error);
    }


}



