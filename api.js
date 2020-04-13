const axios = require('axios');

const githubAPICall = userName => {
    console.log(userName);
    const queryUrl = `https://api.github.com/users/` + userName;

    return axios
        .get(queryUrl, {
            headers: {
                "Authorization": `token ${process.env.GH_TOKEN}`
            }
        })
        .then(res => {
            console.log(res.data);
            return res

        }).catch(err => {

            console.log(err);

        });

    //end function
}

module.exports = githubAPICall;