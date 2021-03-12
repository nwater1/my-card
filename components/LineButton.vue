<template>
  <button
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButtonShareLine',
  methods: {
    clicked () {
      this.$emit('action-button-clicked')
    }
  }

}
</script>

<style scoped>

button {

  color: #FFF;
  width: 230px;
  border: 4px solid var(--button-border-color, var(--primary-color));
  font-weight: bold;
  font-size: 16px;
  background:  #00c300;
  border-radius: 9999px;
  padding: 12px 24px;
  transition: 0.25s ease-in-out all;
}

button:hover {
  color: #FFF;
  background-color: #00e000;
}

button:focus {
  outline: none;
  background:  #00b300;
}
</style>
