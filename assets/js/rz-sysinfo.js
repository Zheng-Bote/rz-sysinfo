/**
 * @name rz-sysinfo
 * @abstract web component to provide some Sysinfo
 * @description provides some sys info as JSON data
 * @version 0.1.0
 * @author ZHENG Robert
 * @param network_info="y|n"
 * @param sys_info="y|n"
 * @param browser_info="<y|n>"
 */

class SysinfoComponent extends HTMLElement {
  static get observedAttributes() {
    return ["network_info", "sys_info", "browser_info"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  getNetworkInfos() {
    let connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    let obj = {
      effectiveType: connection.effectiveType || null,
      rtt: connection.rtt || null,
      downLink: connection.downlink || null,
      downlinkMax: connection.downlinkMax || null,
      saveData: connection.saveData || null,
      type: connection.type || null,
    };

    return obj;
  }

  getSysInfos() {
    const obj = {
      mem: navigator.deviceMemory,
      cores: window.navigator.hardwareConcurrency,
    };

    return obj;
  }

  getBrowserInfos() {
    const userLang = navigator.language || navigator.userLanguage;
    const obj = {
      userLang: userLang,
    };

    return obj;
  }

  render() {
    let mergedObj = {};
    if (this.getAttribute("network_info") === "y") {
      mergedObj = Object.assign(mergedObj, this.getNetworkInfos());
    }
    if (this.getAttribute("browser_info") === "y") {
      mergedObj = Object.assign(mergedObj, this.getBrowserInfos());
    }
    if (this.getAttribute("sys_info") === "y") {
      mergedObj = Object.assign(mergedObj, this.getSysInfos());
    }

    this.dataset.result = JSON.stringify(mergedObj);
    return;
  }
}

customElements.define("rz-sysinfo", SysinfoComponent);
