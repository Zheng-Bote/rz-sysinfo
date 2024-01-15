/**
 * @name rz-footer
 * @abstract web component for html footer
 * @description defines a 3-column footer with contact|copyright|legal-notice
 * @version 0.1.0
 * @author ZHENG Robert
 * @param link_left="<link-to-contact-page>"
 * @param link_right="<link-to-legal-notice-page>"
 * @param name="<name-of-copyright-holder>"
 * @param version="<version>"
 * @param created="<YYYY>"
 */

class FooterComponent extends HTMLElement {
  static get observedAttributes() {
    return ["link_left", "link_right", "name", "version", "created"];
  }

  constructor() {
    super();

    this._default_link_left = "/contact.html";
    this._default_link_right = "/imprint.html";
    this._default_name = "ZHENG Robert";
    this._default_version = "v0.2.0";
    this._default_created = "2016";
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  getLinks() {
    return {
      link_left: this.getAttribute("link_left") || `${this._default_link_left}`,
      link_right:
        this.getAttribute("link_right") || `${this._default_link_right}`,
    };
  }

  getCopyright() {
    const NAME = this.getAttribute("name") || `${this._default_name}`;
    const VERSION = this.getAttribute("version") || `${this._default_version}`;
    const CREATED = this.getAttribute("created") || `${this._default_created}`;

    const DATE = new Date();
    const FULLYEAR = DATE.getFullYear();
    let years = "";

    CREATED == FULLYEAR
      ? (years = CREATED)
      : (years = CREATED + "-" + FULLYEAR);

    return `&copy; ${NAME} ${years}, ${VERSION}`;
  }

  render() {
    const LINKS = this.getLinks();
    this.innerHTML = `
      <footer class="footer center" id="footer">
      <div class="footer_item" id="footer_item_left">
        <a href="${LINKS.link_left}" alt="contact" title="contact">
          <img
            src="../assets/img/mail-open-outline.svg"
            width="15px"
            alt="Contact"
            title="Contact"
          />
          &nbsp;Contact
        </a>
      </div>
      <div class="copyright" id="copyright">${this.getCopyright()}</div>
      <div class="footer_item" id="footer_item_right">
        <a href="${
          LINKS.link_right
        }" alt="Info/Legal Notice" title="Info/Legal Notice">
          <img
            src="../assets/img/information-outline.svg"
            width="15px"
            alt="Info/Legal Notice"
            title="Info/Legal Notice"
            name="information"
            id="information"
          />
          Info - Legal Notice
        </a>
      </div>
    </footer>
    `;
  }
}

customElements.define("rz-footer", FooterComponent);
