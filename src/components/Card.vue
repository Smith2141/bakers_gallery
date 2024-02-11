<template>
  <div class="col s1 m6">
    <div class="card hoverable" :class="card_data.card_color">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="activator"
          :src="'/src/assets/' + card_data.picture"
          alt="picture"
        />
        <span class="card-title black-text">{{ card_data.title }}</span>
      </div>
      <div class="card-content black-text">
        <p class="card-description left-align">{{ card_data.description }}</p>
      </div>
      <div class="card-action">
        <a class="waves-effect waves-light activator btn-large">Состав</a>
      </div>
      <div class="card-reveal" :class="card_data.card_color">
        <span class="card-title black-text">{{ card_data.title }}</span>
        <p class="black-text">Состав: {{ card_data.composition }}.</p>
      </div>
    </div>
  </div>

  <!-- <div class="col s1 m6">
    <div class="card">
      <div class="card-image">
        <img :src="'src/assets/' + card_data.picture">
        <span class="card-title black-text">{{ card_data.title }}</span>
      </div>
      <div class="card-content">
        <p class="card-description left-align">{{ card_data.description }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Card",
  props: {
    card_data: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    // M.Materialbox.init(this.$refs.image_item);
    // console.log(this.bakeryProductsGetter)
    // console.log(this.$refs.image_item)
  },
};
</script>
