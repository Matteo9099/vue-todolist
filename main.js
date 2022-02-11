const vue = new Vue (
    {
        el: "#app",
        data: {
            newtodo: '',

            todos: [
                { obj: 'Pane', done: true},
                { obj: 'Latte', done: false},
                { obj: 'Carne', done: true},
                { obj: 'Biscotti', done: false},
            ]
        },
        methods: {
            // creo un metodo che stampi all'interno della lista il valore passato nell'imput
            addTodo(){
                this.todos.push({obj: this.newtodo, done:false});
                this.newtodo = "";
            },
            // Funzione che elimina il todo cliccato
            removeTodo(index){
                this.todos.splice(index, 1);
            },
            // al click dell'item invertire il valore di done
            toggleElement(index){
                this.todos[index].done = !this.todos[index].done;
            }
        }
    }
)