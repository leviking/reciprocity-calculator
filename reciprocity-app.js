define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js","../../node_modules/@polymer/paper-item/paper-item.js","../../node_modules/@polymer/paper-listbox/paper-listbox.js","../../node_modules/@polymer/paper-input/paper-input.js"],function(_polymerElement){"use strict";class ReciprocityApp extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          display: block;
          --primary-text-color: var(--paper-red-800);
          --primary-color: var(--paper-red-800);
          --secondary-text-color: #737373;
          --disabled-text-color: #9b9b9b;
        }
        paper-listbox {
          background-color: #222;
        }
        #title {
          max-height: 8vh;
        }
        #newTime {
          font-size: 10vh;
          max-height: 20vh;
          width: 80vw;
          text-align: center;
          margin: auto;
        }
        #film {
          max-height: 8vh;
          margin: 0px auto 20px auto;
          width: 80vw;
        }
        #shutter {
          max-height: 8vh;
          margin: 0px auto 20px auto;
          width: 80vw;
        }
      </style>
      <div id="title">
        Reciprocity
      </div>
      <div id='newTime'>
        [[time]] s
      <div>
      <paper-dropdown-menu id='film'>
        <paper-listbox slot="dropdown-content" selected="{{selected}}">
          <dom-repeat items="{{film}}">
            <template>
              <paper-item>[[item.film]]</paper-item>
            </template>
          </dom-repeat>
        </paper-listbox>
      </paper-dropdown-menu>
      <paper-input
        id='shutter'
        value={{shutterSpeed}}
        allowed-pattern=[0-9]
        >
        <div
          slot='suffix'
          style="margin:0px;"
        >
        seconds
        </div>
      </paper-input>
    `}static get properties(){return{selected:{type:Number,value:1,notify:!0},shutterSpeed:{type:Number,value:1,notify:!0},film:{type:Object,value:[{film:"TMax-100",R:1.16},{film:"TriX",R:1.21},{film:"SFX",R:1.43},{film:"Portra",R:1.36},{film:"PanF",R:1.33},{film:"Delta100",R:1.26},{film:"Delta400",R:1.41},{film:"Delta3200",R:1.33},{film:"FP4",R:1.26},{film:"HP5",R:1.31},{film:"XP2",R:1.31},{film:"K100",R:1.26},{film:"K400",R:1.3},{film:"Bergger",R:1.17},{film:"Foma100",R:1.52},{film:"Arista100",R:1.52},{film:"Arista200",R:1.55},{film:"Arista400",R:1.35},{film:"Foma200",R:1.55},{film:"Foma400",R:1.35},{film:"Retro320",R:1.35},{film:"Ektar",R:1.18},{film:"RPX25",R:1.3},{film:"Gold200",R:1.2},{film:"Neopan",R:1.05},{film:"Velvia50",R:1.21},{film:"Velvia100",R:1.08},{film:"Provia",R:1.04}]},time:{type:Number,computed:"_calculateReciprocity(shutterSpeed, selected)"}}}_calculateReciprocity(shutterSpeed,selected){return`${Math.pow(shutterSpeed,this.film[selected].R).toFixed(1)}`}}window.customElements.define("reciprocity-app",ReciprocityApp)});