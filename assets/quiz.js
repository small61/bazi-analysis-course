document.querySelectorAll('[data-quiz]').forEach((quiz)=>{
  const feedback=quiz.querySelector('.feedback');
  quiz.querySelectorAll('button[data-answer]').forEach((button)=>{
    button.addEventListener('click',()=>{
      quiz.querySelectorAll('button[data-answer]').forEach(b=>b.classList.remove('correct','wrong'));
      const correct=button.dataset.answer==='true';
      button.classList.add(correct?'correct':'wrong');
      feedback.textContent=correct?'正确。请用自己的话说出理由，再继续。':'再看一次：日柱的天干才是日主。';
    });
  });
});
