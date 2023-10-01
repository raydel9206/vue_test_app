<script setup>
import ArrowNext from '@/assets/icons/ArrowNext.vue';

// Props
const props = defineProps({
    crumbs: {
        type: Array,
        default: [],
    }
});
</script>
<template>
    <!-- Breadcrumbs -->
    <div class="flex flex-row h-14 text-gray-400 items-center">
        <div v-for="(crumb, index) in crumbs" :key="index" class="flex flex-row items-center">
            <div>{{ crumb }}</div>
            <ArrowNext v-if="index !== crumbs.length - 1" />
        </div>
    </div>
</template>