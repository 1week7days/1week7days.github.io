class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

		`
    }
}

customElements.define('my-header', MyHeader)