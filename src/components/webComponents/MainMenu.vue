
<script setup>
import MenuBtn from '@/assets/icons/MenuBtn.vue';
import ArrowDown from '@/assets/icons/ArrowDown.vue';
import Flag from '@/assets/icons/Flag.vue';

</script>
<template>
    <div
        class="flex flex-row gap-6 inline-flex bg-white w-full items-center h-14 md:px-[10%] lg:px-[15%] sm:px-[2%] border-y border-zinc-200 justify-between">
        <div class="flex flex-row gap-6">
            <div class="flex flex-row gap-2">
                <MenuBtn />
                <div class="text-zinc-900 text-base font-medium cursor-pointer">All category</div>
            </div>
            <div class="text-zinc-900 text-base font-medium cursor-pointer">Hot offers</div>
            <div class="text-zinc-900 text-base font-medium cursor-pointer">Gift boxes</div>
            <div class="text-zinc-900 text-base font-medium cursor-pointer">Projects</div>
            <div class="text-zinc-900 text-base font-medium cursor-pointer">Menu item</div>
            <div class="flex flex-row">
                <div class="text-zinc-900 text-base font-medium cursor-pointer">Help</div>
                <div class="w-6 h-6 relative flex-col justify-start items-start inline-flex">
                    <ArrowDown />
                </div>
            </div>
        </div>

        <!-- Traslate -->
        <div class="flex flex-row gap-1">
            <div class="flex flex-row">
                <div class="text-zinc-900 text-base font-medium ">English, USD</div>
                <div class="w-6 h-6 relative flex-col justify-start items-start inline-flex">
                    <ArrowDown />
                </div>
            </div>
            <div class="flex flex-row items-center gap-1.5">
                <div class="flex flex-row gap-1 items-center">
                    <div class="text-zinc-900 text-base font-medium ">Ship to</div>
                    <div class="w-5 h-4 justify-center items-center inline-flex">
                        <Flag />
                    </div>
                </div>
                <div class="w-6 h-6 relative">
                    <ArrowDown />
                </div>
            </div>
        </div>
    </div>
</template>