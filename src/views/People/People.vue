<template src="./People.html" />

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "People",

  data: () => ({
    search: "",
    headers: [
      {
        text: "Name",
        align: "start",
        value: "fullName",
      },
      {
        text: "Photo",
        value: "photo",
        sortable: false,
        filterable: false,
      },
      {
        text: "Email",
        value: "email",
        sortable: false,
        filterable: false,
      },
      {
        text: "Date of Birth",
        value: "dob",
        filterable: false,
      },
      {
        text: "More info",
        value: "info",
        sortable: false,
        filterable: false,
      },
    ],
  }),

  mounted() {
    this.getPeople();
  },

  computed: {
    ...mapGetters("people", ["peopleData"]),
  },

  methods: {
    ...mapActions("people", ["getPeople"]),
  },
};
</script>
