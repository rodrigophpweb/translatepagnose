// Colocar o bloco código abaixo dentro do footer.php do tema

document.querySelectorAll('a').forEach(function(button) {
    if (button.textContent.trim() === 'More info') {
        button.textContent = 'Mais Informações';
    }
});
	
var consent = document.querySelector('#wp-quiz-5109 > div.wq-force-action-container.wq_quizForceActionCtr > div > form > div.wq-consent-wrapper > label');
consent.innerHTML = `<input type="checkbox" name="consent" required=""> Autorizo que o formulário colete meu nome e e-mail!`;
	
var consentDesc = document.querySelector('.wq-consent-desc');
consentDesc.innerHTML = `O formulário coleta nome e e-mail para que possamos adicioná-lo à nossa lista de newsletters .Confira  <a href="https://pagnose.com/politica-de-privacidade/">Política de Privacidade</a> para saber como protegemos e gerenciamos seus dados enviados.`;