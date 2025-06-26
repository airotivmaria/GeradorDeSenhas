const colocarSenha = document.querySelector('#senha-gerada');
const botaoGerar = document.querySelector('#button-submit');
const copiarSenha = document.querySelector('#copiar-senha');
const tamanhoSenha = document.querySelector('#tamanho-senha');
const mensagem = document.querySelector('#mensagem');

function criarSenha(){}

function gerarSenha(){
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!', '@', '#', '%', '&', '*', '$', '?', '+', '-', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const senha = [];

    let tamSenha = tamanhoSenha.value;
    if(tamSenha <= 5){
        mensagem.textContent = 'Não é possível gerar senha de tamanho menor que 5!';
        mensagem.style.color = 'red';

        setTimeout(()=>{
            mensagem.textContent = '';
        
        }, 3000);
    } else {
        for(let i = 0; i < tamSenha;){
        const novocaracter = Math.ceil(Math.random() * chars.length);
        const incluir = chars[novocaracter];

        console.log(i);
        console.log(incluir);

        if(!senha.includes(incluir)){
            //verifica se é numero
            if(!(isNaN(incluir))){
                //verifica se a lista Senha possui menos que 2 numeros
                if(senha.includes(Number).length < 2) {
                    senha.push(incluir);
                    i++
                } else if(!(senha.includes(Number))){
                    senha.push(incluir);
                    i++
                } else{
                    continue;
                }
            } else if (incluir === undefined) {
                continue;
            } else {
                senha.push(incluir);
                i++
            }
        }  else {
            continue;
        }
    }
    return senha;
    }
}

botaoGerar.addEventListener('click', (e) => {
    e.preventDefault();
    

    if(gerarSenha()){
        const senha = gerarSenha();
        colocarSenha.textContent = senha.join('');
        
        const p = document.createElement('p');
        p.classList = 'txt';
        p.innerHTML = `Senha Gerada: <br />`;
        p.style.color = 'white';
        

        copiarSenha.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(!colocarSenha.textContent.length == 0){
                navigator.clipboard.writeText(colocarSenha.textContent);
                p.innerHTML = `Senha copiada com sucesso!`;
            } 
        })

        mensagem.appendChild(p);
        setTimeout(() => {
            colocarSenha.textContent = null;
            mensagem.textContent = '';
        }, 10000);
    }

    
});



