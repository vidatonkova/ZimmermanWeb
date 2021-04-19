async function request(url, body) {
    let res = await fetch('http://localhost:8080/' + url,
        {
            credentials: 'omit',
            headers: {
                accept: 'application/json, text/javascript, */*; q=0.01',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json;charset=UTF-8',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
            },
            referrerPolicy: 'no-referrer-when-downgrade',
           // body: JSON.stringify(body),
            method: 'GET',
            mode: 'cors',
        },
    );
    res = await res.text();
    console.log(res.body);
    return res;

}

//TODO-convert body to json at some point


export async function createUser() {
    return await request('users/create', {
        fname: "Jane",  
        lname: "Smith",  
    });
}

export async function getUser(){
console.log("hi");

let res = await request('', {
     // token: token,
  });
  console.log(res);
  return res;

}
