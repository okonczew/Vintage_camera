let request = new XMLHttpRequest();

let container = document.getElementsByClassName('wrap')[0];
console.log(container.innerHTML);


request.open("GET", "http://localhost:3000/api/cameras/");
request.send();

request.onreadystatechange = () => {
    if (request.readyState === 4) {
        let responses = JSON.parse(request.response);

        container.innerHTML = "";

        responses.forEach(function (response) {
            // container.innerHTML += response.name;
            container.innerHTML += '<div>';
            container.innerHTML += '<a>';
            container.innerHTML += '<img src=" ' + response.imageUrl + '">';
            container.innerHTML += '</a>';
            container.innerHTML += '<h3>' + response.name;
            container.innerHTML += '</h3>';
            container.innerHTML += '<p>' + response.price;
            container.innerHTML += '</p>';
            container.innerHTML += '</div>';

        });
    };
};






// let request = new XMLHttpRequest();

// let container = document.getElementsByClassName('wrap')[0];
// console.log(container.innerHTML);


// request.open("GET", "http://localhost:3000/api/cameras/");
// request.send();

// request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//         let responses = JSON.parse(request.response);

//         responses.forEach(function (response) {
//             container.innerHTML += response.name;
//             container.innerHTML += '<div>';
//             container.innerHTML += '<a>';
//             container.innerHTML += '<img src=" ' + response.imageUrl + '">';

//             container.innerHTML += '<h3>soemthing stupid</h3>';
//             // cameraPrice += response.price;
//             // cameraPhoto += response.imageUrl;
//             // console.log(response.imageUrl);

//         });
//     };
// };