class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                width: 100%;
                padding-bottom: 0px;
                display: flex;
                background-color: white;
            }
            
            .search-container>input {
                width: 75%;
                padding: 16px;
                border: 1px solid #ff9e53;
                font-weight: bold;
            }
            
            .search-container>input:focus {
                outline: 0;
                border-bottom: 2px solid #ff9e53;
            }
            
            .search-container>input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container>input::placeholder {
                color: #ff9e53;
                font-weight: normal;
            }
            
            .search-container>button {
                width: 35%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: #ff9e53;
                color: white;
                border: 0;
                text-transform: uppercase;
            }
            
            @media screen and (max-width: 550px) {
                .search-container {
                    flex-direction: column;
                    position: static;
                }
                .search-container>input {
                    width: 100%;
                    margin-bottom: 12px;
                }
                .search-container>button {
                    width: 100%;
                }
            }
        </style>
        <div class="search-container">
            <input placeholder="Search By Keyword" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);