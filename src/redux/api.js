// 
import axios from 'axios';
export const getproduct=async(query)=>{

    const url = `https://api.unsplash.com/search/photos?per_page=50&query=${query}&client_id=fNZxU3j0BwP87u2Fco6aFSZOkn-4S9kmkx9bGH5nq3s`
    return  await axios.get(url)
}
// import  * as types from './productAction'



// export const getproduct=async(query,page)=>{
//   const  REACT_APP_KEY=`fNZxU3j0BwP87u2Fco6aFSZOkn-4S9kmkx9bGH5nq3s`
// const clientID = `?client_id=${REACT_APP_KEY}`;
// const mainUrl = `https://api.unsplash.com/photos/`;
// const searchUrl = `https://api.unsplash.com/search/photos/`;
//   let url;
//   const urlPage = `&page=${query}`;
//   const urlQuery = `&query=${page}`;
//   if (query) {
//     url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
//   } else {
//     url = `${mainUrl}${clientID}${urlPage}`;
//   }
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
    
//    types.Photos1((oldPhotos) => {
//       if (query && page === 1) {
//         return data.results;
//       } else if (query) {
//         return [...oldPhotos, ...data.results];
//       } else {
//         return [...oldPhotos, ...data];
//       }
      
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
