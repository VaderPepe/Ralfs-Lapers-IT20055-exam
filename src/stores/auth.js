import { reactive } from "vue";
import router from '../router/';

// TE DEFINĒT USER OBJEKTU

export const auth = reactive({

    user: {
        name: 'Ralfs',
        surname: 'Lapers',
        code: 'IT20055',
        favourite_songs: localStorage.favourite_songs ?? '', //idk im guessing
    },

    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
        this.user.name = name;
        this.user.surname = surname;
        this.user.code = code;
    },


    authenticate(email, password) {
        if (email == 'ralfskarlis.lapers@va.lv' && password == 'qwerty') {
            localStorage.is_authenticated = true;
            this.is_authenticated = true;
            router.replace('/');
        }
    },

    logout() {
        localStorage.clear();
        this.is_authenticated = false;
        router.replace('/login');

        //localStorage.is_authenticated = false;
    },

    toggleFavorite(songID) {
        if (this.user.favourite_songs.includes(songID)) {
            this.user.favourite_songs = this.user.favourite_songs.replace(songID, '');
        }else{
            this.user.favourite_songs += songID;
        }

        localStorage.setItem('favSong', this.user.favourite_songs);
    },

    getFavoriteSongs() {
        return this.user.favourite_songs;
    }
})