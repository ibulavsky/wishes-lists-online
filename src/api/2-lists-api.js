import {instance} from './0-configure-api';


export const listsAPI = {
    getLists() {
        return instance.get('/todo-lists',).then(response => response.data) //array of lists ({id: 'asd', order: -1, title: 'title'})
    },
    addList(list) {
        return instance.post('/todo-lists', {...list}).then(response => response.data.data.item)
    },
    updateTitleList(listId, payload) {
        return instance.put(`/todo-lists/` + listId, {...payload}).then(response => response.data)
    },
    getTasks(listId) {
        return instance.get(`/todo-lists/${listId}/tasks`).then(response => response.data.items)
    },
}
