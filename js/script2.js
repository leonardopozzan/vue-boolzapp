const {createApp} = Vue;

const splash = createApp({
    data(){
        return{
            
        }
    },
    mounted(){
        setTimeout(function(){ window.location = 'page2.html'}, 3000);
        return
    }
})

splash.mount('#splash')