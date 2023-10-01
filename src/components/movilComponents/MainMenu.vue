<script setup>
import SearchM from '@/assets/icons/SearchM.vue';
import SortM from '@/assets/icons/SortM.vue';
import FilterM from '@/assets/icons/FilterM.vue';
import IconView from '@/assets/icons/IconView.vue';
import IconViewList from '@/assets/icons/IconViewList.vue';

</script>

<template>
    <div class="w-full flex  relative flex-col justify-center items-center inline-flex">
        <div class="w-full px-4 flex flex-col border-b border-zinc-200 bg-white">
            <div class="w-full bg-gray-90 h-10 flex flex-row px-2 items-center gap-2 rounded-md border border-zinc-200 mt-2">
                <div class="w-5 h-5 relative">
                    <SearchM />
                </div>
                <div class="w-56 text-gray-400 text-base font-normal">Search</div>
            </div>

            <div class="w-full h-full py-4 flex flex-row gap-2 overflow-x-auto">
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Tablets</div>
                </div>
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Phones</div>
                </div>
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Ipads</div>
                </div>
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Ipod</div>
                </div>
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Gadgets</div>
                </div>
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Watch</div>
                </div>
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Cameras</div>
                </div>
                <div class="w-1/4 h-9 bg-gray-100 rounded-md flex items-center justify-center p-4">
                    <div class="text-center text-primary text-base font-normal">Ipod</div>
                </div>
            </div>
        </div>
        <div class="flex flex-row w-full border-b border-zinc-200 rounded py-2 px-4 gap-2 bg-white">
            <div class="w-[40%] h-9 p-2 flex items-center justify-between bg-white rounded-md border border-zinc-200 ">
                <div class="w-full justify-between items-center inline-flex">
                    <div class="w-[80%] text-zinc-900 text-xs font-semibold">Sort: Newest</div>
                    <div class="w-[20%] relative flex-col justify-start items-start inline-flex">
                        <SortM />
                    </div>
                </div>
            </div>
            <div class="w-[40%] h-9 p-2 flex items-center justify-between bg-white rounded-md border border-zinc-200 ">
                <div class="w-full justify-between items-center inline-flex">
                    <div class="w-[80%] text-zinc-900 text-xs font-semibold">Filter (3)</div>
                    <div class="w-[20%] relative flex-col justify-start items-start inline-flex">
                        <FilterM />
                    </div>
                </div>
            </div>
            <div class="h-9 flex flex-row" >
                <IconView class="w-full h-9"/>
                <IconViewList class="w-full h-9"/>
            </div>
        </div>
    </div>
</template>