let qrCanvas = null;

function generateQR() {
    let url = document.getElementById("urlInput").value.trim();
    const qrBox = document.getElementById("qrBox");
    const downloadBtn = document.getElementById("downloadBtn");

    qrBox.innerHTML = "";
    downloadBtn.style.display = "none";
    qrCanvas = null;

    if (!url) {
        alert("Please enter a URL");
        return;
    }

    // Force valid URL
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    // Quiet zone wrapper
    const wrapper = document.createElement("div");
    wrapper.style.background = "white";
    wrapper.style.padding = "12px";
    wrapper.style.display = "inline-block";

    qrBox.appendChild(wrapper);

    const qrDiv = document.createElement("div");
    wrapper.appendChild(qrDiv);

    new QRCode(qrDiv, {
        text: url,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Wait for QR render
    setTimeout(() => {
        qrCanvas = qrDiv.querySelector("canvas");
        if (qrCanvas) {
            downloadBtn.style.display = "inline-block";
        }
    }, 300);
}

function downloadQR() {
    if (!qrCanvas) return;

    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = qrCanvas.toDataURL("image/png");
    link.click();
}
