/*

    Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc. 
    Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande.

    https://flynn.boolean.careers/exercises/api/random/int

*/

const { createApp } = Vue;

createApp({

    data() {
        
        return {

            userNumber: null,
            pcNumber: null,

        };

    },

    methods: {

        playGame() {

            // Recupero il primo numero
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                .then(
                    (response) => {

                        console.log(response);
                        console.log(response.data);

                        this.userNumber = response.data.response;

                    }
                );

            // Recupero il secondo numero
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                .then(
                    (response) => {

                        console.log(response);
                        console.log(response.data);

                        this.pcNumber = response.data.response;

                    }
                );

        },

        theWinnerIs() {

            if (this.userNumber > this.pcNumber) {

                return 'Hai vinto!';

            }
            else if (this.userNumber < this.pcNumber) {

                return 'Hai perso...';

            }
            else {

                return 'Pareggio';

            }

        }

    }

}).mount('#app');