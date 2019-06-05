<template>
  <div>
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-card>
          <div slot="header">
            <h3 class="header-title">Information</h3>
          </div>
          <vs-row>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <p class="title">Name:</p>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="9"
            >
              <span class="info">Martina Magdi Youssef</span>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <p class="title">Title:</p>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="9"
            >
              <span class="info">Front End Developer</span>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <p class="title">Email:</p>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="9"
            >
              <span class="info">martinamagdi4666@gmail.com</span>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <p class="title">Phone:</p>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="9"
            >
              <span class="info">01283255691</span>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="3"
            >
              <p class="title">Framework:</p>
            </vs-col>
            <vs-col
              class="align-left"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="9"
            >
              <span class="info">Vue JS using vuesax</span>
            </vs-col>
          </vs-row>
          <div></div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.info {
  font-weight: 500;
  margin-left: 1rem;
}

.align-left {
  justify-content: left !important;
}

.header-title {
  font-size: 2rem;
}
</style>