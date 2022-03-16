<template>
  <section>
    <button @click="getSelectedRows()">Get Selected Rows</button>
      <ag-grid-vue 
        
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        rowSelection="multiple"
        autoGroupColumnDef="autoGroupColumnDef"
        @grid-ready="onGridReady"
        >
    </ag-grid-vue>
  </section>
</template>

<script>
import {reactive, ref, onMounted} from "vue"
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: 'NoticeBoard',
  components: {
     AgGridVue
  },
  setup() {
    let rowData = reactive([])
    let gridApi = ref(null)
    // eslint-disable-next-line no-unused-vars
    let columnApi = ref(null)
    
    onMounted(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
          .then(result => result.json())
          .then(remoteRowData => rowData.value = remoteRowData);
    })

    const onGridReady = params => {
      gridApi = params.api;
      columnApi = params.columnApi;
    }

    const getSelectedRows = () => {
      const selectedNodes = gridApi.value.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
    return {
      columnDefs: [
        { headerName: "Make", field: "make", sortable: true, filter: true, checkboxSelection: true, rowGroup: true},
        { headerName: "Model", field: "model", sortable: true, filter: true}, 
        { headerName: "Price", field: "price", sortable: true, filter: true},
      ],
      rowData,
      // rowData: [
      //   { make: "Toyota", model: "Celica", price: 35000 },
      //   { make: "Ford", model: "Mondeo", price: 32000 },
      //   { make: "Porsche", model: "Boxter", price: 72000 },
      // ],
      autoGroupColumnDef: {
        headerName: 'Model',
        field: 'model',
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
          checkbox: true
      }
     },
      onGridReady,
      getSelectedRows
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~ag-grid-community/dist/styles/ag-grid.css"; //ag-grid style
  @import "~ag-grid-community/dist/styles/ag-theme-alpine.css"; //ag-grid theme

.ag-theme-alpine {
  width: 700px;
  height: 700px;
//   // @include ag-theme-alpine((
//   // ));
}
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 96px 24px 24px;
  gap: 10px;
}
</style>
