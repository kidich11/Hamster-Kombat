function loadData(){
    let storage = window.localStorage;

    console.log(storage)

    if(storage.length > 0){
        let newData = JSON.parse(storage.getItem('memory-card'))
        return newData;
    }else{
        alert('Сохраненных данных не обнаружено')
    }

}

function saveData(state){
    let storage = window.localStorage;
    let normalizeData = JSON.stringify(state)
    storage.setItem('memory-card',normalizeData)
    console.log('Данные были успешно сохранены')
}

function deleteData(){
    let storage = window.localStorage
    let isAccepted = confirm('Вы точно хотите удалить весь ваш игровой прогресс?')
    if(isAccepted){
        storage.clear();
    }
}