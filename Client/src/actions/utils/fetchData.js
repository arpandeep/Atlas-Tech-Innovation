

// const fetchData =async({url, method='POST',token='', body=null},dispatch)=>{
//     const headers= token 
//         ?{'Content-Type':'application/json', authorization:`Bearer ${token}`}
//         :{'Content-Type':'application/json'};
//     body= body ?{body:JSON.stringify(body)}:{}
//     try {
//         const response = await fetch(url, {method, headers, ...body})
//         const data = await response.json()
//         if(!data.success){
//             if(response.status===401) dispatch({ type: 'UPDATE_USER', payload:null})
//             throw new Error(data.message)
//         }
//         return data.result
//     } catch (error) {
//         dispatch({type:'UPDATE_ALERT', payload:{open:true, severity:'error', message:error.message}})
//         console.log(error)
//         return null
//     }
    
// }

// export default fetchData;


const fetchData = async ({ url, method = 'POST', token = '', body = null }, dispatch) => {
    const headers = token 
        ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        : { 'Content-Type': 'application/json' };

    const options = {
        method,
        headers,
        ...body && { body: JSON.stringify(body) },
    };

    try {
        const response = await fetch(url, options);

        // If fetch fails due to network issues, it won't have a response, so we need to check for it
        if (!response.ok) {
            // If the response status is not okay, throw an error
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.success) {
            if (response.status === 401) {
                dispatch({ type: 'UPDATE_USER', payload: null });
            }
            throw new Error(data.message);
        }

        return data.result;

    } catch (error) {
        // Improved error handling and logging
        dispatch({
            type: 'UPDATE_ALERT',
            payload: { open: true, severity: 'error', message: error.message },
        });
        console.error('Fetch error:', error);
        return null;
    }
};

export default fetchData;
