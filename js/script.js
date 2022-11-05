const {createApp} = Vue;
let id = 0;
const app = createApp({
    data(){
        return{
            activeChat: 0,
            searchTerm: '',
            pcStatus: '',
            randomAnswer : ["sono d'accordo", "non ho voglia oggi", "ho tempo solo nel weekend", "domani sera ho un compleanno",
                            "domenica sera sarebbe perfetto", "ho preso ferie, possiamo andare a Parigi", "mi raccomando non dire nulla a mia moglie"],
            contacts: [
                {
                    id:id++,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        options: false,
                        show: true
                        }
                    ],
                },
                {
                    id:id++,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        options: false,
                        show: true
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        options: false,
                        show: true
                        }
                    ],
                },
                {
                    id:id++,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        options: false
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        options: false,
                        show: true
                        }
                    ],
                },
                {
                    id:id++,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        options: false,
                        show: true
                        }
                    ],
                },
                {
                    id:id++,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        options: false,
                        show: true
                        }
                    ],
                },
                {
                    id:id++,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        options: false,
                        show: true
                        }
                    ],
                },
                {
                    id:id++,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        options: false,
                        show: true
                        }
                    ],
                },
                {
                    id:id++,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    newMessage: '',
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        options: false,
                        show: true
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        options: false,
                        show: true
                        }
                    ],
                }
            ]
        }
    },
    computed:{
        // funzione che filtra i contatti
        filteredContacts(){
            return this.contacts.filter((element) => element.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
        }
    },
    methods:{
        // funzione che imposta l'indice della chat da visualizare in base agli id
        showChat(id){
            const index = this.contacts.findIndex((element)=> element.id == id);
            this.activeChat = index;
        },
        // funzione per l'invio dei messaggi
        sendMessage(){
            // cambio il valore di visible che è colegato al testo di ultimo accesso 
            this.contacts[this.activeChat].visible = false;
            this.pcStatus = 'sta scrivendo';
            const newMessage = this.contacts[this.activeChat].newMessage;
            const date = new Date();
            const formattedDate = this.getFormattedDate(date);
            // costruisco e aggiungo il nuovo messaggio all'array dei messaggi
            if(!!newMessage.length){
                const newObjMessage = {
                    date: formattedDate,
                    message: newMessage,
                    status: 'sent',
                    options: false,
                    show: true
                    };
                this.contacts[this.activeChat].messages.push(newObjMessage);
            }
            this.contacts[this.activeChat].newMessage = '';
            // chiamo l'invio della risposta dopo 2 secondi circa
            setTimeout(this.sendAnswer,2500)
        },
        // funzione che risponde ai messaggi
        sendAnswer(){
            // con un numero random scelgo una tra le risposte possibili
            const randomNumber = Math.floor(Math.random() * this.randomAnswer.length);
            const newMessage = this.randomAnswer[randomNumber];
            const date = new Date();
            const formattedDate = this.getFormattedDate(date);
            // costruisco e aggiungo il nuovo messaggio all'array dei messaggi
            const newObjMessage = {
                date: formattedDate,
                message: newMessage,
                status: 'received',
                options: false,
                show: true
                };
            this.contacts[this.activeChat].messages.push(newObjMessage);
            // cambio lo status della chat in Online e dopo un paio di secondi ripsristino l'ultimo accesso
            this.pcStatus = 'Online';
            setTimeout(()=> this.contacts[this.activeChat].visible = true,2000)
        },
        // funzione che resitituisce l'oggetto contenente l'ultimo messaggio filtrando l'array dei messaggi tra quelli ricevuti e quelli non cancellati
        getLastMessageReceived(item){
            const messagesReceived = item.messages.filter((element)=> element.status === 'received' && element.show);
            // oggetto di default in caso in cui l'array filtrato risulti vuoto
            if(messagesReceived.length == 0){
                return {
                    date: '10/01/2020 00:00:00',
                    message: '',
                    status: 'received',
                    options: false
                    }
            }
            return messagesReceived[messagesReceived.length -1];
        },
        // funzione che resitituisce l'oggetto contenente l'ultimo accesso filtrando l'array dei messaggi tra quelli ricevuti
        getLastAccess(item){
            const messagesReceived = item.messages.filter((element)=> element.status === 'received');
            // oggetto di default in caso in cui l'array filtrato risulti vuoto
            if(messagesReceived.length == 0){
                return {
                    date: '10/01/2020 00:00:00',
                    message: '',
                    status: 'received',
                    options: false
                    }
            }
            return messagesReceived[messagesReceived.length -1];
        },
        // funzione che formatta la data
        getFormattedDate(date){
            return `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`;
        },
        // funzione per farm apparire e scomparire le opzioni del singolo messaggio 
        toggleClass(i){
            this.contacts[this.activeChat].messages[i].options = !this.contacts[this.activeChat].messages[i].options;
        },
        // funzione per nascondere i messaggi
        deleteMessage(i){
            this.contacts[this.activeChat].messages[i].show = false;
            this.contacts[this.activeChat].messages[i].message = '';
        }
    }
})

app.mount('#app')