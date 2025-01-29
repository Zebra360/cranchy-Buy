let proofImgs = document.querySelectorAll('img');
let backBtn = document.querySelector('.button');

proofImgs.forEach(img => {
  img.addEventListener('click', () => {
    img.style.width = '100%';
    img.style.position = 'fixed';
    img.style.top = '0';
    img.style.zIndex = '1';
    backBtn.style.opacity = '1';
  });
});

backBtn.addEventListener('click', () => {
  proofImgs.forEach(img => {
    img.style.width = '200px';
    img.style.position = 'static';
    img.style.top = '';
    img.style.zIndex = '';
  });
});