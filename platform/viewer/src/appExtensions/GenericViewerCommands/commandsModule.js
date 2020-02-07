import { redux } from '@ohif/core';
import store from './../../store';
const { setViewportActive } = redux.actions;

const actions = {
  updateViewportDisplaySet: ({ direction }) => {
    // TODO
    // console.warn('updateDisplaySet: ', direction);
  },
  updateActiveViewport: ({ viewports, direction }) => {
    const { viewportSpecificData, activeViewportIndex } = viewports;
    const maxIndex = Object.keys(viewportSpecificData).length - 1;

    let newIndex = activeViewportIndex + direction;
    newIndex = newIndex > maxIndex ? 0 : newIndex;
    newIndex = newIndex < 0 ? maxIndex : newIndex;

    store.dispatch(setViewportActive(newIndex));
  },
  setWindowLevelPreset: ({ preset }) => {
    const wlPresetData = store.getState().preferences.windowLevelData[preset];
    // TODO: Change window level of viewers
  },
};

const definitions = {
  // Next/Previous active viewport
  incrementActiveViewport: {
    commandFn: actions.updateActiveViewport,
    storeContexts: ['viewports'],
    options: { direction: 1 },
  },
  decrementActiveViewport: {
    commandFn: actions.updateActiveViewport,
    storeContexts: ['viewports'],
    options: { direction: -1 },
  },
  // Window level Presets
  windowLevelPreset1: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 1 },
  },
  windowLevelPreset2: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 2 },
  },
  windowLevelPreset3: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 3 },
  },
  windowLevelPreset4: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 4 },
  },
  windowLevelPreset5: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 5 },
  },
  windowLevelPreset6: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 6 },
  },
  windowLevelPreset7: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 7 },
  },
  windowLevelPreset8: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 8 },
  },
  windowLevelPreset9: {
    commandFn: actions.setWindowLevelPreset,
    storeContexts: [],
    options: { preset: 9 },
  },
};

export default {
  definitions,
  defaultContext: 'VIEWER',
};
