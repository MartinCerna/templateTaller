function exportBodyAsImage() {
   html2canvas(document.body, {
      useCORS: true,
      allowTaint: true,
      width: 1920,      // Fuerza ancho
      height: 1080,     // Fuerza alto
      windowWidth: 1920, // Simula viewport ancho
      windowHeight: 1080, // Simula viewport alto
      scale: 1          // Evita que escale con el devicePixelRatio
   }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "plantilla.png";
      link.click();
   });
}

window.onload = exportBodyAsImage;