import { base_url } from './../utils/constants';

export const SEARCH = 'SEARCH';
export const PUTTOKEN = 'PUTTOKEN';
export const DELETEITEM = 'DELETEITEM';
// export const GETSEARCHRES = 'GETSEARCHRES';
export const MESSAGE = 'MESSAGE';

export const searchAction = token => (
    {
        type: SEARCH,
        payload: token
    }
)

// export const putTokenAction = token => (
//     {
//         type: PUTTOKEN,
//         payload: token
//     }
// )

// export const deleteAction = token => (
//     {
//         type: DELETEITEM,
//         payload: token
//     }
// )

// export const messageAction = msg => (
//     {
//         type: MESSAGE,
//         payload: msg
//     }
// )



// export const fetchData = () => {
//     return async (dispatch) => {
//         try {
//             const response = await fetch(`${base_url}`);
//             const symbols = await response.json();
//             // dispatch(getSymbolsAction(symbols));
//         } catch (err) {
//             dispatch(messageAction("fetchdata Something went wrong"));
//         }
//     }
// }

    