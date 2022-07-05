<template>
  <section id="setting-container">
    <div class="setting-sidebar">
        <ul>
            <li>
                <router-link :to="{name: 'setting.general'}">
                    <i class="fas fa-cogs"></i>
                    General
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'setting.system'}">
                    System Setting
                </router-link>
            </li>
        </ul>
    </div>
    <div class="setting-main">
        <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss">
@import "./style";
</style>