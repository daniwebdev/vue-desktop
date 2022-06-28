<template>
  <div>
    <data-grid :columnDefs="columnDefs" :datasets="datasets"></data-grid>
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
          headerName: "Fullname",
          field: "name",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Email",
          field: "email",
          sortable: true,
          filter: true,
        },
      ],

      datasets: [
        [
          {
            data: "Emp ",
          },
          {
            data: "IT Development",
          },
        ],
      ],
    };
  },
};
</script>