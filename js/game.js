const DEFAULT_SETTINGS = {
    user_account:'Гость',
    name:'Hamster',
    avatar:'../assets/avatars/ava.png'
}



function init(account=DEFAULT_SETTINGS) {
    let state; 
    let data = loadData();

    if(data){
        state = loadAccount(data)
    }else{
        state = createAccount(account)
    }
    console.log('Проверка из game.js',data)

    

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

    window.addEventListener('keydown',(e)=>{
        if(e.key == 's'){
            let isConfirmed = confirm('Вы хотите сохранить прогресс на слот memory-card?')
            if(isConfirmed){
                saveData(state)
            }
        }

        if(e.key == 'd'){
                deleteData(state)
        }
    })

    // Loop
        const loop = () => {
       update(state);
       let rafID = requestAnimationFrame(loop)
    }
    loop()
}




