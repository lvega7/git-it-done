var getUserRepos = function(user){
    // format the github api url
    var apiURL = "https://api.github.com/users/" + user + "/repos";
    
    //make a reuqest to the url
    fetch(apiURL).then(function(response){
        console.log(response);
        response.json().then(function(data){
            console.log(data);
        });
    });
};
getUserRepos("microsoft");