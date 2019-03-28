btn.addEventListener('click', function () {
   __webpack_require__.e( 0)
    .then(__webpack_require__.bind(null,"./src/use.js"))
    .then(function (data) {   
        console.log(data.default);
      });
});