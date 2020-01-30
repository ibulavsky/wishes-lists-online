const SET_LISTS = 'wishesListsAPP/ListsReducer/SET_LISTS';
const SET_LISTS_LOADING = 'wishesListsAPP/ListsReducer/SET_LISTS_LOADING';
const SET_ERROR_MESSAGE = 'wishesListsAPP/ListsReducer/SET_ERROR_MESSAGE';
const SET_WISHES = 'wishesListsAPP/ListsReducer/SET_WISHES';


const ADD_WISHLIST = 'wishesListsAPP/ListsReducer/ADD_WISHLIST';
const DELETE_WISHLIST = 'wishesListsAPP/ListsReducer/DELETE_WISHLIST';
const UPDATE_WISHLIST = 'wishesListsAPP/ListsReducer/UPDATE_WISHLIST';
const ADD_WISH = 'wishesListsAPP/ListsReducer/ADD_WISH';
const DELETE_WISH = 'wishesListsAPP/ListsReducer/DELETE_WISH';
const UPDATE_WISH = 'wishesListsAPP/ListsReducer/UPDATE_WISH';


let initialState = {
    wishesLists: [
        {
            name: 'ListTOP',
            id: '98e8465e-894f-4491-905a-2111f823b728',
            wishes: [
                {
                    id: '515f5f49-0a8b-4fd3-a298-b96426c062cc',
                    title: 'ads',
                    description: null,
                    completed: false,
                    todoListId: '98e8465e-894f-4491-905a-2111f823b728',
                    order: 0,
                    status: 0,
                    priority: 1,
                    startDate: null,
                    deadline: null,
                    addedDate: '2019-12-11T18:20:58.023'
                }
            ]
        }
    ],
    isListsLoading: false,
    errorMessage: '',
}

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LISTS:
            return {
                ...state,
                wishesLists: [...action.wishesLists],
            };
        case SET_LISTS_LOADING:
            return {
                ...state,
                isListsLoading: action.listsLoading,
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage,
            };
        case SET_WISHES:
            return {
                ...state,
                wishesLists: state.wishesLists.map(l => {
                    if (l.id === action.listId) {
                        return {
                            ...l, wishes: [...action.wishes]
                        }
                    } else {
                        return l
                    }
                }),
            };
        case ADD_WISHLIST:
            return {
                ...state,
                wishesLists: [action.newWishesList, ...state.wishesLists],
            };
        case DELETE_WISHLIST:
            return {
                ...state,
                wishesLists: state.wishesLists.filter(wl => {
                    if (wl.id !== action.wishesListId) {
                        return true
                    } else {
                        return false
                    }
                })
            };
        case UPDATE_WISHLIST:
            return {
                ...state,
                wishesLists: state.wishesLists.map(wl => {
                    if (wl.id === action.wishesListId) {
                        return {...wl, ...action.payload}
                    }
                    return wl
                })
            };
        case ADD_WISH:
            return {
                ...state,
                wishesLists: state.wishesLists.map(l => {
                    if (l.id === action.listId) {
                        return {
                            ...l, wishes: [action.newWish, ...l.wishes]
                        }
                    } else {
                        return l
                    }
                }),
            };
        case DELETE_WISH:
            return {
                ...state,
                wishesLists: state.wishesLists.map(l => {
                    if (l.id === action.listId) {
                        return {
                            ...l, wishes: l.wishes.filter(w => {
                                if (w.id !== action.wishId) {
                                    return true
                                }
                                return false
                            })
                        }
                    }
                    return l
                })
            };
        case UPDATE_WISH:
            return {
                ...state,
                wishesLists: state.wishesLists.map(l => {
                        if (l.id === action.listId) {
                            return {
                                ...l, wishes: l.wishes.map(w => {
                                    if (w.id === action.wishId) {
                                        return {...w, ...action.payload}
                                    }
                                    return w
                                })
                            }
                        }
                        return l
                    }
                )
            }
        default:
            return state;
    }
};

export default listsReducer

export const setLists = wishesLists => ({type: SET_LISTS, wishesLists})
export const setListsLoading = listsLoading => ({type: SET_LISTS_LOADING, listsLoading})
export const setErrorMessage = errorMessage => ({type: SET_ERROR_MESSAGE, errorMessage})
export const setWishes = (listId, wishes) => ({type: SET_WISHES, listId, wishes})


export const addWishesList = newWishesList => ({type: ADD_WISHLIST, newWishesList})
export const deleteWishesList = wishesListId => ({type: DELETE_WISHLIST, wishesListId})
export const updateWishesList = (wishesListId, payload) => ({type: UPDATE_WISHLIST, wishesListId, payload})
export const addWish = (newWish, listId) => ({type: ADD_WISH, newWish, listId})
export const deleteWish = (listId, wishId) => ({type: DELETE_WISH, listId, wishId})
export const updateWish = (listId, wishId, payload) => ({type: UPDATE_WISH, listId, wishId, payload})
