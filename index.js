let count = 0;
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn){
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        console.log(styles.contains("1"))
        if (styles.contains("1")){
            count--;
        }
        else if (styles.contains("2")){
            count++;
        }
        else{
            count == 0;
        }

        if (count < 0){
            value.style.color ="red"
        }
        if (count > 0){
            value.style.color = "green"
        }
        if (count === 0){
            value.style.color = "black"
        }
        value.textContent = count;
    })
})