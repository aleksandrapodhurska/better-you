const showMoreBtn = document.querySelectorAll('#showMoreBtn');

showMoreBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('bottom-40');
        e.target.parentElement.classList.toggle('h-80');        
    })
})