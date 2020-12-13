<template>
   <div class="icon-layout">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
      <span>HTML5</span>
   </div>
</template>

<style lang="scss">
.skill-icons {
  svg {
    width: 3rem;
    height: 3rem;
    margin: 0.75rem 0.75rem 0;
    overflow: initial;
    fill: rgb(88, 85, 85) !important;
  }
}
.icon-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;
  span {
    font-size: 11px;
    font-weight: bold;
  }
}

@media screen and (max-width: 959px){
  .skill-icons {
    svg {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0.5rem 0.5rem 0;
    }
  }
}

@media screen and (max-width: 559px){
  .skill-icons {
    svg {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
}
</style>
