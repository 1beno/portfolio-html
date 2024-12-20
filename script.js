function changeVersion() {
  var selectElement = document.getElementById("versions");
  var selectedVersion = selectElement.value;

  // Redirect ke halaman yang dipilih
  if (selectedVersion) {
    window.location.href = selectedVersion;
  }
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // utk mencegah formulir terkirim

    // ambil nilai input melalui id
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const nomorWa = document.getElementById("wa").value;
    const message = document.getElementById("message").value;

    // Reset pesan error
    document.getElementById("namaError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("nomorHpError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let isValid = true;

    // Validasi form
    if (!nama) {
      document.getElementById("namaError").innerText = "Nama wajib diisi!";
      isValid = false;
    }

    if (!email) {
      document.getElementById("emailError").innerText = "Email wajib diisi!";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").innerText =
        "Format email tidak valid!";
      isValid = false;
    }

    if (!nomorWa) {
      document.getElementById("nomorHpError").innerText =
        "Nomor HP wajib diisi!";
      isValid = false;
    } else if (!/^\d{10,13}$/.test(nomorWa)) {
      document.getElementById("nomorHpError").innerText =
        "Format nomor HP tidak valid!";
      isValid = false;
    }

    if (!message) {
      document.getElementById("messageError").innerText = "Pesan wajib diisi!";
      isValid = false;
    }

    // jika data input valid, kirim ke whatsapp
    if (isValid) {
      const whatsappUrl = `https://wa.me/6282190919659?text=
                    Nama:%20${encodeURIComponent(nama)}%0A
                    Email:%20${encodeURIComponent(email)}%0A
                    Nomor%20HP:%20${encodeURIComponent(nomorWa)}%0A
                    Pesan:%20${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
    }
  });
