<template>
  <v-card class="mx-auto" max-width="448" outlined>
    <v-list-item six-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{
            currentUser.name.title +
            " " +
            currentUser.name.first +
            " " +
            currentUser.name.last
          }}
        </v-list-item-title>
        <v-list-item-subtitle>{{
          currentUser.gender.slice(0, 1).toUpperCase() +
          ", " +
          currentUser.dob.age
        }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{
          currentUser.location.city + ", " + currentUser.location.country
        }}</v-list-item-subtitle>
        <v-list-item-subtitle
          >Email: {{ currentUser.email }}</v-list-item-subtitle
        >
        <v-list-item-subtitle
          >Tel.: {{ currentUser.cell }}</v-list-item-subtitle
        >
        <v-list-item-subtitle>{{
          "Login: " + currentUser.login.username
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-img
        max-width="128"
        max-height="128"
        :src="currentUser.picture.large"
      />
    </v-list-item>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SingleUser",

  data: () => ({}),

  components: {},

  computed: {
    ...mapGetters("people", ["singleUser"]),
    currentUser() {
      return this.singleUser(this.$route.params.id);
    },
  },
};
</script>
