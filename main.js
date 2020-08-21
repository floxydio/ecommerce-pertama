//
//  BUAT CAROUSEL
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


// BUAT SHOW PASSWORD
function show() {
  const x = document.getElementById("pw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};



// Dashboard
const button = document.getElementsByTagName('button')[1];

button.addEventListener('click', function() {
  alert('Heyyy guyss\n\nSebelumnya Terimakasih udah bantu nilai web ini\n\n\nWeb ini hanya tampilan atau Front End pada e-commerce sederhana\n\nJika ada saran atau kritik bisa pm gw ke : diooktar@gmail.com\n\n(+) Beta Test : 21 Agustus\n\n(+) Release Final : 27 Agustus');
})