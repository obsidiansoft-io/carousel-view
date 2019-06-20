import { html, css, LitElement } from 'lit-element';
var timeout; //guarda el handler del setTimeout para poder ser limpiado
class Carousel extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      style: { attribute: 'style' },
      autoScroll: { type: Boolean } //permite que los elementos se cambien automaticamente
    };
  }
  static get styles() {
    return css`
      :host {
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: relative;
      }
      ::slotted(*) {
        width: 100%;
        height: 100%;
      }
      .carousel {
        width: 100%;
        height: auto;
      }
      .no-scroll {
        overflow-x: hidden !important;
        overflow-y: hidden !important;
      }
      .image {
        visibility: hidden;
      }
      slot {
        display: none;
      }
      .hide {
        display: none !important;
      }
      .visible {
        animation: slide-down 1s ease-out;
        display: inline;
      }
      .arrow {
        background: rgb(0, 0, 0, 0.5);
        color: #fff;
        cursor: pointer;
        font-size: 170px;
        height: 100%;
        position: absolute;
        display: flex;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
      }
      .arrow span {
        display: inline;
        margin: auto;
      }
      .left {
        top: 0;
        left: 0;
      }
      .right {
        top: 0;
        right: 0;
      }

      @keyframes slide-down {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes slide-down {
        0% {
          opacity: 0;
          transform: translateY(-100%);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
  }
  changeSlides(i = 1) {
    if (this.active === this.children.length - 1 && i === 1) {
      this.active = 0;
    } else {
      this.active += i;
    }
    if (this.active < 0) {
      this.active = this.children.length - 1;
    }
    if (this.autoScroll) {
      clearTimeout(timeout);
    }
    this.update();
  }
  constructor() {
    super();
    this.type = 'default';
    this.active = 0;
    this.autoScroll = false;
  }
  render() {
    var e = [];
    for (let i = 0; i < this.children.length; i++) {
      e.push(i);
    }
    if (this.autoScroll) {
      timeout = setTimeout(() => this.changeSlides(), 4000);
    }

    return html`
      <div class="carousel no-scroll" style="${this.style}">
        ${e.map(
          e =>
            html`
              <slot
                name="${e}"
                id="e${e}"
                class="${this.active !== e ? 'hide' : 'visible'}"
              ></slot>
            `
        )}
        <div class="arrow right" @click="${() => this.changeSlides(1)}">
          <span>&rsaquo;</span>
        </div>
        <div class="arrow left" @click="${() => this.changeSlides(-1)}">
          <span>&lsaquo;</span>
        </div>
      </div>
    `;
  }
}
window.customElements.define('carousel-view', Carousel);