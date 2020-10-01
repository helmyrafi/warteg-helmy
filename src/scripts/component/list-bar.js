class ListBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="scroll-list-area area-list-navbar">
            <a class="dropdown-item btn" id="american-meal-list">American</a>
            <a class="dropdown-item btn" id="british-meal-list">British</a>
            <a class="dropdown-item btn" id="canadian-meal-list">Canadian</a>
            <a class="dropdown-item btn" id="chinese-meal-list">Chinese</a>
            <a class="dropdown-item btn" id="dutch-meal-list">Dutch</a>
            <a class="dropdown-item btn" id="egyptian-meal-list">Egyptian</a>
            <a class="dropdown-item btn" id="french-meal-list">French</a>
            <a class="dropdown-item btn" id="greek-meal-list">Greek</a>
            <a class="dropdown-item btn" id="indian-meal-list">Indian</a>
            <a class="dropdown-item btn" id="irish-meal-list">Irish</a>
            <a class="dropdown-item btn" id="italian-meal-list">Italian</a>
            <a class="dropdown-item btn" id="jamaican-meal-list">Jamaican</a>
            <a class="dropdown-item btn" id="japanese-meal-list">Japanese</a>
            <a class="dropdown-item btn" id="kenyan-meal-list">Kenyan</a>
            <a class="dropdown-item btn" id="malaysian-meal-list">Malaysian</a>
            <a class="dropdown-item btn" id="mexican-meal-list">Mexican</a>
            <a class="dropdown-item btn" id="moroccan-meal-list">Moroccan</a>
            <a class="dropdown-item btn" id="polish-meal-list">Polish</a>
            <a class="dropdown-item btn" id="russian-meal-list">Russian</a>
            <a class="dropdown-item btn" id="spanish-meal-list">Spanish</a>
            <a class="dropdown-item btn" id="thai-meal-list">Thai</a>
            <a class="dropdown-item btn" id="tunisian-meal-list">Tunisian</a>
            <a class="dropdown-item btn" id="turkish-meal-list">Turkish</a>
            <a class="dropdown-item btn" id="unknown-meal-list">Unknown</a>
            <a class="dropdown-item btn" id="vietnamese-meal-list">Vietnamese</a>
        </div>`;
    }
}

customElements.define("list-bar", ListBar);