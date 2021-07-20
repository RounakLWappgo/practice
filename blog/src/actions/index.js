import jsonplace from "../axios/jsonplace"

export const fetchPost = () => async dispatch => {
       const res = await jsonplace.get('/posts');
       dispatch({type: 'FETCH_POSTS' , payload: res.data})
    }

export const fetchUser = id => async dispatch =>{
    const res =await jsonplace.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER' , payload: res.data})
}