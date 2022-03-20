alert("Welcome!");
const enterUsername = prompt("Enter your name");
if (enterUsername) {
  const yearsOld = prompt("Enter your age");
  if (yearsOld) {
    const enterCode = prompt("Enter code");
    if (enterCode) {
      alert('Kode yang anda masukkan salah! Anda di blokir dan tidak di izinkan untuk masuk ke = The "Dark" Web =');
      document.getElementById("hack").style.display = "block";
      document.getElementById("foot").style.display = "none";
      document.getElementById("shop").style.display = "none";
      document.getElementById("post").style.display = "none";
      document.getElementById("darkwiki").style.display = "none";
    } else {
      alert('Anda tidak memasukkan kode. Anda di blokir dan tidak di izinkan untuk masuk ke = The "Dark" Web =');
      document.getElementById("body").style.display = "none";
    }
  } else {
    alert('Anda tidak memasukkan umur anda. Anda di blokir dan tidak di izinkan untuk masuk ke = The "Dark" Web =');
    document.getElementById("body").style.display = "none";
  }
} else {
  alert('Anda tidak memasukkan nama anda. Anda di blokir dan tidak di izinkan untuk masuk ke = The "Dark" Web =');
  document.getElementById("body").style.display = "none";
}

// link

function shop() {
  document.getElementById("shop").style.display = "block";
  document.getElementById("post").style.display = "none";
  document.getElementById("darkwiki").style.display = "none";
}

function post() {
  document.getElementById("shop").style.display = "none";
  document.getElementById("post").style.display = "block";
  document.getElementById("darkwiki").style.display = "none";
}

function darkwiki() {
  document.getElementById("shop").style.display = "none";
  document.getElementById("post").style.display = "none";
  document.getElementById("darkwiki").style.display = "block";
}

// i

function buyItems() {
  alert("Error");
}

function access() {
  alert("Memproses....");
  alert("     ");
  document.getElementById("shop").style.display = "block";
  document.getElementById("navbar").style.display = "block";
  document.getElementById("foot").style.display = "block";
  document.getElementById("hack").style.display = "none";
}
