<template>
  <v-app>
    <v-card class="d-flex flex-row mb-6" height="100%" flat>
      <v-card height="100%" width="20%">
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                FZC Test App
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list v-if="isLoginned" nav dense>
            <v-list-item :to="link">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>People</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <div class="main-block">
        <v-btn v-if="isLoginned" @click="logout()" class="btn-login"
          >Logout</v-btn
        >
        <v-btn v-if="!isLoginned" @click="login()" class="btn-login"
          >Login</v-btn
        >
        <router-view></router-view>
      </div>
    </v-card>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    isLoginned: false,
    link: "/people",
  }),
  mounted() {
    if (localStorage.isLoginned)
      this.isLoginned = JSON.parse(localStorage.isLoginned);
  },
  methods: {
    login() {
      localStorage.isLoginned = true;
      this.isLoginned = true;
    },
    logout() {
      localStorage.isLoginned = false;
      this.isLoginned = false;

      if (this.$router.path !== "/") this.$router.push("/").catch(() => {});
    },
  },
};
</script>
<style scoped>
.main-block {
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
}
.btn-login {
  width: 120px;
  margin: 12px 0 12px auto;
}
</style>
