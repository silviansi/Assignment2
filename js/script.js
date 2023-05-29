//Menampilkan dan menyembunyikan form ketika button diklik
function hideShow() {
  let x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function tampilkan() {
  let inputNama = document.getElementById("inputNama").value;
  let inputRole = document.getElementById("inputRole").value;
  let inputAvailability = document.getElementById("inputAvailability").value;
  let inputUsia = document.getElementById("inputUsia").value;
  let inputLokasi = document.getElementById("inputLokasi").value;
  let inputUniv = document.getElementById("inputUniv").value;
  let inputEmail = document.getElementById("inputEmail").value;

  document.getElementById("nama").innerHTML = inputNama;
  document.getElementById("role").innerHTML = inputRole;
  document.getElementById("availability").innerHTML = ": " + inputAvailability;
  document.getElementById("usia").innerHTML = ": " + inputUsia + " Tahun";
  document.getElementById("lokasi").innerHTML = ": " + inputLokasi;
  document.getElementById("univ").innerHTML = ": " + inputUniv;
  document.getElementById("email").innerHTML = ": " + inputEmail;
  
  //Menyembunyikan form ketika klik submit
  let x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}