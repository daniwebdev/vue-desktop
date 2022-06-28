<template>
  <div>
    <data-grid
      :columnDefs="columnDefs"
      :datasets="datasets"
    >
      <template v-slot:actions>
        <router-link :to="{ name: 'employee.form' }" class="btn btn-primary">
          <i class="fa fa-plus" aria-hidden="true"></i>
          New
        </router-link>
        <button>
          <i class="fas fa-file-import" aria-hidden="true"></i>
          Import
        </button>
        <button>
          <i class="fas fa-file-export" aria-hidden="true"></i>
          Export
        </button>
        <button>
          <i class="fas fa-sync" aria-hidden="true"></i>
          Mutation
        </button>
      </template>
    </data-grid>
  </div>
</template>

<script>
import DataGrid from "@/renderer/components/partial/DataGrid.vue";
export default {
  components: {
    DataGrid,
  },
  data() {
    return {
      columnDefs: [
        {
          headerName: "Nama Lengkap",
          field: "name",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Jabatan",
          field: "position",
          width: 200,
          sortable: true,
          filter: true,
        },
        {
          headerName: "Status",
          field: "status",
          width: 200,
          sortable: true,
          filter: true,
        },
      ],
      datasets: [],
    };
  },
  computed: {},
  created() {
    this.$store.commit("set_title", "Employee");

    this.add_data_set();
  },
  methods: {
    range(start, from) {
      // return [start, from]
      return Array.from({ length: from - start }, (v, k) => k + start);
      // return Array.from({ length: (from - start) }, (v, k) => k + start);
    },
    add_data_set() {
      this.range(1, 20).forEach((i) => {
        this.datasets.push([
          {
            data: "Emp " + i,
          },
          {
            data: "IT Development",
          },
          {
            data: "Aktif",
          },
        ]);
      });
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>