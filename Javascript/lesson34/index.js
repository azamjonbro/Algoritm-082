// const obj = {
//   name: "Ali",
//   great: function () {
//     console.log("Assalomu alaykum " + this.name + " aka");
//   },
//   customSlice: function (params) {
//     let result = "";
//     if (typeof params !== "string") {
//       console.log("It's not string data type");
//     }
//     let newParam = params.split("");
//     newParam.forEach((item, index) => {
//       if (isNaN(item * 1)) {
//         result += item;
//       } else {
//       }
//     });
//     return result;
//   },
// };
// // -> protptype

// obj.great();

// console.log(obj.customSlice("sa1lom1"));

async function getAllMusics() {
 fetch("http://localhost:5000/api/songs")
  .then((res) => res.json())
  .then((data) => {
   console.log(data);
  })
}

getAllMusics()

const music = {
  title: "Abrorbey - Bolalik",
  artist: "Abrorbey",
  cover: "https://picsum.photos/id/310/290/290"
};

async function createMusics(formData) {
  const res = await fetch("http://localhost:5000/api/songs", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  console.log(data);
}

let sendBtn = document.querySelector("#sendBtn");
let audio = document.querySelector("#file");

sendBtn.addEventListener("click", function () {
  const formData = new FormData();
  formData.append("title", music.title);
  formData.append("artist", music.artist);
  formData.append("cover", music.cover);
  formData.append("audio", audio.files[0]); // ✅ real fayl yuborilmoqda

  createMusics(formData);
});