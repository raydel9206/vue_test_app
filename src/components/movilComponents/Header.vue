<script setup>
import ArrowBackM from '@/assets/icons/ArrowBackM.vue';
import UserM from '@/assets/icons/UserM.vue';
import CartM from '@/assets/icons/CartM.vue';

// Props
const props = defineProps({
    backRoute: {
        type: Object,
        default: {},
    },
    goBack: {
        type: Boolean,
        default: false
    }
});

</script>

<template>
    <div class="w-full h-14 bg-white flex flex-row justify-between px-2.5">
        <div class="w-[80%] flex flex-row items-center gap-2">
            <div class="flex items-center cursor-pointer" @click="goBack ? $router.go(-1): ''">
                <ArrowBackM />
            </div>
            <div class="text-zinc-900 text-lg font-semibold">
                {{ backRoute.name }}
            </div>
        </div>
        <div class="w-[20%] flex flex-row items-center gap-2">
            <div class="w-6 h-6 relative">
                <UserM />
            </div>
            <div class="w-6 h-6 relative">
                <CartM />
            </div>
        </div>
    </div>
</template>