const removeOld = () => {
    const old = document.querySelector('[data-svgliza="btn"]');
    const prevSvg = document.querySelector('[data-svgliza="current"]');
    if (old) {
        old.remove();
    }
    if (prevSvg) {
        delete prevSvg.dataset.svgliza;
    }
};
const genHref = () => {
    const svg =  document.querySelector('[data-svgliza="current"]');
    if (!svg.attributes.xmlns) {
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    }
    const svgData = svg.outerHTML;
    const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    a.href = 'data:image/svg+xml;base64,' + window.btoa(svgData);
    const name = `${document.location.host}-${(Date.now() / 3).toFixed(4)}.svg`;
    a.download = name;
    a.click();
}

if (document.addEventListener) {
    document.addEventListener('click', removeOld);
    document.addEventListener('contextmenu', function(e) {
        if (e.target.nodeName !== 'svg') {
            return;
        }
        removeOld();
        const div = document.createElement('div');
        div.dataset.svgliza = 'btn';
        const a = document.createElement('a');
        a.textContent = 'download';
        e.target.dataset.svgliza = 'current';
        a.style.cursor = 'pointer';
        div.style.position = 'fixed';
        div.style.left = `${e.clientX}px`;
        div.style.top = `${e.clientY}px`;
        div.style.zIndex = '999';
        div.style.border = '1px solid grey';
        div.appendChild(a);
        div.style.backgroundColor = '#ebebeb';
        div.style.padding = '5px 15px';
        document.body.appendChild(div);
        a.onclick = genHref;
        e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function(e) {
      console.log(e);
    });
  }