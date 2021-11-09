if (window.location.host) {
    const svgs = { pure: [], dirty: [] };
    svgs.pure = document.querySelectorAll('svg');
    svgs.dirty = document.querySelectorAll('[src*=".svg"');
    svgs.pure.forEach((svg) => {
        svg.classList.add('svg-liza', 'highlight');
    });
    
    // svgs.dirty.forEach((svg) => {
    //     svg.style.borderBottom = '2px red solid';
    // });
}
