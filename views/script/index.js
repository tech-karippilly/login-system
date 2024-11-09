


const logoutButoton =document.getElementById('logout')

logoutButoton.addEventListener('click',()=>{
    fetch('/logout').then((resposne)=>{
        if (resposne.ok) {
           alert('Logged out...')
            window.location.href = '/'; 
        } else {
            console.error('Logout failed');
        }
        
    })  .catch((error) => {
        alert(error)
        console.error('Error logging out:', error);
    });
})