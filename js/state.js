function createAccount(account){
    return{
    account,
    profit_per_hour: 100,
    exp: 0,
    level: 1,   
    rank:['Beginner','Medium','Rare','Ultra-rare','Epic','Mythic','Legendary'],
    balance: 0,
    energy: 1000,
    suits:[{name:'beginner',src:'./assets/suits/suit-1.png'}],
    coins_to_level_up:function(){return 100 * this.level},
    coin_per_tap: function(){return this.level * 1},
    
    }


}