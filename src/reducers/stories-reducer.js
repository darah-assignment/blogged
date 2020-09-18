import cookie from 'react-cookies';
import superagent from 'superagent';

const initialState = { blogs: [], blogDetails: {} };
const API = 'https://bloggedback.herokuapp.com';

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'showBlogs':
      return { ...state, blogs: payload.blogs };
    case 'showBlogDetails':
      return { blogDetails: payload };
    case 'addBlog':
      return { ...state, blogs: [payload, ...state.blogs] };
    default:
      return state;
  }
};
// -- Functions -- >

export const _getAllBlogs = () => {
  return dispatch => {
    return superagent
      .get(`${API}/api/v1/blogs`)
      .accept('application/json')
      .then(blogs => {
        dispatch(getBlogsAction({ blogs: blogs }));
      })
      .catch(console.error);
  };
};

export const _getBlogDetails = id => {
  return dispatch => {
    return superagent
      .get(`${API}/api/v1/blogs/${id}`)
      .accept('application/json')
      .then(blogDetes => {
        console.log('blogDetes.body.records[0]', blogDetes.body.records[0]);
        dispatch(getBlogDetailsAction(blogDetes.body.records[0]));
      })
      .catch(console.error);
  };
};

// export const _addBlog = (body) =>{
//     const cookieToken = cookie.load()
// }

// -- Actions -- >

export const getBlogsAction = payload => {
  return {
    type: 'showBlogs',
    payload: payload,
  };
};
export const getBlogDetailsAction = payload => {
  return {
    type: 'showBlogDetails',
    payload: payload,
  };
};
export const addBlogAction = payload => {
  return {
    type: 'addBlog',
    payload: payload,
  };
};
