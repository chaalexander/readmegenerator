const axios = require('axios');

function githubAPICall(userName) {
    console.log(userName);
    const queryUrl = `https://api.github.com/users/` + userName;

    return axios
        .get(queryUrl, {
            headers: {
                "Authorization": `token ${process.env.GH_TOKEN}`
            }
        })
        .then(function (res) {
            console.log(res.data);
            return res

        }).catch(function (err) {

            console.log(err);

        });

    //end function
}

module.exports = githubAPICall;