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
  mounted() {
    var positions = ['Backend Engineer', "FrontEnd Engineer", "FullStack Engineer", "UI/UX"];
    
    for (let i = 0; i < 100; i++) {
      this.datasets.push([
        {
          data: "Emp " + i,
        },
        {
          data: positions[Math.floor(Math.random() * positions.length)],
        },
      ])
    }
  },
};
</script>