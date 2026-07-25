// Тап по хамстеру

function handleTap(state) {

  if(state.energy <= 0) return;

  // let copy = {...state};  Полное копирование
  console.log('handle tap')
  state.balance += coin_per_tap(state);// Прибавили монету в баланс
  animate(DOM.hamster_tap);
  updateExp(state);
  energyPerTap(state);
  lvlUp(state);
}

function updateExp(state){
  lvlUp(state)
  state.exp += 1
  
}

function energyPerTap(state){
  state.energy -=coin_per_tap(state);
  
  
}

function lvlUp(state){
  if(state.level === 10){
    console.log('Ваш герой максимально прокачан')
    return;
  }
  if(state.exp >= 99){
    state.level ++;
    state.exp = 0
  }
}

// 1 механизм каждую сек обновляет состояние денег 200 голдов в час

// 100 голдов в час 0.25 : 100 - сек

function profitPerSec(state){
  const SEC_IN_HOUR = 3600;
  state.balance += state.profit_per_hour / SEC_IN_HOUR
}

// Востановление энергии

function energyRecovery(state){
  state.energy += coin_per_tap(state)
  if(state.energy >= 1000){
    state.energy=1000
  }
}