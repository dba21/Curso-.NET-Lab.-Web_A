new Vue({
    el: "#app",
    data: {
        itemP: {
            quantity: null,
            name: null,
        },
        index: null,
        list: []
    },

    mounted() {
        const itemPs = JSON.parse(localStorage.getItem("itemP"))
        this.list = itemPs ? itemPs : []
    },

    methods: {
        add() {
            if (this.itemP.id === 0) {
                this.itemP.id = this.list.length + 1
                this.list.push(this.itemP)
            }
            else {
                this.list[this.index] = this.itemP
            }
            localStorage.setItem("itemP", JSON.stringify(this.list))
            this.itemP = { quantity: null, name: null }
        },

        remove(item) {
            const idx = this.list.indexOf(item)
            this.list.splice(idx, 1)
            localStorage.setItem("itemP", JSON.stringify(this.list))
        },

        edit(item) {
            this.index = this.list.indexOf(item)
            this.itemP = Object.assign({}, item);
            localStorage.setItem("itemP", JSON.stringify(this.list))
        }
    },
});