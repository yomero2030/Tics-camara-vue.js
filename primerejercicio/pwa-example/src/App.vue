<template>
  <div id="app">
    <div>
      <article v-for="(foto, idx) in fotos" :key="idx">
        <img :src="foto.url">
        <h1>{{ foto.description }}</h1>
        <button @click="deleteFoto(foto.id)">
          Delete
        </button> 
      </article>
    </div>

    <form>
      <input v-model="description" placeholder="description">
      <input v-model="url" placeholder="Image">
      <button type="button" @click="addFoto(description, url)">Add</button>
    </form>
  </div>
</template>

<script>
import { db } from './main'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      fotos: [],
      description: '',
      url: ''
    }
  },
  firestore () {
    return {
      fotos: db.collection('fotos').orderBy('createdAt')
    }
  },
  methods: {
    addFoto (description, url) {
      const createdAt = new Date()
      db.collection('fotos').add({ description, url, createdAt })
    },
    deleteFoto (id) {
      db.collection('fotos').doc(id).delete()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
require('material-design-lite')
import firebase from 'firebase';

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      mediaStream: null
    }
  },
  methods: {
    getAlls(){
      const data = firebase.firestore().collection('fotos');
      console.data(data);
      //firebase.firestore().CollectionReference('fotos').snapshop
    },
    capture () {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);

      return imageCapture.takePhoto().then(blob => {
        console.log('file ====', blob)
        firebase.storage().ref().child(`images/picture-${new Date().getTime()}`).put(blob).then(snapshop => {
          console.log('snapshop file ====', snapshop);
          firebase.storage().ref().child(snapshop.ref.location.path).getDownloadURL().then(url => {
            console.log('url ====', url);
            //Insertamos en una tabla el id del usuario, la foto y  descripción.

          }).catch(error => {
            console.error('error get url file', error)
            switch (error.code) {
              case 'storage/object_not_found':
                // File doesn't exist
                break;
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;
              case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
          });
        });
      })
    }
  },
  mounted () {
    navigator.mediaDevices.getUserMedia({ video: true }).then(mediaStream => {
      this.mediaStream = mediaStream;
      this.$refs.video.srcObject = mediaStream;
      this.$refs.video.play();
    }).catch(error => {
      console.error('getUserMedia() error:', error);
    });
  },
  destroyed () {
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

  body {
      background-color: #F0F0F0;
  }
  #app {
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
   .camera-modal {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: white;
        z-index: 10;
    }
    .camera-stream {
        width: 100%;
        max-height: 100%;
    }

    .camera-modal-container {
        position: absolute;
        bottom: 0;
        width: 100%;
        align-items: center;
        margin-bottom: 24px;
    }
    .take-picture-button {
        display: flex;
    }

</style>


