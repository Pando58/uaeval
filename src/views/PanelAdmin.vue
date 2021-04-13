<template>
  <div id="admin-principal">
    <AdminNavbar :anchoSidebar="anchoSidebar"/>
    <div id="debajoNavbar">
      <AdminSidebar :ancho="anchoSidebar"/>
    </div>
  </div>
</template>

<script>

import AdminNavbar from '@/components/AdminNavbar.vue'
import AdminSidebar from '@/components/AdminSidebar.vue'

export default {
  name: 'PanelAdmin',
  data() {
    return {
      anchoSidebar: 240
    }
  },
  components: {
    AdminNavbar,
    AdminSidebar
  }
}

</script>

<style>

#admin-principal {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#debajoNavbar {
  flex-grow: 1;
}

</style>