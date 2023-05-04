let APIHOST = "";
let APIPORT = 3001;
try {

    //console.log(window.location.hostname);

    //console.log(window.location.port);

    let protocol = window.location.protocol == "https:" ? "https:" : "http:";

 

    APIHOST = `${protocol}//${window.location.hostname}:${APIPORT}`;

 

} catch {

    console.log("URL Error");

}

 

export default APIHOST;