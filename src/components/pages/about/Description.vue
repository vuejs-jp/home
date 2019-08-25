<template>
  <div class="about__description">
    <h2 class="about__description-title">
      <span>Lorem ipsum dolor sit amet.</span>
      <small>Lorem ipsum dolor sit.</small>
    </h2>
    <div class="about__description-grid">
      <p>1Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo debitis tenetur quod, error temporibus, expedita nobis, ducimus id molestiae fuga consequuntur minima consectetur fugiat. Neque earum laboriosam consectetur omnis aspernatur aut, magni unde blanditiis maiores. Autem praesentium aperiam itaque dolorum adipisci.</p>
      <p>2Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo eveniet amet sed quo maiores et tempore reprehenderit eos. Recusandae repellendus velit fugiat omnis distinctio esse eius nobis accusantium, qui excepturi sapiente nesciunt minus delectus.</p>
      <p>3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sequi a praesentium expedita delectus officia, earum harum enim repudiandae. Id ullam, beatae sapiente debitis placeat cupiditate molestias eos eveniet illo voluptate! Minima sapiente blanditiis quasi.</p>
      <p>4Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis est, ullam, excepturi praesentium saepe quam similique libero, officia quo modi!</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.about {
  &__description {
    &-title {
      small {
        display: block;
      }
    }
    &-grid {
      columns: 2;
      column-gap: 2em;
      p:first-of-type {
        margin-top: 0;
      }
    }
  }
}
</style>
