const $ = require('jquery');
const Vue = require('../plugins/vue.js');
require('../plugins/perfect-scrollbar.jquery');

'use strict';

const tariffs = [
    {
        id: 1,
        name: 'Зручний',
        tvPrice: 59,
        isHD: false,
        isActive: false,
        internet: {
            name: 'Безлiм-М',
            price: 75,
            speed: 20,
            discount: false,
            sale: null
        },
        channels: [
            {
                name: 'Discovery HD Showcase',
                description: 'Discovery HD Showcase',
                class: 'channel__logo--discovery'
            },
            {
                name: 'Перший автомобільний телеканал',
                description: 'Перший автомобільний телеканал',
                class: 'channel__logo--pershiy-avto'
            }
        ]
    },
    {
        id: 2,
        name: 'Оптимальний',
        tvPrice: 99,
        isHD: false,
        isActive: true,
        internet: {
            name: 'Безлiм-L',
            price: 80,
            speed: 50,
            discount: true,
            sale: 25
        },
        channels: [
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.',
                class: 'channel__logo--pershiy'
            },
            {
                name: 'K2',
                description: 'K2',
                class: 'channel__logo--k2'
            },
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.',
                class: 'channel__logo--pershiy'
            },
            {
                name: 'Discovery HD Showcase',
                description: 'Discovery HD Showcase',
                class: 'channel__logo--discovery'
            },
            {
                name: 'Перший автомобільний телеканал',
                description: 'Перший автомобільний телеканал',
                class: 'channel__logo--pershiy-avto'
            },
            {
                name: 'K2',
                description: 'K2',
                class: 'channel__logo--k2'
            },
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.',
                class: 'channel__logo--pershiy'
            },
            {
                name: 'K2',
                description: 'K2',
                class: 'channel__logo--k2'
            },
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.',
                class: 'channel__logo--pershiy'
            },
            {
                name: 'K2',
                description: 'K2',
                class: 'channel__logo--k2'
            },
            {
                name: 'Discovery HD Showcase',
                description: 'Discovery HD Showcase',
                class: 'channel__logo--discovery'
            },
            {
                name: 'Перший автомобільний телеканал',
                description: 'Перший автомобільний телеканал',
                class: 'channel__logo--pershiy-avto'
            }
        ]
    },
    {
        id: 3,
        name: 'Премiальний',
        tvPrice: 169,
        isHD: true,
        isActive: false,
        internet: {
            name: 'Безлiм-XL',
            price: 130,
            speed: 100,
            discount: true,
            sale: 50
        },
        channels: [
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.',
                class: 'channel__logo--pershiy'
            },
            {
                name: 'K2',
                description: 'K2',
                class: 'channel__logo--k2'
            },
            {
                name: 'K1',
                description: 'K1',
                class: 'channel__logo--k1'
            }
        ]
    }
];

const activeTariff = tariffs.find((tariff) => {
    return tariff.isActive;
});


const vm = new Vue({
    el: '#tariff-tabs',
    data: {
        tariffs,
        activeTariff,
        additional:
            {
                connectToday: 100,
                tunerTV: {
                    name: 'ТВ-тюнер',
                    price: 39
                },
                routerPro: {
                    name: 'Роутер Pro',
                    price: 1000
                },
                router: {
                    name: 'Wi-Fi роутер',
                    price: 300
                },
                premiumVOD: {
                    name: 'Премiальний VOD',
                    price: 99,
                },
                adultVOD: {
                    name: 'Дорослий',
                    price: 39
                }
            },
    },
    methods: {
        setActive(tariff) {
            this.tariffs.forEach((tariff) => {
                tariff.isActive = false;
            });
            tariff.isActive = true;
            this.activeTariff = tariff;
            setTimeout(() => {
                $('.channels-container').perfectScrollbar('destroy');
                $('.channels-container').perfectScrollbar();
            }, 0);
        }
    }
});

$('.channels-container').perfectScrollbar();








