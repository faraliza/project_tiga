document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('click', () => {
      alert('Ayo liat kegiatan sekola!');
    });
  }
});