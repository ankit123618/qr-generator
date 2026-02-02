function generateQR() {
    let url = document.getElementById("urlInput").value.trim();
    const qrBox = document.getElementById("qrBox");

    qrBox.innerHTML = "";

    if (!url) {
        alert("Enter a URL");
        return;
    }

    // FORCE valid URL
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    // Create wrapper for quiet zone
    const qrWrapper = document.createElement("div");
    qrWrapper.style.background = "white";
    qrWrapper.style.padding = "12px";
    qrWrapper.style.display = "inline-block";

    qrBox.appendChild(qrWrapper);

    new QRCode(qrWrapper, {
        text: url,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
setTimeout(() => {
  const img = qrBox.querySelector("img");
  img.download = "qr.png";
}, 300);
if (!url.startsWith("http")) {
    url = "https://" + url;
}

