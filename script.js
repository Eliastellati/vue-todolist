var app = new Vue({
    el: "#app",
    data: {
        items: ['studiare Vue.js', 'Lavare i Piatti'],
        doneItem: false
    },

    methods: {

        addItem() {
            this.items.push(this.newItem);
            this.newItem = '';
        },

        doneTodo() {
            doneItem = true;
            if (doneItem = true) {
                document.getElementsByClassName('status').color = green;
            }
        }


    }
})