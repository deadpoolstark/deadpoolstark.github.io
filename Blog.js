document.addEventListener('DOMContentLoaded', () => {
  const blob = document.getElementById('blob')
  console.log(blob)
  document.body.onpointermove = event => {
    const { clientX, clientY } = event
    blob.animate(
      {
      left: `${clientX}px`,
      top: `${clientY}px`},
      {duration:3000,fill:"forwards"}
      );}
});
