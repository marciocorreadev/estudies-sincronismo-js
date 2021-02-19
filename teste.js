const getUser = callback => {
    setTimeout(() => {
        return callback(null, { id: 1, name: 'Márcio corrêa' })
    });
}
const getAdress = (id, callback) => {
    setTimeout(() => {
        callback(null,
            {
                1: 'Monte Alto - GO',
                2: 'Brazlândia - DF',
                3: 'W3 Norte - DF',
            }[id || 1]
        )
    });
}

(() => {
    getUser((error, user) => {
        if (!user) return console.log(new Error('User not found'));
        getAdress(user.id, (error, adress) => {
            if (!adress) return console.log(new Error('Adress not found'));
            user.adress = adress;
            console.log(user)
        })
    })
})()
