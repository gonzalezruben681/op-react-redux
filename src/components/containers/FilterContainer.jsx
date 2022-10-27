import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions/actions'
import Filter from '../pure/Filter'
// este se va a encargar con filter la acción de despachar el filtro
// se encarga en conectar el estado con el componente
// mapa Estado a Props
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState 
    }
}
// despacha las acciones - mapa Envío a Props
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer
