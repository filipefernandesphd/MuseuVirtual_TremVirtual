AFRAME.registerComponent('click-component-test', {
    init: function () {
        const el = this.el;
        el.addEventListener('click', function () {
            initialPosition = el.getAttribute('position');
            let camera = document.getElementById("camera");

            camera.setAttribute('position', {
                x: initialPosition.x,
                y: 0,
                z: initialPosition.z
            });

            console.log("" + initialPosition.x + " " + initialPosition.y + " " + initialPosition.z)

        });
    }
});

AFRAME.registerComponent('tutorial', {
    init: function () {
        this.images = ["#passo1", "#passo2", "#passo3"];
        this.tutorial = document.querySelector('#tutorial');
        this.botao = document.querySelector('#botao-proximo');
        this.currentIndex = 0; // Índice atual do tutorial
        console.log("Índice atual: " + this.currentIndex);
        let isCooldown = false;
        // Função para avançar o tutorial
        const avancarTutorial = () => {
            if (isCooldown) return; // Se estiver em cooldown, ignora o clique
            isCooldown = true; // Ativa o cooldown
            setTimeout(() => isCooldown = false, 1000);
            // Avança para o próximo passo do tutorial
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++;
            }
            // Atualiza a imagem do tutorial
            this.tutorial.setAttribute('src', this.images[this.currentIndex]);
            // Se for o último passo, troca o botão para "Finalizar"
            if (this.currentIndex === this.images.length - 1) {
                this.botao.setAttribute('src', "#finalizar");
                // Remove o evento de clique anterior (avançar tutorial)
                this.botao.removeEventListener('click', avancarTutorial);
                // Adiciona o evento de clique para redirecionar
                this.botao.addEventListener('click', () => {
                    if (isCooldown) return; // Se estiver em cooldown, ignora o clique
                    isCooldown = true; // Ativa o cooldown
                    setTimeout(() => isCooldown = false, 1000);
                    // Redireciona para a página
                    window.location.href = "http://127.0.0.1:5500/hallEntrada.html";
                });
            }

            console.log("Novo índice: " + this.currentIndex);
        };

        // Adiciona o evento de clique inicial (avançar tutorial)
        this.botao.addEventListener('click', avancarTutorial);
    }
});

// Componente para ação do botão "Finalizar"
AFRAME.registerComponent('esfera', {
    init: function () {
        const el = this.el;
        el.addEventListener('click', function () {
            if(el.getAttribute('color')=='#F00'){
                el.setAttribute('color','#00F')
            }else{
                el.setAttribute('color','#F00')

            }
            
        });
    }
});


AFRAME.registerComponent('finalizar', {
    init: function () {
        const el = this.el;

        // Adiciona um evento de clique ao elemento
        el.addEventListener('click', function () {
            // URL da página para a qual você deseja redirecionar
            const url = "http://127.0.0.1:5500/mundo.html"; // Substitua pela URL desejada

            // Redireciona para a página
            window.location.href = url;
        });
    }
});


AFRAME.registerComponent('entrar', {
    init: function () {
        const el = this.el;

        el.addEventListener('click', function () {
            const scene = document.querySelector('a-scene');
            // Criando o texto dentro do botão
            const btnText = document.createElement('a-image');
            btnText.setAttribute('src', '#entrada');
            btnText.setAttribute('position', '0.5 0.8 -34'); // Ajusta para frente do botão
            btnText.setAttribute('scale', '5 5 5'); // Ajusta para frente do botão
            btnText.setAttribute('rotation', '0 360 0'); // Ajusta para frente do botão
            btnText.setAttribute('class', 'interativo'); // Classe para eventos

            // Adiciona o texto ao botão
            scene.appendChild(btnText);
            
            // Adiciona o botão à cena

            // Evento de clique no botão para redirecionamento
            btnText.addEventListener('click', function () {
                const url = "http://127.0.0.1:5500/mundo.html"; // URL desejada
                window.location.href = url;
            });

            // Remove o botão ao clicar fora dele
            setTimeout(() => {
                document.addEventListener('click', function removeButton(event) {
                    if (event.target !== btnText) {
                        btnText.remove();
                        document.removeEventListener('click', removeButton);
                    }
                });
            }, 100);
        });
    }
});


AFRAME.registerComponent('rotate-door', {
    init: function () {
        const el = this.el; 
        let isRotated = false; // Estado da rotação
        let initialRotation, initialPosition; // Armazena a rotação e posição iniciais dinamicamente

        el.addEventListener('click', function () {
            // const classes = el.classList;
            // Atualiza a rotação e posição iniciais sempre que a porta é clicada
            if (!initialRotation || !initialPosition) {
                initialRotation = el.getAttribute('rotation');
                initialPosition = el.getAttribute('position');
            }

            if (!isRotated) {
                // Rotaciona a porta 90 graus no eixo Y
                let novoY;
                if (initialPosition.x > 0) {
                    novoY = initialRotation.y + 90;
                } else {
                    novoY = initialRotation.y + 90;
                }
                el.setAttribute('rotation', {
                    x: initialRotation.x,
                    y: novoY,
                    z: initialRotation.z
                });

                
                let newX, newZ;
                if (initialPosition.x > 0) {
                    newX = initialPosition.x - 1.25;
                    newZ = initialPosition.z + 1.25;
                } else {
                    newX = initialPosition.x + 1.25;
                    newZ = initialPosition.z - 1.25;
                }

                el.setAttribute('position', {
                    x: newX,
                    y: initialPosition.y,
                    z: newZ
                });

                isRotated = true;
            } else {
                // Volta a porta para a rotação e posição iniciais
                if (initialPosition.x == 21.15 && initialPosition.z == 6.25)
                    el.setAttribute('position', {
                        x: 22.4,
                        y: initialPosition.y,
                        z: 5
                    });
                if (initialPosition.x == 21.15 && initialPosition.z == -3.75)
                    el.setAttribute('position', {
                        x: 22.4,
                        y: initialPosition.y,
                        z: -5
                    });
                if (initialPosition.x == -21.15 && initialPosition.z == 3.75)
                    el.setAttribute('position', {
                        x: -22.4,
                        y: initialPosition.y,
                        z: 5
                    });
                if (initialPosition.x == -21.15 && initialPosition.z == -6.25)
                    el.setAttribute('position', {
                        x: -22.4,
                        y: initialPosition.y,
                        z: -5
                    });
                    if (initialPosition.x == 1.25 && initialPosition.z == -36.25)
                        el.setAttribute('position', {
                            x: 0,
                            y: initialPosition.y,
                            z: -35
                        });
                        if (initialPosition.x == -0.75 && initialPosition.z == -36.5)
                            el.setAttribute('position', {
                                x: -2,
                                y: initialPosition.y,
                                z: -35
                            });
                el.setAttribute('rotation', {
                    x: 0,
                    y: initialPosition.y - 90,
                    z: 0
                });

                isRotated = false;

                // Reseta as variáveis de rotação e posição iniciais
                initialRotation = null;
                initialPosition = null;
            }
        });
    }
});

