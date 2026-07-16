function animate(el){
     el.classList.add('active_hamster')
    let timerId = setTimeout(()=>{
        el.classList.remove('active_hamster')
    },100)
}


