new Promise((resolve) => {
  console.log(1);
  resolve();
})
  .then(() => {
    console.log(2);
    new Promise((resolve) => {
      console.log(4);
      resolve();
    })
      .then(() => {
        console.log(5);
      })
      .then(() => {
        console.log(6);
      })
      .then(() => {
        console.log(8);
      });
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(7);
  })
  .then(() => {
    console.log(9);
  });

// Promise.resolve()
//   .then(function F1() {
//     console.log("promise1");
//     Promise.resolve()
//       .then(function F4() {
//         console.log("promise2");
//         Promise.resolve()
//           .then(function F5() {
//             console.log("promise4");
//           })
//           .then(function F6() {
//             console.log("promise?");
//           });
//       })
//       .then(function F7() {
//         console.log("promise5");
//       });
//   })
//   .then(function F2() {
//     console.log("promise3");
//   })
//   .then(function F3() {
//     console.log("promise6");
//   });
