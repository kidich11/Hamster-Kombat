
const DOM = {
    earn_per_tap:document.querySelector('#earn-per-tap'),
    coins_to_level_up:document.querySelector('#coins-to-level-up'),
    profit_per_hour:document.querySelector('#profit-per-hour'),
    wallet:document.querySelector('#current-wallet-state'),
    user_energy:document.querySelector('#user-energy'),
    user_energy_max:document.querySelector('#user-energy-max'),
    user_level:document.querySelector('#user-level'),
    user_rank:document.querySelector('#user-rank'),
    hamster_tap:document.querySelector('#hamster-tap'),
    barLvl:document.querySelector('#main-lvl-bar-range'),
    user_rank_img:document.querySelector('#hamster-tap img')
}

function renderAll(state) {
    DOM.earn_per_tap.textContent = state.earn_per_tap;
    DOM.coins_to_level_up.textContent = coins_to_level_up(state);
    DOM.wallet.textContent = profitPerSec(state);
}



function update(state){
    DOM.wallet.textContent = state.balance.toFixed(2);
    DOM.barLvl.style.width = state.exp + '%';
    DOM.user_energy.textContent = state.energy;
    DOM.earn_per_tap.textContent = coin_per_tap(state);
    DOM.coins_to_level_up.textContent = coins_to_level_up(state);
    DOM.profit_per_hour.textContent = state.profit_per_hour;
    DOM.user_level.textContent = state.level;
    DOM.user_rank.textContent = state.rank[state.level - 1];
    if(state.level <= 11){
        DOM.user_rank_img.src = state.suits[state.level - 1].src
    }
    
}