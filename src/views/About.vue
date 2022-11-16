<script></script>

<template>
  <div id="about-view">
    <div class="wrapper-header">
      <h1>ABOUT ME</h1>
      <div class="settings">
        <div v-if="aboutForm"><button id="btn-show-favorites" @click="editBtn()">Edit Form</button></div>
        <div v-if="editForm"><button id="btn-show-favorites" @click="cancelBtn()" :class="{active:editForm}">Cancel</button></div>
        <div v-if="editForm"><button id="btn-save" @click="saveBtn()">Save Form</button></div>
      </div>
    </div>
    <form>
      <div class="wrapper-input">
        <label>NAME</label>
        <div v-if="editForm"><input v-model="inputName" id="input-name" /></div>
        <div v-if="aboutForm"><p id="txt-name">{{ auth.user.name }}</p></div>
      </div>
      <div class="wrapper-input">
        <label>SURNAME</label>
        <div v-if="editForm"><input v-model="inputSurname" id="input-surname" /></div>
        <div v-if="aboutForm"><p id="txt-surname">{{ auth.user.surname }}</p></div>
      </div>
      <div class="wrapper-input">
        <label>STUDENT CODE</label>
        <div v-if="editForm"><input v-model="inputStudentCode" id="input-code" /></div>
        <div v-if="aboutForm"><p id="txt-code">{{ auth.user.code }}</p></div>
      </div>
      <div class="wrapper-songs">
        <label>FAVORITE SONGS</label>
        <ul v-if="auth.getFavoriteSongs().length">
          <li v-for="song in favSong">
            <img
              id="img-album"
              :src="song.album.images[1].url"
            />
            <div class="song-info">
              <p id="txt-song" class="song-name">{{ song.name }}</p>
              <p id="txt-artist" class="song-artists">{{ getAllArtists(song.artists)}}</p>
            </div>
          </li>
        </ul>
        <div id="txt-empty" class="empty">NO SONGS FOUND</div>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from '../stores/auth'
import songList from '../data/songs'

export default {
    data() {
        return {
            auth,

            songs: songList,
            isListEmpty: true,
            editForm: false,
            aboutForm: true,
            inputName: auth.user.name,
            inputSurname: auth.user.surname,
            inputStudentCode: auth.user.code

        }
    },
    methods: {
        editBtn() {
            this.editForm = true;
            this.aboutForm = false;
        },
        cancelBtn() {
            this.editForm = false;
            this.aboutForm = true;
        },
        saveBtn() {
            this.editForm = false;
            this.aboutForm = true;
            this.auth.setUserData(this.inputName, this.inputSurname, this.inputStudentCode);
        },

        getAllArtists(artists) {
            let n = '';
            let length = Object.keys(artists).length;
            artists.forEach((artist, index) => {
                if (index != length -1) {
                    i = i + artist.name + ", ";
                } else {
                    i = i + artist.name;
                }
            });
            return i;
        },
    },
    computed: {
        favSong() {
            let favSong = [];
            let i = auth.getFavoriteSongs();
            i.forEach((songID) => {
                this.songs.forEach((song) => {
                    if (song.id == songID) {
                        favSong.push(song);
                    }
                });
            });
            return favSong;
        }
    }
}


</script>