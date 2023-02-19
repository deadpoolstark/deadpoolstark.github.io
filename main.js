console.log("works?")
document.addEventListener('DOMContentLoaded', () => {
  const blob = document.getElementById('blob');
  console.log(blob);
  document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    blob.animate(
      {
        left: `${clientX + scrollX}px`,
        top: `${clientY + scrollY}px`
      },
      {
        duration: 3000,
        fill: "forwards"
      }
    );
  };
  window.addEventListener('scroll', () => {
    if (window.scrollY >= pageHeight) {
      blob.style.animationPlayState = 'paused';
    } else {
      blob.style.animationPlayState = 'running';
    }
  });
});
