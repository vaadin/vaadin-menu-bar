import {animationFrame} from '@polymer/polymer/lib/utils/async.js';

import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';

import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';

import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';

export {ButtonsMixin};

declare function ButtonsMixin<T extends new (...args: any[]) => {}>(base: T): T & ButtonsMixinConstructor;

interface ButtonsMixinConstructor {
  new(...args: any[]): ButtonsMixin;
}

export {ButtonsMixinConstructor};

interface ButtonsMixin {
  readonly _buttons: HTMLElement[];
  readonly _container: HTMLElement;
  readonly _overflow: HTMLElement;
  _hasOverflow: boolean;
  ready(): void;

  /**
   * Call this method after updating menu bar `items` dynamically, including changing
   * any property on the item object corresponding to one of the menu bar buttons.
   */
  render(): void;
}
