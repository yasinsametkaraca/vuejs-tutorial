export default {
    namespaced: true,
    state: {
        contactName: "yasinkaraca",
        contactAddress: "Turkey",
        contactList: []
    },
    mutations: {
        setItem(state, name) {
            state.contactName = name;
        }
    },
    getters: {
        _contactName: state => state.contactName
        // _itemList: state => state.contactList
    }
};