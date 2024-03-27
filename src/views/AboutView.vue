<template>
  <div class="about">
    <h1>H1 - This is an H1 heading</h1>
    <h2>H2 - This is an H2 heading</h2>
    <h3>H3 - This is an H3 heading</h3>
    <hr>HR - This is an HR heading</hr>
    <subtitle>Subtitle - this is subtitle text</subtitle>
    <p> paragraph ...Organize your document with an article element inside your body tag. Inside that, use section tags around each logical grouping of text and headings.

Tufte CSS uses h1 for the document title, p with class subtitle for the document subtitle, h2 for section headings, and h3 for low-level headings</p>

    <article>Article - this is article text.</article>
    <sans>SANs text - this is sans text abcdefhijklmnopqrstuvwx</sans>
    <section>Section</section>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; */
  }
}
</style>
