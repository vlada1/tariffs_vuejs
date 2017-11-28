'use strict';

const $ = require('jquery');
const Vue = require('../plugins/vue.js');

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
            speed: 20
        },
        channels: [
            {
                name: 'Discovery HD Showcase',
                description: 'Discovery HD Showcase'
            },
            {
                name: 'Перший автомобільний телеканал',
                description: 'Перший автомобільний телеканал'
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
            speed: 50
        },
        channels: [
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.'
            },
            {
                name: 'K2',
                description: 'K2'
            },
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.'
            },
            {
                name: 'K2',
                description: 'K2'
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
            speed: 100
        },
        channels: [
            {
                name: 'UA: Перший',
                description: 'UA: Перший є основним каналом в структурі суспільного телебачення.'
            },
            {
                name: 'K2',
                description: 'K2'
            },
            {
                name: 'K1',
                description: 'K1'
            }
        ]
    }
];

const activeTariff = tariffs.find((tariff) => {
    return tariff.isActive;
});


new Vue({
    el: '#tariff-tabs',
    data: {
        tariffs,
        activeTariff,
        additional: [
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
                    price: 99,
                },
                adultVOD: {
                    price: 39
                }
            }
        ],
    },
    methods: {
        setActive(tariff) {
            this.tariffs.forEach((tariff) => {
                tariff.isActive = false;
            });
            tariff.isActive = true;
            this.activeTariff = tariff;
        }
    }
});


