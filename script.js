const faqQuestion = document.querySelectorAll('.faq-question')
const faqAnswer = document.querySelectorAll('.faq-answer')

console.log(faqAnswer);

function activeTab(index) {
    faqQuestion[index].classList.toggle('active');
    faqAnswer[index].classList.toggle('active');
}

faqQuestion.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        activeTab(index);
    })
})