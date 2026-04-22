 function login(event) {
            event.preventDefault()
            const pass = 'swarnava'
            const email = 'swarnavachakraborty2@gmail.com'

            const userEmail = document.getElementById('email').value
            const userPass = document.getElementById('pswd').value
            if (email === userEmail && pass === userPass) {
                window.location.assign('http://127.0.0.1:3002/c:/Users/Swarnava/OneDrive/Desktop/FRONTEND%20DEV/web%20project/3.html?vscode-livepreview=true')
            } else {
                alert("Invalid Credentials!!")
            }
           
        }