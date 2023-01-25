import fakeUsers from "./Data/emago_fake_users.json";

const AjaxRequest = (props) => {
    
    // a random number between 1 and 1000
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    var fakeData = JSON.parse(fakeUsers);
    
    const getUserName = () => {
        for (let index = 0; index < fakeData.length; index++) {
            const fakeUser = fakeData[index];
            if (fakeUser.id == randomNumber){
                return <h1>{fakeUser.username}</h1>
            }
    }
    }

    const getImage = () => {
        for (let index = 0; index < fakeData.length; index++) {
            const fakeUser = fakeData[index];
            if (fakeUser.id == randomNumber){
                ajaxRequest(fakeUser.user_image)
            }
        }
    }

    function ajaxRequest(url) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            return <h1>{this.responseText}</h1>
            }
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    return(
        // experimental?
        <>
             <h1>{getUserName()}</h1>
             <h1>{getImage()}</h1>
        </>
       
    );
}



export default AjaxRequest;