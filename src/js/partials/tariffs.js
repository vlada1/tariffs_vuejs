'use strict';

const $ = require('jquery');
const Vue = require('../plugins/vue.js');
require('../plugins/perfect-scrollbar.jquery');
require('../plugins/select2.full.min');
const pickmeup = require('../plugins/pickmeup.min');


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


new Vue({
    el: '.content',
    data: {
        tariffs,
        activeTariff,
        suggestInput: '',
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
        requestStep: {
            connectToday: false,
            withTuner: false,
            router: false,
            routerPro: false,
            withVod: false,
            withVod2: false,
            tunerCounter: 0
        }
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
        },
        connectToday() {
            const dateInput = $('.connect-input-holder__input');
            if (this.requestStep.connectToday) {
                pickmeup('.connect-input-holder__input').set_date(new Date());
                dateInput.val(pickmeup('.connect-input-holder__input').get_date(true));
            } else {
                dateInput.val('');
                pickmeup('.connect-input-holder__input').clear();
            }
        }
    }
});


$('.channels-container').perfectScrollbar();
$('.number-holder__select').select2().on("select2-open", () => {
    $(this).select2('positionDropdown', true);
});

pickmeup('.connect-input-holder__input', {
    format: 'Y-m-d',
    default_date: false,
    hide_on_select: true,
    min: new Date()
});








