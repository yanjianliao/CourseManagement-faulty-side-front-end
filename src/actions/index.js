import * as constants from '../constants'


export const findAllWidgets = (dispatch, topicId)=> {
    fetch(`http://localhost:8080/api/topic/${topicId}/widget`)
        .then(
            response => (response.json())
        ).then(
        widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets
        })
    )
};


export const addWidget = dispatch => {
    dispatch({type: constants.ADD_WIDGET});
};

export const saveWidget = (dispatch, topicId) => {
    dispatch({type: constants.SAVE, topicId: topicId})
};

export const textChanged = (dispatch, widgetId, newText) => {
  dispatch({type: constants.TEXT_CHANGED, id: widgetId, text: newText})
};


export const headingSizeChanged = (dispatch, widgetId, newSize) => {
    dispatch({type: constants.HEADING_SIZE_CHANGED, id: widgetId, size: newSize})
};

export const deleteWidget = (dispatch, widgetId) => {
    dispatch({type: constants.DELETE_WIDGET, id: widgetId})
};

export const changeWidgetType = (dispatch, widgetId, newType) => {
    dispatch({type: constants.SELECT_WIDGET_TYPE, id: widgetId, newType: newType})
};

export const nameChanged = (dispatch, widgetId, newName) => {
    dispatch({type: constants.NAME_CHANGED, id: widgetId, name: newName})
};

export const preview = (dispatch) => {
    dispatch({type: constants.PREVIEW})
};

export const positionUp = (dispatch, widgetId) => {
    dispatch({type: constants.POSITION_UP_BUTTON, id: widgetId})
};

export const positionDown = (dispatch, widgetId) => {
    dispatch({type: constants.POSITION_DOWN_BUTTON, id: widgetId})
};