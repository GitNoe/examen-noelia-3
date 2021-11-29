const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #D76D26;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 500;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
      color: #44D627;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../html/acerca.html">Acerca de nosotros</a></li>
        <li><a href="../html/servicios.html">Nuestros servicios</a></li>
        <li><a href="../html/contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);