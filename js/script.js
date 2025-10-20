
var usersHistory = [];

function search() {
    $("#error").html(" ");

    var userName = document.getElementById("inputUser").value;

    var userAPI = `https://api.github.com/users/${userName}`;

    $.getJSON(userAPI, (user) => {

        showUser(user);

        if (isNew(user)) {
            save(user);
            showUsersHistory(user);
        }

    }).fail(() => {

        showMessageError("Usuário não encontrado! Tente novamente.");

        cleanError();
    });
};

function showUser(user) {

    $("#userData").html(
        `<div class="container bg-light bg-gradient rounded shadow p-3">
                <div class="mt-2" id="name">
                    ${user.name}
                </div>

                <div id="html_url">
                    <a href=${user.html_url}>Portfólio</a>
                </div>

                <div id="company">
                    ${user.company ? user.company : "Empresa não informada"}
                </div>

                <img class="rounded shadow mt-2" width="200" height="200"
                    src=${user.avatar_url} id="avatar_url" alt="avatarUser">
            </div>`
    );
};


function showMessageError(msg) {
    $("#error").html(`<div class='alert alert-danger mt-2' role='alert'>${msg}</div>`);
};

function cleanError() {
    $("#userData").html(" ");
};

function showUsersHistory(user) {
    $("#history").append(`<div class="col"> <img class="rounded shadow mt-2" width="100" height="110"
                            src=${user.avatar_url} id="avatar_url">
                    </div>`)
};

function isNew(user) {
    return usersHistory.filter((aUser) => aUser.login === user.login).length === 0;
}

function save(user) {
    usersHistory.push(user);
}