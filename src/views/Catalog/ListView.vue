<script setup>
import BreadCrumbs from '@/components/webComponents/BreadCrumbs.vue';
import LeftMenu from '@/components/webComponents/LeftMenu.vue';
import RatingFour from '@/assets/icons/RatingFour.vue';
import PointSeparator from '@/assets/icons/PointSeparator.vue';
import isFavorite from '@/assets/icons/isFavorite.vue';
import IconView from '@/assets/icons/IconView.vue';
import IconViewList from '@/assets/icons/IconViewList.vue';
import IconCheck from '@/assets/icons/IconCheck.vue';
import ArrowDown from '@/assets/icons/ArrowDown.vue';
import ArrowBack from '@/assets/icons/ArrowBack.vue';
import ArrowNextPage from '@/assets/icons/ArrowNextPage.vue';

const products = [
    {
        img: 'https://via.placeholder.com/185x185',
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        price: '$998.00',
        old_price: '$1128.00',
        rating: '7.5',
        orders: 1,
        free_shipping: true,
        description: 'Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
        img: 'https://via.placeholder.com/188x188',
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: '$998.00',
        old_price: '$1128.00',
        rating: '7.5',
        orders: 154,
        free_shipping: true,
        description: 'Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
        img: 'https://via.placeholder.com/181x181',
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: '$998.00',
        old_price: '$1128.00',
        rating: '7.5',
        orders: 154,
        free_shipping: true,
        description: 'Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
        img: 'https://via.placeholder.com/189x149',
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: '$998.00',
        old_price: '$1128.00',
        rating: '7.5',
        orders: 154,
        free_shipping: true,
        description: 'Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
        img: 'https://via.placeholder.com/152x182',
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: '$998.00',
        old_price: '$1128.00',
        rating: '7.5',
        orders: 154,
        free_shipping: true,
        description: 'Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
        img: 'https://via.placeholder.com/203x203',
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: '$998.00',
        old_price: '$1128.00',
        rating: '7.5',
        orders: 154,
        free_shipping: true,
        description: 'Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    }
]

const crumbs = ['Home', 'Clothings', 'Men’s wear', 'Summer clothing']
</script>
<template>
    <div class="px-[15%] mb-8">
        <BreadCrumbs :crumbs="crumbs" />
        <div class="flex flex-row">
            <div class="w-[20%]">
                <LeftMenu />
            </div>
            <div class="w-[80%] flex flex-col gap-2.5">
                <div class="w-ful h-16 ml-12 flex flex-row bg-white rounded-md border border-zinc-200 justify-between">
                    <div class="w-2/5  flex flex-row items-center px-[1.5%]">
                        <span class="text-zinc-900 text-base font-normal">12,911 items in</span>
                        <span class="text-zinc-900 text-base font-semibold">Mobile accessory</span>
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
                <div v-for="(prod, index) in products" :key="index"
                    class="flex flex-row ml-12 bg-white h-60 rounded-md shadow-sm border border-zinc-200 gap-2">
                    <div class="w-52 pl-3 pr-3 pt-3 pb-3.5 bg-white justify-center items-center inline-flex rounded-md ">
                        <img class="w-full h-48" :src=prod.img />
                    </div>
                    <div class="w-[70%] flex flex-col gap-2 justify-center">
                        <div class="w-full text-zinc-900 text-base font-medium">{{ prod.name }}</div>
                        <div class="flex flex-col">
                            <div class="w-full text-zinc-900 text-xl font-semibold">{{ prod.price }}</div>
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
                                <div v-if="prod.free_shipping" class="text-green-600 text-base font-normal">Free Shipping
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-full text-neutral-600 text-base font-normal">{{ prod.description }} </div>
                            <div class="text-primary text-base font-medium">View details</div>
                        </div>
                    </div>
                    <div class="w-[8%] pt-4 pr-4 flex justify-end">
                        <div class="p-2 h-10 bg-white rounded-md shadow border border-zinc-200 inline-flex">
                            <div class="relative flex-col justify-start items-start flex">
                                <isFavorite />
                            </div>
                        </div>
                    </div>
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
</template>