
function navigate(page) {
  fetch(page + ".html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("main-content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("main-content").innerHTML = "<p>Sezione non disponibile.</p>";
    });
}
