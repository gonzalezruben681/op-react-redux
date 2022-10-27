import React from 'react'
import { connect } from 'react-redux'

// Actions
import { toggleTodo } from '../../store/actions/actions'

import TodoList from '../pure/TodoList';

// lo que hace este container es conectar estos datos al componente

// Filter Todo List
const filterTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }

}
// los props que tienen que ver con el state (del stado a sus props)
const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}
// funciones que tienen que ver con despacho de acciones como props a la función que contiene el componente
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

// We connect State & Dispach to TodoList's Props 
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;
