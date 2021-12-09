let question = document.getElementsByClassName("question");
let i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function ()
    {
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.stylemaxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}