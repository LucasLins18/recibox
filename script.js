// Rolagem suave da página

document.querySelectorAll("header nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Seção de Contato

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio real do formulário para um servidor

    // Coleta os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Exibe uma mensagem de agradecimento
    alert(
      `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Responderemos para o email: ${email}.`
    );

    // Limpa o formulário após o envio
    form.reset();
  });
});
