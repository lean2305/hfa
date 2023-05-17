import React from 'react';

function Html() {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en" >
  <head>
    <meta charset="UTF-8">
    <title>CodePen - CSS Marquee Logo Wall</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <style>
    :root {
        --color-text: navy;
        --color-bg: papayawhip;
        --color-bg-accent: #ecdcc0;
        --size: clamp(10rem, 1rem + 40vmin, 30rem);
        --gap: calc(var(--size) / 14);
        --duration: 60s;
        --scroll-start: 0;
        --scroll-end: calc(-100% - var(--gap));
      }
      
      @media (prefers-color-scheme: dark) {
        :root {
          --color-text: papayawhip;
          --color-bg: #36a6e1;
          --color-bg-accent: #36a6e1;
        }
      }
      
      * {
        box-sizing: border-box;
      }
      
      body {
        
        align-content: center;
        overflow: hidden;
        gap: var(--gap);
        width: 100%;
        min-height: 100vh;
        font-family: system-ui, sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        color: var(--color-text);
        background-color: white;
      }
      
      .marquee {
        display: flex;
        overflow: hidden;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        gap: var(--gap);
        -webkit-mask-image: linear-gradient(
          var(--mask-direction, to right),
          hsl(0 0% 0% / 0),
          hsl(0 0% 0% / 1) 20%,
          hsl(0 0% 0% / 1) 80%,
          hsl(0 0% 0% / 0)
        );
                mask-image: linear-gradient(
          var(--mask-direction, to right),
          hsl(0 0% 0% / 0),
          hsl(0 0% 0% / 1) 20%,
          hsl(0 0% 0% / 1) 80%,
          hsl(0 0% 0% / 0)
        );
      }
      
      .marquee__group {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: var(--gap);
        min-width: 100%;
        -webkit-animation: scroll-x var(--duration) linear infinite;
                animation: scroll-x var(--duration) linear infinite;
      }
      
      @media (prefers-reduced-motion: reduce) {
        .marquee__group {
          -webkit-animation-play-state: paused;
                  animation-play-state: paused;
        }
      }
      
      .marquee--vertical {
        --mask-direction: to bottom;
      }
      
      .marquee--vertical,
      .marquee--vertical .marquee__group {
        flex-direction: column;
      }
      
      .marquee--vertical .marquee__group {
        -webkit-animation-name: scroll-y;
                animation-name: scroll-y;
      }
      
      .marquee--reverse .marquee__group {
        animation-direction: reverse;
        -webkit-animation-delay: -3s;
                animation-delay: -3s;
      }
      
      @-webkit-keyframes scroll-x {
        from {
          transform: translateX(var(--scroll-start));
        }
        to {
          transform: translateX(var(--scroll-end));
        }
      }
      
      @keyframes scroll-x {
        from {
          transform: translateX(var(--scroll-start));
        }
        to {
          transform: translateX(var(--scroll-end));
        }
      }
      
      @-webkit-keyframes scroll-y {
        from {
          transform: translateY(var(--scroll-start));
        }
        to {
          transform: translateY(var(--scroll-end));
        }
      }
      
      @keyframes scroll-y {
        from {
          transform: translateY(var(--scroll-start));
        }
        to {
          transform: translateY(var(--scroll-end));
        }
      }
      
      /* Element styles */
      .marquee svg {
        display: grid;
        place-items: center;
        width: var(--size);
        fill: var(--color-text);
        background: var(--color-bg-accent);
        aspect-ratio: 16/9;
        padding: calc(var(--size) / 10);
        border-radius: 0.5rem;
      }
      
      .marquee--vertical svg {
        aspect-ratio: 1;
        width: calc(var(--size) / 1.5);
        padding: calc(var(--size) / 6);
      }
      
      /* Parent wrapper */
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        margin: auto;
        max-width: 100vw;
        padding-top: 2%;
      }
      
      .wrapper--vertical {
        flex-direction: row;
        height: 100vh;
      }
      
      /* Toggle direction button */
      .toggle {
        --size: 3rem;
        position: relative;
        position: fixed;
        top: 1rem;
        left: 1rem;
        width: var(--size);
        height: var(--size);
        font: inherit;
        text-align: center;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 50%;
        color: inherit;
        background-color: var(--color-bg-accent);
        z-index: 1;
      }
      
      .toggle:focus-visible {
        box-shadow: 0 0 0 2px var(--color-text);
      }
      
      .toggle span {
        position: absolute;
        display: inline-block;
        top: 50%;
        left: calc(100% + 0.4em);
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        white-space: nowrap;
        transform: translateY(-50%);
        -webkit-animation: fade 400ms 4s ease-out forwards;
                animation: fade 400ms 4s ease-out forwards;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
      }
      
      .toggle svg {
        --size: 1.5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        width: var(--size);
        height: var(--size);
        fill: currentcolor;
        transform: translate(-50%, -50%);
        transition: transform 300ms cubic-bezier(0.25, 1, 0.5, 1);
      }
      
      .toggle--vertical svg {
        transform: translate(-50%, -50%) rotate(-90deg);
      }
      
      @-webkit-keyframes fade {
        to {
          opacity: 0;
          visibility: hidden;
        }
      }
      
      @keyframes fade {
        to {
          opacity: 0;
          visibility: hidden;
        }
      }
  </style>
  
  </head>
  <body>
  <!-- partial:index.partial.html -->
  
  
  <article class="wrapper">
    <div class="marquee">
      <div class="marquee__group">
        
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
          <!-- Adicionar a imagem -->
          <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_57_5eb2e4749f806.png" />

        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
          <!-- Adicionar a imagem -->
          <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_60_5eb2e474eae06.png" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
          <!-- Adicionar a imagem -->
          <image x="-460" y="-460" width="1100" height="1100" xlink:href="/parceria/Grupo_72_5eccceef82685-01-01.png" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
          <!-- Adicionar a imagem -->
          <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_5eb2e475a122a.png" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
          <!-- Adicionar a imagem -->
          <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_globaltronic_5eb2e475ecb82.png" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
          <!-- Adicionar a imagem -->
          <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logoIT_25years_5eb2e4765dad5.png" />
        </svg>
        
      </div>
  
      <div aria-hidden="true" class="marquee__group">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_57_5eb2e4749f806.png" />

    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_60_5eb2e474eae06.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-460" y="-460" width="1100" height="1100" xlink:href="/parceria/Grupo_72_5eccceef82685-01-01.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_5eb2e475a122a.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_globaltronic_5eb2e475ecb82.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logoIT_25years_5eb2e4765dad5.png" />
    </svg>
    
      </div>
    </div>
  
    <div class="marquee marquee--reverse">
      <div class="marquee__group">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_57_5eb2e4749f806.png" />

    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_60_5eb2e474eae06.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-460" y="-460" width="1100" height="1100" xlink:href="/parceria/Grupo_72_5eccceef82685-01-01.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_5eb2e475a122a.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_globaltronic_5eb2e475ecb82.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logoIT_25years_5eb2e4765dad5.png" />
    </svg>
    
      </div>
  
      <div aria-hidden="true" class="marquee__group">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_57_5eb2e4749f806.png" />

    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/Grupo_60_5eb2e474eae06.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-460" y="-460" width="1100" height="1100" xlink:href="/parceria/Grupo_72_5eccceef82685-01-01.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_5eb2e475a122a.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logo_globaltronic_5eb2e475ecb82.png" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
      <!-- Adicionar a imagem -->
      <image x="-50" y="-50" width="300" height="300" xlink:href="/parceria/logoIT_25years_5eb2e4765dad5.png" />
    </svg>
    
      </div>
    </div>
  </article>
  

  
  </body>
  </html>
  
  `;

  return (
    <div>
      {/* ...outros componentes */}
      <iframe
        srcDoc={htmlContent}
        width="100%"
        height="700px"
        title="Conteúdo HTML"
        style={{ border: 0 }}
      />
    </div>
  );
}

export default Html;
