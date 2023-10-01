<script setup>
import BreadCrumbs from '@/components/webComponents/BreadCrumbs.vue';
import LeftMenu from '@/components/webComponents/LeftMenu.vue';
import RatingFour from '@/assets/icons/RatingFour.vue';
import PointSeparator from '@/assets/icons/PointSeparator.vue';
import isFavorite from '@/assets/icons/isFavorite.vue';
import Favorite from '@/assets/icons/Favorite.vue';
import IconView from '@/assets/icons/IconView.vue';
import IconViewList from '@/assets/icons/IconViewList.vue';
import IconCheck from '@/assets/icons/IconCheck.vue';
import ArrowDown from '@/assets/icons/ArrowDown.vue';
import ArrowBack from '@/assets/icons/ArrowBack.vue';
import ScrollToTop from '@/assets/icons/ScrollToTop.vue';
import ArrowNextPage from '@/assets/icons/ArrowNextPage.vue';
import MainHeaderMovil from '@/components/movilComponents/Header.vue';
import MainMenuWeb from '@/components/webComponents/MainMenu.vue';
import MainMenuMovil from '@/components/movilComponents/MainMenu.vue';

// Toast
import { useToast } from 'vue-toastification';
const toast = useToast();

// Screen
import { useGlobalStore } from '@/store/global';
const storeGlobal = useGlobalStore();

// Header
const backRoute = {
    name: 'Mobile accessory',
    path: 'movil_accesory'
}

import { useProductsStore } from '@/store/products';
import { computed, onBeforeMount, onMounted, ref } from 'vue';
const store = useProductsStore();
const scTimer = ref(0);
const scY = ref(0);

// Computed properties
const products = computed(() => {
    return store.products;
});

const suggestions = computed(() => {
    return store.suggestions;
});

// Hook
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    store.fetchSuggestions();
    store.fetchProducts();
});

// Functions
const handleScroll = () => {
    if (scTimer.value) return;
    scTimer.value = setTimeout(() => {
        scY.value = window.scrollY;
        clearTimeout(scTimer.value);
        scTimer.value = 0;
    }, 100);
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const addFav = async (evt, change) => {
    const textMsg = !change ? 'Se añadió a favoritos' : 'Se eliminó de favoritos'
    await store.addFav(evt, !change);
    toast.success(textMsg);
};

const crumbs = ['Home', 'Clothings', 'Men’s wear', 'Summer clothing'];

</script>
<template>

    <!-- Web view -->
    <div v-if="!storeGlobal.isScreemSm">
        <MainMenuWeb />
        <div class="md:px-[10%] lg:px-[15%] sm:px-[2%] mb-8">
            <BreadCrumbs :crumbs="crumbs" />
            <div class="flex flex-row">
                <div class="w-[20%]">
                    <LeftMenu />
                </div>
                <div class="w-[80%] flex flex-col gap-2.5">
                    <div class="w-ful h-16 ml-12 flex flex-row bg-white rounded-md border border-zinc-200 justify-between">
                        <div class="w-2/5  flex flex-row items-center px-[1.5%]">
                            <div class="text-zinc-900 text-base font-normal">12,911 items in</div>
                            <div class="text-zinc-900 text-base font-semibold ml-1">Mobile accessory</div>
                        </div>
                        <div class="w-3/5 justify-end pr-4 items-center inline-flex gap-4">
                            <div class="w-[40%] flex flex-row items-center justify-end">
                                <div class="w-8 h-6 pl-px pr-3 py-0.5 justify-start items-center flex">
                                    <div class="w-5 h-5 relative">
                                        <div class="w-5 h-5 left-0 top-0 absolute bg-blue-600 rounded">
                                            <IconCheck />
                                        </div>
                                    </div>
                                </div>
                                <div class="text-zinc-900 text-base font-normal">Verified only</div>
                            </div>
                            <div
                                class="w-[40%] h-10 relative border rounded-md border-zinc-200 flex flex-row justify-between items-center px-2">
                                <div class="text-zinc-900 text-base font-normal">
                                    Featured
                                </div>
                                <ArrowDown />
                            </div>
                            <div class="flex flex-row">
                                <IconView class="w-full" />
                                <IconViewList class="w-full" />
                            </div>
                        </div>
                    </div>
                    <div v-if="products.length > 0" class="flex flex-col gap-2.5">
                        <div v-for="(prod, index) in products" :key="index"
                            class="flex flex-row ml-12 bg-white h-60 rounded-md shadow-sm border border-zinc-200 gap-2">
                            <div @click="$router.push({ name: 'product_detail', params: { id: prod.id } })"
                                class="cursor-pointer w-52 pl-3 pr-3 pt-3 pb-3.5 bg-white justify-center items-center inline-flex rounded-md ">
                                <img class="w-full h-44" :src=prod.img />
                            </div>
                            <div class="w-[70%] flex flex-col lg:gap-4 md:gap-2 sm:gap-2 justify-center">
                                <div class="w-full text-zinc-900 text-base font-medium">{{ prod.name }}</div>
                                <div class="flex flex-col">
                                    <div class="w-full text-zinc-900 text-xl font-semibold ">{{ prod.price }}</div>
                                    <div class="w-full flex flex-row items-center gap-4">
                                        <div class="flex flex-row gap-1 items-center">
                                            <RatingFour />
                                            <div class="text-amber-500 text-base font-normal">{{ prod.rating }}</div>
                                        </div>
                                        <PointSeparator />
                                        <div class="text-gray-400 text-base font-normal">
                                            {{ prod.orders > 1 ? prod.orders + 'orders' : prod.orders + ' order' }}
                                        </div>
                                        <PointSeparator />
                                        <div v-if="prod.free_shipping" class="text-green-600 text-base font-normal">Free
                                            Shipping
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <div class="w-full text-neutral-600 text-base font-normal">{{ prod.description }} </div>
                                    <div class="text-primary text-base font-medium cursor-pointer"
                                        @click="$router.push({ name: 'product_detail', params: { id: prod.id } })">
                                        View details
                                    </div>
                                </div>
                            </div>
                            <div class="w-[8%] pt-4 pr-4 flex justify-end">
                                <div class="p-2 h-10 bg-white rounded-md shadow border border-zinc-200 inline-flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                                    @click="addFav(prod.id, prod.isFavorite)">
                                    <div class="relative flex-col justify-start items-start flex">
                                        <isFavorite v-if="!prod.isFavorite" />
                                        <Favorite v-else />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="h-full flex flex-row items-start m-12 justify-center">
                        <div class="text-gray-400 text-base font-normal">No hay productos para mostrar</div>
                    </div>

                    <div class="flex flex-row justify-end gap-2 mt-4">
                        <div
                            class="w-32 h-10 bg-white relative border rounded-md border-zinc-200 flex flex-row justify-between items-center px-2">
                            <div class="w-[80%]absolute text-zinc-900">
                                Show 10
                            </div>
                            <ArrowDown />
                        </div>

                        <div class="w-60 flex flex-row border rounded-md border-zinc-200">
                            <div class="w-11 h-10 relative">
                                <div class="w-6 h-6 left-[10px] top-[8px] absolute">
                                    <ArrowBack />
                                </div>
                            </div>
                            <div
                                class="w-1/5 h-10 relative items-center flex border-l border-zinc-200 justify-center bg-gray-100">
                                <div class="w-6 absolute justify-center items-center gap-2.5 inline-flex">
                                    <div class="text-center text-gray-400 text-base font-medium">1</div>
                                </div>
                            </div>
                            <div class="w-1/5 h-10 relative items-center flex justify-center border-x border-zinc-200">
                                <div class="w-6 absolute justify-center items-center gap-2.5 inline-flex">
                                    <div class="text-center text-zinc-900 text-base font-medium">2</div>
                                </div>
                            </div>
                            <div class="w-1/5 h-10 relative items-center flex justify-center border-r border-zinc-200">
                                <div class="w-6 absolute justify-center items-center gap-2.5 inline-flex">
                                    <div class="text-center text-zinc-900 text-base font-medium">3</div>
                                </div>
                            </div>
                            <div class="w-11 h-10 relative">
                                <div class="w-6 h-6 left-[10px] top-[8px] absolute">
                                    <ArrowNextPage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Movil view -->
    <div v-else class="w-full bg-gray-90 flex flex-col inline-flex">
        <MainHeaderMovil :backRoute="backRoute" :goBack="false" />
        <MainMenuMovil />
        <div v-if="products.length > 0" class="w-full flex flex-col gap-2.5 px-4 py-4">
            <div v-for="(prod, index) in products" :key="index"
                @click="$router.push({ name: 'product_detail', params: { id: prod.id } })"
                class="flex flex-row bg-white h-40 rounded-md shadow-sm border border-zinc-200 gap-4 px-2">
                <div class="w-[30%] cursor-pointer bg-white justify-center items-center inline-flex rounded-md ">
                    <img class="w-full h-28" :src=prod.img />
                </div>
                <div class="w-[70%] flex flex-col lg:gap-4 md:gap-2 sm:gap-2 justify-center gap-1">
                    <div class="w-full text-zinc-900 text-base font-medium">{{ prod.name }}</div>
                    <div class="flex flex-col">
                        <div class="w-full text-zinc-900 text-xl font-semibold ">{{ prod.price }}</div>
                        <div class="w-full flex flex-row items-center gap-4">
                            <div class="flex flex-row gap-1 items-center">
                                <RatingFour />
                                <div class="text-amber-500 text-base font-normal">{{ prod.rating }}</div>
                            </div>
                            <PointSeparator />
                            <div class="text-gray-400 text-base font-normal">
                                {{ prod.orders > 1 ? prod.orders + 'orders' : prod.orders + ' order' }}
                            </div>
                        </div>
                        <div v-if="prod.free_shipping" class="text-green-600 text-base font-normal">Free
                            Shipping
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="h-full flex flex-row items-start m-12 justify-center">
            <div class="text-gray-400 text-base font-normal">No hay productos para mostrar</div>
        </div>
        <div class="w-full flex flex-col px-4 mb-4 gap-4">
            <div v-if="products.length > 0" class="text-zinc-900 text-base font-semibold">You may like</div>
            <div class="w-full flex gap-4 mb-4 overflow-x-auto">
                <div v-for="(item, index) in suggestions" :key="index"
                    class="bg-white rounded-md shadow-sm border border-zinc-200 px-2 mb-4">
                    <div class="w-48 flex flex-col p-4 items-center">
                        <div class="items-center rounded-md p-2">
                            <img class="h-28" :src="item.img" />
                        </div>
                        <div class="w-full text-neutral-600 text-base font-semibold text-zinc-900">
                            {{ item.price }}
                        </div>
                        <div class="text-gray-400 text-base">{{ item.short_name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed right-8 bottom-8 bg-black backdrop-opacity-90 rounded-3xl" v-show="scY > 100"
            @click="scrollToTop">
            <ScrollToTop />
        </div>
    </div>
</template>