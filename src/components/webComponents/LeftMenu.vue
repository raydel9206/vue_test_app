<script setup>
import ArrowUp from '@/assets/icons/ArrowUp.vue';
import Range from '@/assets/icons/Range.vue';
import RadioBtnCheck from '@/assets/icons/RadioBtnCheck.vue';
import RadioBtn from '@/assets/icons/RadioBtn.vue';

const brands = ['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'];
const category = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];
const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];
const conditions = [
    { text: 'Any', value: true },
    { text: 'Refurbished', value: false },
    { text: 'Brand new', value: false },
    { text: 'Old items', value: false },
];

</script>

<template>
    <div>
        <!-- Categories -->
        <div>
            <div class="w-full h-12 flex flex-row justify-between items-center inline-flex border-t border-zinc-200">
                <span class="text-zinc-900 font-semibold">Category</span>
                <div class="relative flex-col justify-start items-start flex">
                    <ArrowUp />
                </div>
            </div>
            <div v-for="(cat, index) in category" :key="index" class="text-neutral-600">
                <div class="w-60 h-9 pr-2.5 py-2 justify-start items-center inline-flex">
                    <div class="w-full ">{{ cat }}</div>
                </div>
            </div>
            <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex mb-4">
                <div class="w-full text-primary">See all</div>
            </div>
        </div>

        <!-- Brands -->
        <div>
            <div class="w-full h-12 flex flex-row justify-between inline-flex  items-center border-t border-zinc-200">
                <span class="text-zinc-900 font-semibold">Brands</span>
                <div class="relative flex-col justify-start items-start flex">
                    <ArrowUp />
                </div>
            </div>

            <div v-for="(brand, index) in brands" :key="index" class="text-neutral-600">
                <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex gap-2">
                    <div class="w-6 h-6 relative">
                        <div class="w-full h-5 absolute rounded border-2 border-stone-300"></div>
                    </div>
                    <div class="w-full">{{ brand }}</div>
                </div>
            </div>
            <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex mb-4">
                <div class="w-full text-primary">See all</div>
            </div>
        </div>

        <!-- Features -->
        <div>
            <div class="w-full h-12 flex flex-row justify-between inline-flex items-center border-t border-zinc-200">
                <span class="text-zinc-900 font-semibold">Features</span>
                <div class="relative flex-col justify-start items-start flex">
                    <ArrowUp />
                </div>
            </div>
            <div v-for="(feature, index) in features" :key="index" class="text-neutral-600">
                <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex gap-2">
                    <div class="w-6 h-6 relative">
                        <div class="w-full h-5 absolute rounded border-2 border-stone-300"></div>
                    </div>
                    <div class="w-full">{{ feature }}</div>
                </div>
            </div>
            <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex mb-4">
                <div class="w-full text-primary">See all</div>
            </div>
        </div>

        <!-- Price range -->
        <div class="flex flex-col gap-2">
            <div class="w-full h-12 flex flex-row justify-between inline-flex items-center border-t border-zinc-200 ">
                <span class="text-zinc-900 font-semibold">Price range</span>
                <div class="relative flex-col justify-start items-start flex">
                    <ArrowUp />
                </div>
            </div>
            <!-- Must be a component -->
            <Range />
            <!--  -->
            <div class="w-full flex flex-row gap-2">
                <div class="w-1/2 h-16 flex-col justify-center items-start inline-flex">
                    <div class="w-full text-zinc-900 text-base ">Min</div>
                    <div
                        class="w-full h-10 relative flex-col justify-center items-start flex bg-white rounded-md border border-zinc-200 px-2 shadow-sm">
                        <div class="text-neutral-300 text-base ">0</div>
                    </div>
                </div>
                <div class="w-1/2 h-16 flex-col justify-center items-start inline-flex ">
                    <div class="w-ful text-zinc-900 text-base ">Max</div>
                    <div
                        class="w-full h-10 relative flex-col justify-center items-start flex bg-white rounded-md border border-zinc-200 px-2 shadow-sm">
                        <div class="text-neutral-300 text-base ">999999</div>
                    </div>
                </div>
            </div>
            <div
                class="w-full h-10 px-4 bg-white rounded-md shadow-sm  border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex  mb-4">
                <div class="justify-start items-start gap-2.5 inline-flex">
                    <div class="text-center text-primary text-base font-medium">Apply</div>
                </div>
            </div>
        </div>

        <!-- Conditions -->
        <div>
            <div class="w-full h-12 flex flex-row justify-between inline-flex items-center border-t border-zinc-200">
                <span class="text-zinc-900 font-semibold">Features</span>
                <div class="relative flex-col justify-start items-start flex">
                    <ArrowUp />
                </div>
            </div>
            <div v-for="(condition, index) in conditions" :key="index" class="text-neutral-600 flex flex-row">
                <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex gap-2">
                    <RadioBtn v-if="!condition.value" />
                    <RadioBtnCheck v-else />
                    <div class="w-full">{{ condition.text }}</div>
                </div>
            </div>
            <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex mb-4">
                <div class="w-full text-primary">See all</div>
            </div>
        </div>

         <!-- Ratings -->
         <div>
            <div class="w-full h-12 flex flex-row justify-between inline-flex items-center border-t border-zinc-200">
                <span class="text-zinc-900 font-semibold">Features</span>
                <div class="relative flex-col justify-start items-start flex">
                    <ArrowUp />
                </div>
            </div>
            <div v-for="(feature, index) in features" :key="index" class="text-neutral-600">
                <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex gap-2">
                    <div class="w-6 h-6 relative">
                        <div class="w-full h-5 absolute rounded border-2 border-stone-300"></div>
                    </div>
                    <div class="w-full">{{ feature }}</div>
                </div>
            </div>
            <div class="w-full h-9 pr-2.5 py-2 justify-start items-center inline-flex mb-4">
                <div class="w-full text-primary">See all</div>
            </div>
        </div>
    </div>
</template>