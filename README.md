# Challenge Target Sistemas
Desafio Desenvolvedor

---

## 1) Trecho de código

### Código:
```c
int INDICE = 12, SOMA = 0, K = 1;

enquanto K < INDICE faça

{ K = K + 1; SOMA = SOMA + K;}

imprimir(SOMA);
```

**Pergunta:** Ao final do processamento, qual será o valor da variável `SOMA`?

**Resposta:** 77 [obs: clique aqui para descobrir como cheguei no resultado](/challenge01/challenge-01.js)

---

## 2) Complete o próximo elemento da sequência:

a) 1, 3, 5, 7, ___  
**Resposta:** 9 [obs: clique aqui para descobrir como cheguei no resultado](/challenge02/challenge-02.txt)

b) 2, 4, 8, 16, 32, 64, ____  
**Resposta:** 128 [obs: clique aqui para descobrir como cheguei no resultado](/challenge02/challenge-02.txt)

c) 0, 1, 4, 9, 16, 25, 36, ____  
**Resposta:** 49 [obs: clique aqui para descobrir como cheguei no resultado](/challenge02/challenge-02.txt)

d) 4, 16, 36, 64, ____  
**Resposta:** 100 [obs: clique aqui para descobrir como cheguei no resultado](/challenge02/challenge-02.txt)

e) 1, 1, 2, 3, 5, 8, ____  
**Resposta:** 13 [obs: clique aqui para descobrir como cheguei no resultado](/challenge02/challenge-02.txt)

f) 2, 10, 12, 16, 17, 18, 19, ____  
**Resposta:** 20 [obs: clique aqui para descobrir como cheguei no resultado](/challenge02/challenge-02.txt)

---

## 3) Faturamento diário de uma distribuidora

**Problema:**  
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:
- O menor valor de faturamento ocorrido em um dia do ano;
- O maior valor de faturamento ocorrido em um dia do ano;
- Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

**Restrições:**  
1. Considerar o vetor já carregado com as informações de valor de faturamento.
2. Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.
3. Utilize o algoritmo mais veloz que puder definir.

**Resolução:** [Clique aqui para encontrar a solução](/challenge03/challenge-03.js)

---

## 4) Banco de dados

**Problema:**  
Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:

**Requisitos:**
- Um cliente pode ter um número ilimitado de telefones;
- Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
- A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;
  
**Tarefas:**  
- Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
- Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
- Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);

**Modelo lógico DER:** [Clique aqui para vizualizar o DER](/challenge04/DER-targetsistemas.png)

**Comando SQL:** [Clique aqui para encontrar os comando SQL](/challenge04/challenge-04.sql)

---

## 5) Problema dos veículos

**Problema:**  
Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

**Perguntas:**  
- Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
- Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
- Explique como chegou no resultado.

**Resposta:** [Caminhão estará mais próximo de Ribeirão Preto](/challenge05/challenge-05.md)

**Explicação do raciocínio:** [Clique aqui para encontrar a explicação](/challenge05/challenge-05.md)