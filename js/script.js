document.addEventListener('DOMContentLoaded', function () {

    const questions = document.querySelectorAll('.faq-question');


    questions.forEach(question => {
        question.addEventListener('click', function () {

            const faqItem = this.parentNode;

            faqItem.classList.toggle('active');


            const answer = faqItem.querySelector('.faq-answer');

            if (faqItem.classList.contains('active')) {

                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {

                answer.style.maxHeight = "0";
            }
            questions.forEach(otherQuestion => {
                const otherFaqItem = otherQuestion.parentNode;
                if (otherFaqItem !== faqItem && otherFaqItem.classList.contains('active')) {
                    otherFaqItem.classList.remove('active');
                    otherFaqItem.querySelector('.faq-answer').style.maxHeight = "0";
                }
            });

        });
    });
});