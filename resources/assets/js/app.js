import Vue from 'vue';
import {
  populateAmenitiesAndPrices
} from './helpers';
import 'core-js/fn/object/assign';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);
// console.log(model);

import ModalWindow from '../js/components/ModalWindow.vue';
import ImageCarousel from '../js/components/ImageCarousel.vue';
import HeaderImage from '../js/components/HeaderImage.vue';
import FeatureList from '../js/components/FeatureList.vue';

var app = new Vue({
  el: '#app',
  data: Object.assign(model, {
    headerImageStyle: {
      'background-image': `url(${model.images[0]})`
    },
    contracted: true
  }),
  components: {
    ImageCarousel,
    ModalWindow,
    HeaderImage,
    FeatureList
    },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
      },
    escapeKeyListener: function (evt) {
      if (evt.keyCode === 27 && this.modalOpen) {
        this.modalOpen = false
      }
    }
  },
});