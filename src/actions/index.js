// TODO: add and export your own actions

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

export function createPost(body, callback) {
const request = fetch(`http://reduxblog.herokuapp.com/api/posts?key=Nessa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json()).then(callback);
  return {
    type: POST_CREATED,
    payload: request
  }
};

export function fetchPost(id){
  const promise = fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=Nessa`)
    .then(r => r.json());
    return {
      type: FETCH_POST,
      payload: promise
    };
}


export function fetchPosts(){
    const promise = fetch('http://reduxblog.herokuapp.com/api/posts?key=Nessa')
    .then(r => r.json());
    return {
      type: FETCH_POSTS,
      payload: promise
    };
};
