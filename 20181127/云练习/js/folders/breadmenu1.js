function renderMenu(id) {
    breadNav.innerHTML='';
    let arr = getParents(id);
    // console.log(arr);
    if (arr) {
        arr.forEach((e, i, all) => {
           
            if (i !== all.length - 1) {
                let a = document.createElement('a');
                a.href = 'javascript:;';
                a.innerHTML = e.title;
                a.onclick = function () {
                    render(e.id);
                    renderMenu(e.id);
                }
                breadNav.appendChild(a);
            } else {
                let span=document.createElement('span');
                span.innerHTML=e.title;
                span.dataset.id=e.id;
                breadNav.appendChild(span);
            }

        })

    }
};



renderMenu(0);