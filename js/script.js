
function search() {
    var userName = document.getElementById("inputUser").value;

    var userAPI = ` https://api.github.com/users/${userName}`;

    $.getJSON(userAPI, (user) => {

        document.getElementById("userData").innerHTML =
            `<div class="container bg-light bg-gradient rounded shadow p-3">
                <div class="mt-2" id="name">
                    ${user.name}
                </div>

                <div id="html_url">
                    <a href=${user.html_url}>Portfólio</a>
                </div>

                <div id="company">
                    ${user.company}
                </div>

                <img class="rounded shadow mt-2" width="200" height="200"
                    src=${user.avatar_url} id="avatar_url">
            </div>`
    }
    );
};