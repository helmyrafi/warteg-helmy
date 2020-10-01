class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card card-details mb-lg-3">
            <h1>${this._meal.strMeal}</h1>
            <p>Meal Category : ${this._meal.strCategory} <br> From : ${this._meal.strArea}</p>
            <div class="gallery">
                <div class="food-container"> 
                    <img src="${this._meal.strMealThumb}" class="food" alt="Image Meal">
                </div>
            </div>
            <h2>Ingredient</h2>
            <ul style="text-transform:capitalize; list-style-type:none;">
                <div class="row">
                    <div class="col-lg-3">
                        <li><div class="ingredient">${this._meal.strMeasure1} ${this._meal.strIngredient1}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure2} ${this._meal.strIngredient2}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure3} ${this._meal.strIngredient3}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure4} ${this._meal.strIngredient4}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure5} ${this._meal.strIngredient5}</div></li>
                    </div>
                    <div class="col-lg-3">
                        <li><div class="ingredient">${this._meal.strMeasure6} ${this._meal.strIngredient6}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure7} ${this._meal.strIngredient7}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure8} ${this._meal.strIngredient8}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure9} ${this._meal.strIngredient9}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure10} ${this._meal.strIngredient10}</div></li>
                    </div>
                    <div class="col-lg-3">
                        <li><div class="ingredient">${this._meal.strMeasure11} ${this._meal.strIngredient11}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure12} ${this._meal.strIngredient12}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure13} ${this._meal.strIngredient13}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure14} ${this._meal.strIngredient14}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure15} ${this._meal.strIngredient15}</div></li>
                    </div>
                    <div class="col-lg-3">
                        <li><div class="ingredient">${this._meal.strMeasure16} ${this._meal.strIngredient16}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure17} ${this._meal.strIngredient17}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure18} ${this._meal.strIngredient18}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure19} ${this._meal.strIngredient19}</div></li>
                        <li><div class="ingredient">${this._meal.strMeasure20} ${this._meal.strIngredient20}</div></li>
                    </div>
                </div>
            </ul>
            <h2>Instruction</h2>
            <p>${this._meal.strInstructions}</p>
            <p>Video about this meal: <a class="video-meal" href="${this._meal.strYoutube}" target="_black">${this._meal.strYoutube}</a></p>
            <p>Source website about this meal: <a class="source-meal" href="${this._meal.strSource}" target="_black">${this._meal.strSource}</a></p>
        </div>`;
        this.filterSource();
    }

    filterSource() {
        const listIngredient = this.getElementsByClassName("ingredient");
        const videoInstruction = this.getElementsByClassName("video-meal");
        const sourceWebsite = this.getElementsByClassName("source-meal");

        let i;
        for (i = 0; i <= 19; i++) {
            if (listIngredient[i].innerHTML == "null null" || listIngredient[i].innerHTML == " " || listIngredient[i].innerHTML == " null") {
                listIngredient[i].style.display = "none";
            } else {
                listIngredient[i].style.display = "block";
            }
        }

        if (videoInstruction[0].innerHTML === "" || videoInstruction[0].innerHTML === "null") {
            videoInstruction[0].removeAttribute("href");
            videoInstruction[0].setAttribute("style", "color:#071C4D!important;");
            videoInstruction[0].innerText = "Nothing";
        }

        if (sourceWebsite[0].getAttribute("href") === "" || sourceWebsite[0].getAttribute("href") === "null") {
            sourceWebsite[0].removeAttribute("href");
            sourceWebsite[0].setAttribute("style", "color:#071C4D!important;");
            sourceWebsite[0].innerText = "Nothing";
        }
    }
}

customElements.define("meal-item", MealItem);