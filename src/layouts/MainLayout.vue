<script setup>
import MainHeader from '@/components/webComponents/Header.vue';
import MainMenu from '@/components/webComponents/MainMenu.vue';
import MainFooter from '@/components/webComponents/Footer.vue';
</script>

<template>
    <MainHeader />
    <MainMenu />
    <div class="w-full bg-gray-90 flex flex-col inline-flex">
        <div>
            <main>
                <router-view />
            </main>
        </div>
    </div>
    <div class="inset-x-0 bottom-0">
        <MainFooter :subscrption="true"/>
    </div>
</template>