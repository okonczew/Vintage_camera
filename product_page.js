class Camera {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

let firstCamera = new Camera('Kodak Pony', 11526);
let secondCamera = new Camera('Argus', 27652);
let thirdCamera = new Camera('Sawyers Nomad', 35462);
let fourthCamera = new Camera('Kodak Synchro', 76546);
let fifthCamera = new Camera('Rollei', 42536);
let sixthCamera = new Camera('Kodak Shutter', 86357);


localStorage.setItem('cartItem1', JSON.stringify(firstCamera));
localStorage.setItem('cartItem2', JSON.stringify(secondCamera));
localStorage.setItem('cartItem3', JSON.stringify(thirdCamera));
localStorage.setItem('cartItem4', JSON.stringify(fourthCamera));
localStorage.setItem('cartItem5', JSON.stringify(fifthCamera));
localStorage.setItem('cartItem6', JSON.stringify(sixthCamera));


const btn = document.querySelector('button');

let apiRequest = new XMLHttpRequest();

btn.addEventListener('click', () => {
    apiRequest.open('GET', 'http://localhost:3000/api/cameras/:_id')
    apiRequest.send();
});

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        const response = JSON.parse(apiRequest.response);
    }
}







// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     console.log('clicked');

// })














// let data = {
//     name: "Kodak",
//     price: 200,
//     id: 0
// };
// console.log(JSON.stringify(data));

// localStorage.setItem('cartItem', JSON.stringify(data));

// console.log(localStorage.getItem('cartItem'));