function getContent(fragmentId, callback) {
  var pages = {
    home: "This is the Home page. Welcome to my site.",
    about: "This page will describe what my site is about",
    contact: "Contact me on this page if you have any questions",
  };

  callback(pages[fragmentId]);
}

function loadContent() {
  var contentDiv = document.getElementById("app"),
    fragmentId = location.hash.substr(1);

  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  });
}

if (!location.hash) {
  location.hash = "#home";
}

loadContent();

window.addEventListener("hashchange", loadContent);

// function scaryClown() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🤡");
//     }, 3000);
//   });
// }

// async function msg() {
//   const msg = await scaryClown();
//   console.log("Message:", msg);
// }

// msg(); // Message: 🤡 <-- after 2 seconds

// let myPromise = new Promise((resolve, reject) => {
//   let data;
//   setTimeout(() => {
//     data;

//     if (data) {
//       resolve(data);
//     } else {
//       reject();
//     }
//   }, 3000);
// });

// myPromise
//   .then((data) => {
//     console.log("Received: " + data);
//     let moreData = "Another payload";
//     return moreData;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//   console.log("There was an error");
// });

function who() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🤡");
    }, 200);
  });
}

function what() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("lurks");
    }, 300);
  });
}

function where() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("in the shadows");
    }, 5000);
  });
}

async function msg() {
  const [a, b, c] = await Promise.all([what(), who(), where()]);

  console.log(`${b}  ${a} ${c}`);
}

msg(); // 🤡 lurks in the shadows <-- after 500ms
