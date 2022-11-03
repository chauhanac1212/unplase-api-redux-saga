import  * as types from './productAction'

const initialsState={
    photo:[],
    error:null,
    loading:false
}

export const productData = (state =initialsState, action) => {
    switch (action.type) {
            case types.PRODUCT_START :
                // console.warn("PRODUCT_LIST condition ", action)
                return {
...state,
loading:true,

                }
                case types.PRODUCT_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        photo:action.payload
                    }
                    case types.PRODUCT_FAIL:
                        return {
                            ...state,
                            loading:false,
                            erroe:action.payload
                        }
                        default:
                            return{
                                state}
    }
}