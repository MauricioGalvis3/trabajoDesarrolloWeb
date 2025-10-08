class MiCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: "open"});
    shadow.innerHTML = `
      <style>
        .card { border: 1px solid #463f44ff; padding: 10px; margin: 5px; }
        .card h2 { color: #fa17c1ff; }
        .card p { font-style: italic; }
        .card img {
          max-width: 50%;
          border-radius: 8px;
          margin-bottom: 8px;
          display: block;
        }
      </style>
      <div class="card">
        <img src="${this.getAttribute("img") || ''}" alt="${this.getAttribute("titulo") || 'imagen'}" />
        <h2>${this.getAttribute("titulo")}</h2>
        <p>${this.getAttribute("descripcion")}</p>
      </div>
    `;
  }
}

customElements.define("mi-card", MiCard);
