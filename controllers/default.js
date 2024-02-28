exports.install = function() {
    ROUTE('GET /', home);
};


async function home($) {
    var projects = await DATA.all('nosql/projects').promise();
    $.view('index', { projects: projects });
}
