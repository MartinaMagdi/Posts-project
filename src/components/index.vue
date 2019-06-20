<template>
  <div>
    <div id="parentx">
      <vs-button
        @click="createPostPopup=true"
        class="create-post"
        type="flat"
        style="border: 1px solid white !important"
      >Create new post</vs-button>
      <vs-popup
        style="color:black"
        background-color-popup="white"
        title="New post"
        :active.sync="createPostPopup"
      >
        <vs-input
          background-color="unset"
          color="black"
          label-placeholder="Title"
          v-model="newTitle"
        />
        <vs-textarea label="body" color="black" v-model="newBody"/>
        <vs-button
          @click="savePost"
          color="primary"
          class="save-post"
          radius
          type="flat"
          icon="save"
        ></vs-button>
      </vs-popup>

      <vs-sidebar
        :reduce="reduce"
        :reduce-not-hover-expand="notExpand"
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
        :hidden-background="true"
      >
        <div class="header-sidebar" slot="header">
          <vs-avatar
            size="70px"
            to="/"
            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-fluid-gradient-logo-title-blue-violet-red-travel-commercial-design-elements-png-image_4067146.jpg"
          />
        </div>
        <vs-sidebar-item index="1" icon="home" to="/">Home</vs-sidebar-item>
        <vs-sidebar-item index="4" icon="info" to="/about">About</vs-sidebar-item>
      </vs-sidebar>
    </div>

    <vs-prompt vs-title="Edit Post" color="green" @vs-accept="editPost" :vs-active.sync="editPopup">
      <div class="con-exemple-prompt">
        <vs-input placeholder="Title" v-model="newTitle"/>
        <vs-textarea placeholder="Body" v-model="newBody"/>
      </div>
    </vs-prompt>

    <vs-row vs-justify="center">
      <vs-col
        v-for="(post, index) in posts"
        :key="index"
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        class="post-content"
      >
        <vs-card>
          <div slot="header">
            <h3>{{ post.title }}</h3>
          </div>
          <div>
            <span>{{post.body}}</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button type="gradient" @click="deletePost(index)" color="danger" icon="delete"></vs-button>
              <vs-button color="primary" @click="openEdit(index)" icon="edit"></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      active: true,
      notExpand: false,
      reduce: true,
      createPostPopup: false,
      editPopup: false,
      postID: null,
      postCounter: 1,
      posts: [
        {
          id: 0,
          title: "Post 1",
          body: "Post 1 body"
        }
      ],
      newTitle: "",
      newBody: ""
    };
  },
  components: {},
  methods: {
    savePost() {
      if (this.newTitle && this.newBody) {
        this.posts.push({
          id: this.postCounter,
          title: this.newTitle,
          body: this.newBody
        });
        this.createPostPopup = false;
        this.newTitle = "";
        this.newBody = "";
        this.postCounter++;
      }
    },

    deletePost(id, color) {
      this.posts.splice(id, 1);
      this.$vs.notify({
        color: "danger",
        title: " Post is Deleted",
        text: "The selected Post was successfully deleted"
      });
    },

    openEdit(id) {
      this.postID = id;
      this.newTitle = this.posts[id].title;
      this.newBody = this.posts[id].body;
      this.editPopup = true;
    },

    editPost() {
      this.posts[this.postID].title = this.newTitle;
      this.posts[this.postID].body = this.newBody;
      this.newTitle = "";
      this.newBody = "";
      console.log(this.postID);
      this.$vs.notify({
        color: "success",
        title: "Post is edited",
        text: "The selected Post was successfully edited"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>

<style css>
body {
  background-image: url("~@/assets/home-bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fcfcfc;
}

.post-content {
  margin-right: 1rem;
}

.create-post {
  right: 1rem;
  top: 1rem;
  position: fixed;
  background: unset !important;
}

.vs-popup--close {
  background: white !important;
}

.vs-con-input,
.vs-textarea-primary,
.vs-input--input.normal,
.vs-textarea {
  text-align: left;
  margin: 0 0 1rem 0;
  background: unset !important;
  font-size: 1rem;
}

.vs-con-input-label {
  width: 100%;
}

.vs-con-textarea.focusx h4,
.save-post {
  background: unset !important;
}

.save-post {
  float: right;
}

.create-post {
  color: white !important;
  font-size: 1rem !important;
  padding: 0.5rem !important;
  border-radius: 1rem !important;
}
</style>