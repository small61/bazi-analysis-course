document.querySelectorAll('[data-quiz]').forEach((quiz)=>{
  const feedback=quiz.querySelector('.feedback');
  quiz.querySelectorAll('button[data-answer]').forEach((button)=>{
    button.addEventListener('click',()=>{
      quiz.querySelectorAll('button[data-answer]').forEach(b=>b.classList.remove('correct','wrong'));
      const correct=button.dataset.answer==='true';
      button.classList.add(correct?'correct':'wrong');
      feedback.textContent=(correct?'✓ ':'✗ ')+(button.dataset.explanation||'请回看本题对应规则。');
    });
  });
});
