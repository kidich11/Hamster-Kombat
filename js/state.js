function createAccount(account){ // функция для созд аккаунта
    return{
    account,
    profit_per_hour: 100,
    exp: 0,
    level: 1,   
    rank:['Beginner','Medium','Rare','Ultra-rare','Epic','Real-Hamster',],
    balance: 0,
    energy: 1000,
    suits:[{name:'Begginer',src:'./assets/suits/suit-begginer.png'},
           {name:'Medium',src:'./assets/suits/suit-medium.png'},
           {name:'Rare',src:'./assets/suits/suit-rare.png'},
           {name:'Ultra-rare',src:'./assets/suits/suit-ultra-rare.png'},
           {name:'Epic',src:'./assets/suits/suit-epic.png'},
           {name:'Real-hamster',src:'./assets/suits/suit-real-hamster.png'},
    ],
    
    
    }


}

const coins_to_level_up = (state) => 100 * state.level;
const coin_per_tap = (state) => state.level * 1;

function loadAccount(state){ // функция для загрузки аккаунта
    return{
        ...state
    }
}