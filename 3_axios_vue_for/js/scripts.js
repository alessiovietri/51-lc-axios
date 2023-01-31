const { createApp } = Vue;

createApp({

    data() {
        
        return {

            message: 'Ciao Axios!',
            sentences: []

        };

    },

    methods: {

    },

    mounted() {

        for (let i = 1; i <= 10; i++) {
            
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/sentence')
                .then((resp) => {

                    console.log(i, 'Frase random:', resp.data.response);

                    this.sentences.push(resp.data.response);

                });

        }

        

    }

}).mount('#app');