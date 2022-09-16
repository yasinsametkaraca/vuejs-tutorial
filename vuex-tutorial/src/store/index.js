import { createStore } from 'vuex'


export default createStore({
  state: {
    user:{
      name: 'yasin',
      lastName: 'karaca',
      age:24,
      password: '123abc'

    },
    userName: 'ysk',
    status:[1,2,3,4,5],
    theme:'light',
    itemList: [
      {id:1, title: 'pc',type: 'electronic',},
      {id:2, title: 'tv',type: 'electronic',},
      {id:3, title: 'cablo',type: 'electric',},
    ],
    storeValue:5
  },
  getters: {
    electricItems: state=>state.itemList.filter(item => item.type == "electric"),       /*state deki verileri almak istersek*/
    activeUser(state){
      const user = {...state.user}
      delete user.password   /*frontend de password bilgisini istemeyiz*/
      return user
      },
    getStoreValue: state=>state.storeValue
    },
  mutations: {  /*state de ki verileri set edebilmek için*/  /*senkron işlemler için kullanılır yani backendden veri geç gelsede orda veri gösterilir*/
    newItem(state,item){
      state.itemList.push(item)
    },
    setStoreValue(state,payload){
      state.storeValue = payload
    }
  },
  actions: {                      /*mutationda asenkron olmuyor. İşte bu yüzden  asenkron işlemler için action kullanırız*/
    /*newItem(context,item){
      setTimeout(()=> {           /!*asenkron da setTimeout yerine asyc await de kullanılabilir*!/
        context.commit('newItem',item);  /!*Asenkron olarak çalışacak olan metodları buraya bu şekilde tanımlarız. Bunun için yine mutationda tanımladığımız metodları kullanırız.*!/
      },2000)
    }*/
    newItem({commit},item){
      setTimeout(()=> {
        commit('newItem',item);  /*üssteki de olur bu tarzda olur*/
      },2000)
    },
    setStoreValueAsync({commit},payload){
      commit('setStoreValue',payload)
    }
  },
  modules: {
  }
})
