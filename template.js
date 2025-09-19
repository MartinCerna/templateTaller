function exportBodyAsImage() {
   html2canvas(document.body, {
      useCORS: true,   // Habilita carga de imágenes externas
      allowTaint: true // Permite renderizar aunque no sean del mismo dominio
   }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "plantilla.png";
      link.click();
   });
}

window.onload = exportBodyAsImage;