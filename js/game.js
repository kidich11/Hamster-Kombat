const DEFAULT_SETTINGS = {
    user_account:'Гость',
    name:'Hamster',
    avatar:'../assets/avatars/ava.png'
}



function init(account=DEFAULT_SETTINGS) {

    let state = createAccount(account);

    renderAll(state); //Рендерим первичный стейт

    const energyRecoveryIntervalId = setInterval(() => {
        energyRecovery(state)
    },1000)

    const coinUpdateIntervalId = setInterval(() => {
        profitPerSec(state)
    },1000);

    // Подключаем обработчик событий

    DOM.hamster_tap.addEventListener('click', (event)=>{
        handleTap(state);
        update(state);
        
    })
    // Loop
        const loop = () => {
       update(state);
       let rafID = requestAnimationFrame(loop)
    }
    loop()
}




