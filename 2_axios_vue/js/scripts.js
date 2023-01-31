const { createApp } = Vue;

createApp({

    data() {
        
        return {

            message: 'Ciao Axios!',
            randomName: ''

        };

    },

    methods: {

    },

    mounted() {

        console.log(1, 'START');

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((resp) => {

                // console.log(2, resp);
                // console.log(3, resp.data);
                console.log(4, 'Nome random:', resp.data.response);

                this.randomName = resp.data.response;

            });

        console.log(5, 'MIDDLE');

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/name')
            .then((resp) => {

                // console.log(6, resp);
                // console.log(7, resp.data);
                console.log(8, 'Nome random:', resp.data.response);

                this.randomName = resp.data.response;

            });

        console.log(9, 'END');

    }

}).mount('#app');