let lastScrollPosition = window.pageYOffset;
const header = document.querySelector('#header');
const threshold = 50;
let isScrolling;

window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    
    isScrolling = setTimeout(() => {
        const currentScrollPosition = window.pageYOffset;
        
        // スクロール方向の検出
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > threshold) {
            // 下スクロール
            header.classList.add('hide');
            header.classList.remove('show');
        } else {
            // 上スクロール
            header.classList.add('show');
            header.classList.remove('hide');
        }
        
        lastScrollPosition = currentScrollPosition;
    }, 10);
});