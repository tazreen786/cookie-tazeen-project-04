let registeredUser = null;
let diceRolls = [];
let rollCount = 0;

function showForm() {
    document.getElementById("form-container").style.display = "block";
}

function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if (username && email && password) {
        registeredUser = { username, email, password };
        document.getElementById("form-container").style.display = "none";
        alert(`${username} your registration successful🥳!`);
    } else {
        alert("Please fill in all fields.");
    }
}

function showRegisteredUser() {
    if (registeredUser) {
        alert(`Username: ${registeredUser.username}\n\nEmail: ${registeredUser.email}`);
    } else {
        alert("Please register first.");
    }
}

function rollDice() {
    if (rollCount < 3) {
        const result = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(result);
        rollCount++;

        if (rollCount === 3) {
            const sum = diceRolls.reduce((acc, current) => acc + current, 0);
            if (sum > 10) {
                alert("You can now click on the 4th image.");
            }
        } else {
            alert(`You rolled a ${result}`);
        }
    } else {
        alert("You can only roll the dice 3 times.");
    }
}

function generateCoupon() {
    if (registeredUser && rollCount === 3) {
        const coupon = Math.floor(Math.random() * 900000000000) + 100000000000;
        alert(`🎉Congratulations🥳, you've won a coupon! \n Coupon Code: ${coupon}`);
    } else {
        alert("You need to fill form to generate a coupon.");
    }
}





















