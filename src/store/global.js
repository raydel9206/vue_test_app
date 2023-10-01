
import { defineStore } from 'pinia'
import { computed } from 'vue';
import { useMq } from "vue3-mq";

export const useGlobalStore = defineStore('globao', () => {
    const mq = useMq();
    const isScreemSm = computed(() => {
        return ['xs', 'sm', 'md'].includes(mq.current);
    });

    return {
        isScreemSm,
    };
});