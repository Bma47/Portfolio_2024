// // script.js
// document.addEventListener('mousemove', function(e) {
//     const cursor = document.querySelector('.cursor');
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
//
//     createFireParticle(e.clientX, e.clientY);
// });
//
// function createFireParticle(x, y) {
//     const particle = document.createElement('div');
//     particle.classList.add('fire-particle');
//     particle.style.left = `${x}px`;
//     particle.style.top = `${y}px`;
//     particle.style.width = `${Math.random() * 10 + 5}px`;
//     particle.style.height = particle.style.width;
//
//     document.body.appendChild(particle);
//
//     setTimeout(() => {
//         particle.remove();
//     }, 500); // Reduce the timeout to 500ms
// }
//
//
// // var header = document.getElementById("myDIV");
// // var btns = header.getElementsByClassName("btn");
// // for (var i = 0; i < btns.length; i++) {
// //     btns[i].addEventListener("click", function() {
// //         var current = document.getElementsByClassName("active");
// //         current[0].className = current[0].className.replace(" active", "");
// //         this.className += " active";
// //     });
// // }