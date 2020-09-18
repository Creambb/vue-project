import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    type Element = VNode;

    type ElementClass = Vue;

    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [elem: string]: any;
    }
  }

  declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
  }

  declare module '*.png';
}
