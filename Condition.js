let launchBrowser = "Chrome"

if(launchBrowser=="edge"){
    console.log("Edge Browser is launched")
}
else if(launchBrowser=="Chrome"){
    console.log("Chrome browser is launched")
}
else if(launchBrowser=="firfox"){
    console.log("firefox browser is launched")
}
else{
    console.log("IE browser is launched")
}

let runTests = "sanity"
switch(runTests){
    case 'smoke':
        console.log("Smoke testing");
        break;
    case 'sanity':
        console.log("sanity testing");
        break;
    case 'regression':
        console.log("regression testing");
        break;
    default:
    console.log("functional testing");
}