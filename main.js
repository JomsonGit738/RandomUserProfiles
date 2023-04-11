UserGenerator()
async function UserGenerator(){
    let result = await fetch(`https://randomuser.me/api`)
    result.json().then((result)=>{
        if(result.message){
            alert(result.message)
        }
        else {
            // console.log(result);
            display(result.results[0])
        }
    })
    .catch((error)=>{
        alert(error)
    })
}
function display(data){
    // console.log(data.results[0]);
    email.innerHTML = data.email

    let User_name = data.name.title+' '+data.name.first+' '+data.name.last
    names.innerHTML = User_name

    dob.innerHTML = data.dob.age
   
    address.innerHTML = data.location.street.name+', '+data.location.country

    phone.innerHTML = data.phone

    userId.innerHTML = data.login.username

    profile.src = `${data.picture.large}`
} 