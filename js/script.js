const {createApp} = Vue;
let id = 0;
const app = createApp({
    data(){
        return{
            activeChat: 0,
            searchTerm: '',
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
        filteredContacts(){
            return this.contacts.filter((element) => element.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
        }
    },
    methods:{
        showChat(id){
            const index = this.contacts.findIndex((element)=> element.id == id);
            this.activeChat = index;
        },
        sendMessage(){
            const newMessage = this.contacts[this.activeChat].newMessage;
            const date = new Date();
            const formattedDate = this.getFormattedDate(date);
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
            // console.log(formattedDate);
            this.contacts[this.activeChat].newMessage = '';
            setTimeout(this.sendAnswer,1000)
        },
        sendAnswer(){
            const randomNumber = Math.floor(Math.random() * this.randomAnswer.length);
            const newMessage = this.randomAnswer[randomNumber];
            const date = new Date();
            const formattedDate = this.getFormattedDate(date);
            const newObjMessage = {
                date: formattedDate,
                message: newMessage,
                status: 'received',
                options: false,
                show: true
                };
            this.contacts[this.activeChat].messages.push(newObjMessage);
        },
        getLastMessageReceived(item){
            const messagesReceived = item.messages.filter((element)=> element.status === 'received');
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
        getFormattedDate(date){
            return `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`;
        },
        toggleClass(i){
            this.contacts[this.activeChat].messages[i].options = !this.contacts[this.activeChat].messages[i].options;
        },
        deleteMessage(i){
            this.contacts[this.activeChat].messages[i].show = false;
            this.contacts[this.activeChat].messages[i].message = '';
        }
    }
})

app.mount('#app')