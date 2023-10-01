<script setup>
import MainHeaderWeb from '@/components/webComponents/Header.vue';
import MainFooter from '@/components/webComponents/Footer.vue';

import { useGlobalStore } from '@/store/global';
const storeGlobal = useGlobalStore();
</script>


<template>
    <MainHeaderWeb v-if="!storeGlobal.isScreemSm" />
    <div class="w-full bg-gray-90 flex flex-col inline-flex">
        <div>
            <main>
                <router-view />
            </main>
        </div>
    </div>
    <div v-if="!storeGlobal.isScreemSm" class="inset-x-0 bottom-0">
        <MainFooter :subscrption="true" />
    </div>
</template>