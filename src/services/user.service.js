import {development} from '../config/development';

export async function register(user)
{
    const res = await fetch(`${development.apiUrl}/user/`,
        {
            method:'POST',
            body:JSON.stringify(user),
            headers:
            {
                'Content-Type':'application/json'
            }
        });
    return res.json();
}

export async function checkAvailabilityEmail(email) {
    const res = await fetch(`${development.apiUrl}/user/get`)
    .then((res)=> res.json())
    .then((users)=> {const isValid = users.find(user=>user.email === email);
        return isValid;
    })
    .catch(false);
    return !res;
    
    // const arr = res.json();
    // let condition = true;
    // for(var i=0;i<arr.length;i++)
    // {
    //     if(arr[i].email === email){
    //         condition = !condition;
    //     }
    // }
    
    // return condition;
    // console.log(res);
    // return false;
}

// module.exports={
//     register,
//     checkAvailabilityEmail
// }   