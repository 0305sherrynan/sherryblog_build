import { useSSRContext, defineComponent, mergeProps, ref, computed, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { onClickOutside } from '@vueuse/core';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'defu';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'h3';
import 'ufo';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SubMenu",
  __ssrInlineRender: true,
  props: {
    EachMenuItem: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sub-menu" }, _attrs))} data-v-f7971f71><!--[-->`);
      ssrRenderList(__props.EachMenuItem, (item, index2) => {
        _push(`<div class="sub-each-item" data-v-f7971f71><button class="sub-each-row-span"${ssrIncludeBooleanAttr(item["disabled"]) ? " disabled" : ""} data-v-f7971f71>${ssrInterpolate(item["title"])}</button>`);
        if (item["breakAfter"]) {
          _push(`<div class="divider" data-v-f7971f71></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menubar/SubMenu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-f7971f71"]]);
const contextMenuConfig = {
  default: {
    "new-folder": {
      title: "New Folder",
      breakAfter: true
    },
    "get-info": {
      title: "Get Info"
    },
    "change-desktop-bg": {
      title: "Change Desktop Background",
      breakAfter: true
    },
    "use-stacks": {
      title: "Use Stacks"
    },
    "sort-by": {
      title: "Sort By"
    },
    "clean-up": {
      title: "Clean Up"
    },
    "clean-up-by": {
      title: "Clean Up By"
    },
    "show-view-options": {
      title: "Show View Options"
    }
  }
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ContextMenu",
  __ssrInlineRender: true,
  props: {
    XYpos: null
  },
  setup(__props) {
    const props = __props;
    const isShow = ref(false);
    const xpage = computed(() => props.XYpos.xPage + "px");
    const ypage = computed(() => props.XYpos.yPage + "px");
    const rightMenuRef = ref(null);
    const clickOut = () => {
      isShow.value = false;
    };
    onClickOutside(rightMenuRef, clickOut);
    watch([xpage, ypage], (newValue, oldValue) => {
      isShow.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenubarSubMenu = __nuxt_component_0$4;
      const _cssVars = { style: {
        "--4290167c": unref(xpage),
        "--4273e77a": unref(ypage)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "context-menu",
        style: unref(isShow) ? null : { display: "none" },
        ref_key: "rightMenuRef",
        ref: rightMenuRef
      }, _attrs, _cssVars))} data-v-727989c4>`);
      _push(ssrRenderComponent(_component_MenubarSubMenu, {
        EachMenuItem: unref(contextMenuConfig).default
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/ContextMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-727989c4"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeaderList",
  __ssrInlineRender: true,
  props: {
    headlist: null
  },
  setup(__props) {
    const props = __props;
    const { item, index: index2 } = props.headlist;
    const isShow = ref(false);
    const scale = ref(0);
    watch(isShow, (newValue, oldValue) => {
      scale.value = isShow.value ? 1 : 0;
    });
    const btn_enter = () => {
      isShow.value = true;
    };
    const btn_leave = () => {
      isShow.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenubarSubMenu = __nuxt_component_0$4;
      const _cssVars = { style: {
        "--1e0d50ac": unref(scale)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-list" }, _attrs, _cssVars))} data-v-24f87184><span data-v-24f87184>${ssrInterpolate(unref(item).title)}</span>`);
      _push(ssrRenderComponent(_component_MenubarSubMenu, {
        EachMenuItem: unref(item).menu,
        style: unref(isShow) ? null : { display: "none" },
        onMouseenter: btn_enter,
        onMouseleave: btn_leave,
        class: "menubar-sub-menu"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menubar/HeaderList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-24f87184"]]);
const headerMenuConfig = {
  finder: {
    title: "Finder",
    menu: {
      "about-finder": {
        title: "About Finder",
        breakAfter: true
        //是否分页
      },
      "preferences": {
        title: "Preferences",
        breakAfter: true
      },
      "empty-trash": {
        title: "Empty Trash",
        breakAfter: true
      },
      "hide-finder": {
        title: "Hide Finder"
      },
      "hide-others": {
        title: "Hide Others"
      },
      "show-all": {
        title: "Show All",
        disabled: true
      }
    }
  },
  file: {
    title: "File",
    menu: {
      "new-finder-window": {
        title: "New Finder Window"
      },
      "new-folder": {
        title: "New Folder"
      },
      "new-folder-with-selection": {
        title: "New Folder with Selection",
        disabled: true
      },
      "new-smart-folder": {
        title: "New Smart Folder"
      },
      "new-tab": {
        title: "New tab"
      },
      open: {
        title: "Open",
        disabled: true
      },
      "open-with": {
        title: "Open With",
        disabled: true
      },
      print: {
        title: "Print",
        disabled: true
      },
      "close-window": {
        title: "Close Window",
        disabled: true,
        breakAfter: true
      },
      "get-info": {
        title: "Get Info"
      },
      rename: {
        title: "Rename",
        disabled: true,
        breakAfter: true
      },
      compress: {
        title: "Compress",
        disabled: true,
        breakAfter: true
      },
      duplicate: {
        title: "Duplicate",
        disabled: true
      },
      "make-alias": {
        title: "Make Alias",
        disabled: true
      },
      "quick-look": {
        title: "Quick Look",
        disabled: true
      },
      "show-original": {
        title: "Show Original",
        disabled: true
      },
      "add-to-sidebar": {
        title: "Add to Sidebar",
        disabled: true,
        breakAfter: true
      },
      "move-to-trash": {
        title: "Move to Trash",
        disabled: true
      },
      eject: {
        title: "Eject",
        disabled: true,
        breakAfter: true
      },
      find: {
        title: "Find",
        breakAfter: true
      },
      tags: {
        title: "Tags...",
        disabled: true
      }
    }
  },
  edit: {
    title: "Edit",
    menu: {
      undo: {
        title: "Undo",
        disabled: true
      },
      redo: {
        title: "Redo",
        disabled: true,
        breakAfter: true
      },
      cut: {
        title: "Cut",
        disabled: true
      },
      copy: {
        title: "Copy",
        disabled: true
      },
      paste: {
        title: "Paste",
        disabled: true
      },
      "select-all": {
        title: "Select All",
        disabled: true,
        breakAfter: true
      },
      "show-clipboard": {
        title: "Show Clipboard",
        breakAfter: true
      },
      "start-dictation": {
        title: "Start Dictation..."
      },
      "emoji-and-symbols": {
        title: "Emoji & Symbols"
      }
    }
  },
  view: {
    title: "View",
    menu: {
      "as-icons": {
        title: "As Icons",
        disabled: true
      },
      "as-list": {
        title: "As List",
        disabled: true
      },
      "as-columns": {
        title: "As Columns",
        disabled: true
      },
      "as-gallery": {
        title: "As Gallery",
        disabled: true,
        breakAfter: true
      },
      "use-stacks": {
        title: "Use Stacks"
      },
      "sort-by": {
        title: "Sort By",
        menu: {}
      },
      "clean-up": {
        title: "Clean Up",
        disabled: true
      },
      "clean-up-by": {
        title: "Clean Up By",
        disabled: true,
        breakAfter: true,
        menu: {}
      },
      "hide-sidebar": {
        title: "Hide Sidebar",
        disabled: true
      },
      "show-preview": {
        title: "Show Preview",
        disabled: true,
        breakAfter: true
      },
      "hide-toolbar": {
        title: "Hide Toolbar",
        disabled: true
      },
      "show-all-tabs": {
        title: "Show All Tabs",
        disabled: true
      },
      "show-tab-bar": {
        title: "Show Tab Bar",
        disabled: true
      },
      "show-path-bar": {
        title: "Show Path Bar",
        disabled: true
      },
      "show-status-bar": {
        title: "Show Status Bar",
        disabled: true,
        breakAfter: true
      },
      "customize-toolbar": {
        title: "Customize Toolbar...",
        disabled: true,
        breakAfter: true
      },
      "show-view-options": {
        title: "Show View Options"
      },
      "show-preview-options": {
        title: "Show Preview Options",
        disabled: true,
        breakAfter: true
      },
      "enter-full-screen": {
        title: "Enter Full Screen",
        disabled: true
      }
    }
  },
  go: {
    title: "Go",
    menu: {
      back: {
        title: "Back",
        disabled: true
      },
      forward: {
        title: "Forward",
        disabled: true
      },
      "enclosing-folder": {
        title: "Enclosing Folder",
        breakAfter: true
      },
      recents: {
        title: "Recents"
      },
      documents: {
        title: "Documents"
      },
      desktop: {
        title: "Desktop"
      },
      downloads: {
        title: "Downloads"
      },
      home: {
        title: "Home"
      },
      computer: {
        title: "Computer"
      },
      airdrop: {
        title: "Airdrop"
      },
      network: {
        title: "Network"
      },
      "icloud-drive": {
        title: "iCloud Drive"
      },
      applications: {
        title: "Applications"
      },
      utilities: {
        title: "Utilities",
        breakAfter: true
      },
      "go-to-folder": {
        title: "Go to Folder"
      },
      "connect-to-server": {
        title: "Connect to Server"
      }
    }
  },
  window: {
    title: "Window",
    menu: {
      minimize: {
        title: "Minimize",
        disabled: true
      },
      zoom: {
        title: "Zoom",
        disabled: true
      },
      "move-window-to-left-side-of-screen": {
        title: "Move Window to Left Side of Screen",
        disabled: true
      },
      "move-window-to-right-side-of-screen": {
        title: "Move Window to Right Side of Screen",
        disabled: true
      },
      "cycle-through-windows": {
        title: "Cycle Through Windows",
        breakAfter: true
      },
      "show-previous-tab": {
        title: "Show Previous Tab",
        disabled: true
      },
      "show-next-tab": {
        title: "Show Next Tab",
        disabled: true
      },
      "move-tab-to-new-window": {
        title: "Move Tab to New Window",
        disabled: true
      },
      "merge-all-windows": {
        title: "Merge all Windows",
        disabled: true,
        breakAfter: true
      },
      "bring-all-to-front": {
        title: "Bring All to Front"
      }
    }
  },
  help: {
    title: "Help",
    menu: {
      "send-finder-feedback": {
        title: "Send Finder Feedback",
        breakAfter: true
      },
      "macos-help": {
        title: "macOS Help"
      }
    }
  }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DeskBar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenubarHeaderList = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "desk-bar" }, _attrs))} data-v-fd803a57><ul class="header-list-ul" data-v-fd803a57><!--[-->`);
      ssrRenderList(unref(headerMenuConfig), (item, index2) => {
        _push(`<li data-v-fd803a57>`);
        _push(ssrRenderComponent(_component_MenubarHeaderList, {
          headlist: { item, index: index2 }
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menubar/DeskBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fd803a57"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    appItem: null,
    AppID: null
  },
  emits: ["itemMoveEmit"],
  setup(__props, { emit: emits }) {
    const isShowText = ref(false);
    ref();
    ref();
    const default_height = 4;
    const scale_width = ref("4rem");
    const scale_height = ref("4rem");
    const scale_position_height = computed(() => Number(scale_height.value.replace("rem", "")) - default_height + "rem");
    const next_width = ref("4rem");
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--0ed3bd74": unref(scale_position_height),
        "--14f8befd": unref(scale_width),
        "--705026d0": unref(scale_height),
        "--0cefd78e": unref(next_width)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dock-item" }, _attrs, _cssVars))} data-v-eca5104a><span class="app-tip" style="${ssrRenderStyle(unref(isShowText) ? null : { display: "none" })}" data-v-eca5104a>${ssrInterpolate(__props.appItem.title)}</span><img${ssrRenderAttr("src", `/img/apps/${__props.AppID}.png`)} alt="" data-v-eca5104a></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dock/Item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-eca5104a"]]);
const createAppHelper = (config) => ({
  /**
   * 配置默认信息
   * width、height默认宽高
   * dockBreakBefore 是否到此有分隔符
   * shouldOpenWindow 是否应该打开新窗口,默认为false
   */
  width: 600,
  height: 500,
  shouldOpenWindow: false,
  resizable: true,
  dockBreakBefore: false,
  expandable: true,
  ...config
});
const vscode = createAppHelper({
  title: "VSCode",
  height: 600,
  width: 800,
  shouldOpenWindow: true,
  externalBrowserFace: () => window.open("https://developer.mozilla.org/", "_blank")
});
const chatgpt = createAppHelper({
  title: "ChatGpt",
  height: 580,
  width: 800,
  shouldOpenWindow: true,
  externalBrowserFace: () => window.open("https://developer.mozilla.org/", "_blank")
});
const github = createAppHelper({
  title: "Github",
  height: 600,
  width: 800,
  shouldOpenWindow: true,
  externalBrowserFace: () => window.open("https://developer.mozilla.org/", "_blank")
});
const qq = createAppHelper({
  title: "QQ",
  height: 600,
  width: 800,
  shouldOpenWindow: true,
  externalBrowserFace: () => window.open("https://developer.mozilla.org/", "_blank")
});
const terminal = createAppHelper({
  title: "Terminal",
  height: 600,
  width: 800,
  shouldOpenWindow: true,
  externalBrowserFace: () => window.open("https://developer.mozilla.org/", "_blank")
});
const appConfig = {
  vscode,
  chatgpt,
  github,
  qq,
  terminal
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Frame",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultWidth = "39rem";
    const bigFrameWidth = ref(defaultWidth);
    const moveChange = (scale_width) => {
      bigFrameWidth.value = Number(defaultWidth.replace("rem", "")) + Number(scale_width.replace("rem", "")) + "rem";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DockItem = __nuxt_component_0$1;
      const _cssVars = { style: {
        "--fc7383b8": unref(bigFrameWidth)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dock-frame" }, _attrs, _cssVars))} data-v-2dfd465b><div class="divider" data-v-2dfd465b></div><!--[-->`);
      ssrRenderList(unref(appConfig), (item, index2) => {
        _push(ssrRenderComponent(_component_DockItem, {
          appItem: item,
          AppID: index2,
          onItemMoveEmit: moveChange
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dock/Frame.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2dfd465b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const xPage = ref(0);
    const yPage = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenubarDeskBar = __nuxt_component_0$2;
      const _component_DockFrame = __nuxt_component_1;
      const _component_DesktopContextMenu = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-0b474a76>`);
      _push(ssrRenderComponent(_component_MenubarDeskBar, null, null, _parent));
      _push(ssrRenderComponent(_component_DockFrame, { class: "dock" }, null, _parent));
      _push(ssrRenderComponent(_component_DesktopContextMenu, {
        XYpos: { xPage: unref(xPage), yPage: unref(yPage) },
        class: "main-context-menu"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/Main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0b474a76"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DesktopMain = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "first" }, _attrs))} data-v-1f1287af>`);
      _push(ssrRenderComponent(_component_DesktopMain, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f1287af"]]);

export { index as default };
//# sourceMappingURL=index-475aa4a6.mjs.map
