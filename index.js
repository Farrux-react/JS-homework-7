const arr = [

    {
        id: 1,
        name: "iPhone 14",
        memory: 128,
        price: 1200,
    },

    {
        id: 2,
        name: "iPhone 14 Pro",
        memory: 256,
        price: 1300,
    },

    {
        id: 3,
        name: "iPhone 14 Pro Max",
        memory: 512,
        price: 1400,
    },

    {
        id: 4,
        name: "iPhone 13",
        memory: 128,
        price: 900,
    },

    {
        id: 5,
        name: "iPhone 13 Pro",
        memory: 256,
        price: 1000,
    },

    {
        id: 6,
        name: "iPhone 13 Pro Max",
        memory: 512,
        price: 1100,
    },


    {
        id: 7,
        name: "iPhone 12",
        memory: 128,
        price: 600,
    },

    {
        id: 8,
        name: "iPhone 12 Pro",
        memory: 256,
        price: 700,
    },

    {
        id: 9,
        name: "iPhone 12 Pro Max",
        memory: 512,
        price: 800,
    }
];





const signAge = (a) => {

    if (a >= 18) {
        return "Xush kelibsiz";

    } else {
        return "Xali kichkinasiz";
    }

};

const signIn = (a, b) => {

    if (a < b) {

        for (let i = 0; i < arr.length; i++) {

            if (a <= arr[i]) {
                console.log(arr[i]);
            }

        }

    } else {
        return "Pulingiz kam!";
    }

};


let age = prompt("Yoshingizni kiriting");
let phoneSum = prompt("Qancha summadagi telefonlar qiziqtiradi?")
let oylik = prompt("qancha oylik olasiz");


console.log(signAge(age));
console.log(signIn(phoneSum, oylik));








