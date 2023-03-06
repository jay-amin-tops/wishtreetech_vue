<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto">
       <li class="nav-item">
          <router-link to="/example/datetimewithluxonsimplemenu" class="nav-link">Menu const Loop</router-link>
        </li>
       <li class="nav-item">
          <router-link to="/example/datetimewithluxon" class="nav-link">DateTime with Luxon</router-link>
        </li>
       <li class="nav-item">
          <router-link to="/example/filterdatawithoutcomputer" class="nav-link">Filter Data without computed</router-link>
        </li>
       <li class="nav-item">
          <router-link to="/example/filterdata" class="nav-link">Filter Data</router-link>
        </li>
       <li class="nav-item">
          <router-link to="/example/propsfiltereddata" class="nav-link">Props Filter Data</router-link>
        </li>
      </div>
    </nav>
 <router-view />
</template>
<script setupt>
</script>
<style>
  li{
    padding:5px;
  }
</style>
