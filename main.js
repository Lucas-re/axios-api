const url = "http://localhost:5500/api"

// CRIANDO AS FUNÇÕES COM OS METODOS HTTP ------------------------------------------

function getUsers(){
    axios.get(url)
    .then(response => {
        apiRender.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewuser(oNewuser){
    axios.post(url, oNewuser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        const data = response.data

        userId.textContent = data.id
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar 
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated ){
    axios.put(`${url}/${id}`,userUpdated)
    .then(response => {

    })
    .catch(error => console.error(error))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// INICIALIZANDO AS VARIAVEIS COMO OBJETO -------------------------------------------

const userUpdated = {
    name: "Gabriel",
    avatar: "https://picsum.photos/200/300",
    city: "Enuápolis"
}

const oNewuser = {
    name: "Lucas",
    avatar: "https://picsum.photos/200/300",
    city:"Porto Seguro"
}

// CHAMANDO AS FUNÇÕES -----------------------------------------

//updateUser(9,userUpdated)

//getUser(1)

//getUsers()

//addNewuser(oNewuser)
//deleteUser(1)

/*for(i=0; i<users;i++){
    deleteUser(i)
}*/
