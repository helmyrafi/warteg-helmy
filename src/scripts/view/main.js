import '../component/meal-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const baseUrl = "https://www.themealdb.com/api/json/v1/1";
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    //change nav button to list meal
    const btnchangeListContentAmerican = document.querySelectorAll('#american-meal-list');
    const btnchangeListContentBritish = document.querySelectorAll('#british-meal-list');
    const btnchangeListContentCanadian = document.querySelectorAll('#canadian-meal-list');
    const btnchangeListContentChinese = document.querySelectorAll('#chinese-meal-list');
    const btnchangeListContentDutch = document.querySelectorAll('#dutch-meal-list');
    const btnchangeListContentEgyptian = document.querySelectorAll('#egyptian-meal-list');
    const btnchangeListContentFrench = document.querySelectorAll('#french-meal-list');
    const btnchangeListContentGreek = document.querySelectorAll('#greek-meal-list');
    const btnchangeListContentIndian = document.querySelectorAll('#indian-meal-list');
    const btnchangeListContentIrish = document.querySelectorAll('#irish-meal-list');
    const btnchangeListContentItalian = document.querySelectorAll('#italian-meal-list');
    const btnchangeListContentJamaican = document.querySelectorAll('#jamaican-meal-list');
    const btnchangeListContentJapanese = document.querySelectorAll('#japanese-meal-list');
    const btnchangeListContentKenyan = document.querySelectorAll('#kenyan-meal-list');
    const btnchangeListContentMalaysian = document.querySelectorAll('#malaysian-meal-list');
    const btnchangeListContentMexican = document.querySelectorAll('#mexican-meal-list');
    const btnchangeListContentMoroccan = document.querySelectorAll('#moroccan-meal-list');
    const btnchangeListContentPolish = document.querySelectorAll('#polish-meal-list');
    const btnchangeListContentRussian = document.querySelectorAll('#russian-meal-list');
    const btnchangeListContentSpanish = document.querySelectorAll('#spanish-meal-list');
    const btnchangeListContentThai = document.querySelectorAll('#thai-meal-list');
    const btnchangeListContentTunisia = document.querySelectorAll('#tunisian-meal-list');
    const btnchangeListContentTurkish = document.querySelectorAll('#turkish-meal-list');
    const btnchangeListContentUnknown = document.querySelectorAll('#unknown-meal-list');
    const btnchangeListContentVietnamase = document.querySelectorAll('#vietnamese-meal-list');

    const renderContentDefault = () => {
        fetch(`${baseUrl}/lookup.php?i=52855`)
            .then(response => {
                return response.json();
            }).then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderContent(responseJson.meals);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const renderAllLists = (meals) => {
        const listMealElement = document.querySelector("#meal-area-list");
        listMealElement.innerHTML = "";
        meals.forEach(meal => {
            listMealElement.innerHTML +=
                `<tr>
                    <td scope="row">
                        <a class="btn meal-detail pl-0 text-orange text-justify" meal-id=${meal.idMeal}>
                            ${meal.strMeal}
                        </a>
                    </td>
                </tr>`;
        });

        const btnDetailMeal = document.querySelectorAll('.meal-detail');

        btnDetailMeal.forEach(meal => {
            detailMeal(meal);
        });
    };

    const renderContent = (meals) => {
        const contentMealElement = document.querySelector("meal-list");

        meals.forEach(meal => {
            contentMealElement.innerHTML =
                `<div class="card card-details">
                    <h1>${meal.strMeal}</h1>
                    <p>Meal Category : ${meal.strCategory} <br> From : ${meal.strArea}</p>
                    <div class="gallery">
                        <div class="food-container"> 
                            <img src="${meal.strMealThumb}" class="food" alt="Image Meal">
                        </div>
                    </div>
                    <h2>Ingredient</h2>
                    <ul style="text-transform:capitalize; list-style-type:none;">
                        <div class="row">
                            <div class="col-lg-3">
                                <li><div class="ingredient">${meal.strMeasure1} ${meal.strIngredient1}</div></li>
                                <li><div class="ingredient">${meal.strMeasure2} ${meal.strIngredient2}</div></li>
                                <li><div class="ingredient">${meal.strMeasure3} ${meal.strIngredient3}</div></li>
                                <li><div class="ingredient">${meal.strMeasure4} ${meal.strIngredient4}</div></li>
                                <li><div class="ingredient">${meal.strMeasure5} ${meal.strIngredient5}</div></li>
                            </div>
                            <div class="col-lg-3">
                                <li><div class="ingredient">${meal.strMeasure6} ${meal.strIngredient6}</div></li>
                                <li><div class="ingredient">${meal.strMeasure7} ${meal.strIngredient7}</div></li>
                                <li><div class="ingredient">${meal.strMeasure8} ${meal.strIngredient8}</div></li>
                                <li><div class="ingredient">${meal.strMeasure9} ${meal.strIngredient9}</div></li>
                                <li><div class="ingredient">${meal.strMeasure10} ${meal.strIngredient10}</div></li>
                            </div>
                            <div class="col-lg-3">
                                <li><div class="ingredient">${meal.strMeasure11} ${meal.strIngredient11}</div></li>
                                <li><div class="ingredient">${meal.strMeasure12} ${meal.strIngredient12}</div></li>
                                <li><div class="ingredient">${meal.strMeasure13} ${meal.strIngredient13}</div></li>
                                <li><div class="ingredient">${meal.strMeasure14} ${meal.strIngredient14}</div></li>
                                <li><div class="ingredient">${meal.strMeasure15} ${meal.strIngredient15}</div></li>
                            </div>
                            <div class="col-lg-3">
                                <li><div class="ingredient">${meal.strMeasure16} ${meal.strIngredient16}</div></li>
                                <li><div class="ingredient">${meal.strMeasure17} ${meal.strIngredient17}</div></li>
                                <li><div class="ingredient">${meal.strMeasure18} ${meal.strIngredient18}</div></li>
                                <li><div class="ingredient">${meal.strMeasure19} ${meal.strIngredient19}</div></li>
                                <li><div class="ingredient">${meal.strMeasure20} ${meal.strIngredient20}</div></li>
                            </div>
                        </div>
                    </ul>
                    <h2>Instruction</h2>
                    <p>${meal.strInstructions}</p>
                    <p>Video about this meal: <a class="video-meal" href="${meal.strYoutube}" target="_black">${meal.strYoutube}</a></p>
                    <p>Source website about this meal: <a class="source-meal" href="${meal.strSource}" target="_black">${meal.strSource}</a></p>
                </div>`;
        });
    };

    const renderResult = results => {
        mealListElement.meals = results;
    }

    const getListAmericanDefault = () => {
        fetch(`${baseUrl}/filter.php?a=American`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllLists(responseJson.meals);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const getList = (area) => {
        fetch(`${baseUrl}/filter.php?a=${area}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllLists(responseJson.meals);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const detailMeal = (meal) => {
        const mealContentContainer = document.querySelector('meal-list');
        meal.addEventListener('click', async() => {
            const mealId = meal.getAttribute('meal-id');
            const getProfileMeal = await DataSource.getMeal(mealId);
            let mealContent = "";

            getProfileMeal.forEach(meal => {
                const {
                    strMeal,
                    strCategory,
                    strMealThumb,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9,
                    strIngredient10,
                    strIngredient11,
                    strIngredient12,
                    strIngredient13,
                    strIngredient14,
                    strIngredient15,
                    strIngredient16,
                    strIngredient17,
                    strIngredient18,
                    strIngredient19,
                    strIngredient20,
                    strMeasure1,
                    strMeasure2,
                    strMeasure3,
                    strMeasure4,
                    strMeasure5,
                    strMeasure6,
                    strMeasure7,
                    strMeasure8,
                    strMeasure9,
                    strMeasure10,
                    strMeasure11,
                    strMeasure12,
                    strMeasure13,
                    strMeasure14,
                    strMeasure15,
                    strMeasure16,
                    strMeasure17,
                    strMeasure18,
                    strMeasure19,
                    strMeasure20,
                    strInstructions,
                    strYoutube,
                    strSource
                } = meal;
                mealContent = `
                <div class="card card-details">
                    <h1>${strMeal}</h1>
                    <p>Meal Category : ${strCategory} <br> From : ${meal.strArea}</p>
                    <div class="gallery">
                        <div class="food-container"> 
                            <img src="${strMealThumb}" class="food" alt="Image Meal">
                        </div>
                    </div>
                    <h2>Ingredient</h2>
                    <ul style="text-transform:capitalize; list-style-type:none;">
                        <div class="row">
                            <div class="col-lg-3">
                                <li><div class="ingredient">${strMeasure1} ${strIngredient1}</div></li>
                                <li><div class="ingredient">${strMeasure2} ${strIngredient2}</div></li>
                                <li><div class="ingredient">${strMeasure3} ${strIngredient3}</div></li>
                                <li><div class="ingredient">${strMeasure4} ${strIngredient4}</div></li>
                                <li><div class="ingredient">${strMeasure5} ${strIngredient5}</div></li>
                            </div>
                            <div class="col-lg-3">
                                <li><div class="ingredient">${strMeasure6} ${strIngredient6}</div></li>
                                <li><div class="ingredient">${strMeasure7} ${strIngredient7}</div></li>
                                <li><div class="ingredient">${strMeasure8} ${strIngredient8}</div></li>
                                <li><div class="ingredient">${strMeasure9} ${strIngredient9}</div></li>
                                <li><div class="ingredient">${strMeasure10} ${strIngredient10}</div></li>
                            </div>
                            <div class="col-lg-3">
                                <li><div class="ingredient">${strMeasure11} ${strIngredient11}</div></li>
                                <li><div class="ingredient">${strMeasure12} ${strIngredient12}</div></li>
                                <li><div class="ingredient">${strMeasure13} ${strIngredient13}</div></li>
                                <li><div class="ingredient">${strMeasure14} ${strIngredient14}</div></li>
                                <li><div class="ingredient">${strMeasure15} ${strIngredient15}</div></li>
                            </div>
                            <div class="col-lg-3">
                                <li><div class="ingredient">${strMeasure16} ${strIngredient16}</div></li>
                                <li><div class="ingredient">${strMeasure17} ${strIngredient17}</div></li>
                                <li><div class="ingredient">${strMeasure18} ${strIngredient18}</div></li>
                                <li><div class="ingredient">${strMeasure19} ${strIngredient19}</div></li>
                                <li><div class="ingredient">${strMeasure20} ${strIngredient20}</div></li>
                            </div>
                        </div>
                    </ul>
                    <h2>Instruction</h2>
                    <p>${strInstructions}</p>
                    <p>Video about this meal: <a class="video-meal" href="${strYoutube}" target="_black">${strYoutube}</a></p>
                    <p>Source website about this meal: <a class="source-meal" href="${strSource}" target="_black">${strSource}</a></p>
                </div>`;
            })
            mealContentContainer.innerHTML = mealContent;
            filterSource();
        });
    };

    const filterSource = () => {
        const listIngredient = document.getElementsByClassName("ingredient");
        const videoInstruction = document.getElementsByClassName("video-meal");
        const sourceWebsite = document.getElementsByClassName("source-meal");

        for (let i = 0; i <= 19; i++) {
            if (listIngredient[i].innerHTML === "null null" || listIngredient[i].innerHTML === " " || listIngredient[i].innerHTML === " null") {
                listIngredient[i].style.display = "none";
            } else {
                listIngredient[i].style.display = "block";
            }
        }

        if (videoInstruction[0].getAttribute("href") === "" || videoInstruction[0].getAttribute("href") === null) {
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

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const fallbackResult = (message) => {
        mealListElement.renderError(message);
    };

    const onButtonSearchClicked = () => {
        if (searchElement.value === "") {
            alert("Keyword must be filled")
        } else {
            DataSource.searchMeal(searchElement.value)
                .then(renderResult)
                .catch(fallbackResult)
        }
    };

    const changeListMealAmerican = (meal) => {
        meal.addEventListener('click', async() => {
            const mealAmericanTitle = document.getElementById('list-area');
            await getListAmericanDefault();
            mealAmericanTitle.innerHTML = "List Meal From American";
        })
    }

    const changeListMealBritish = (meal) => {
        meal.addEventListener('click', async() => {
            const mealBritishTitle = document.getElementById('list-area');
            await getList("British");
            mealBritishTitle.innerHTML = "List Meal From British";
        })
    }

    const changeListMealCanadian = (meal) => {
        meal.addEventListener('click', async() => {
            const mealCanadianTitle = document.getElementById('list-area');
            await getList("Canadian");
            mealCanadianTitle.innerHTML = "List Meal From Canadian";
        })
    }

    const changeListMealChinese = (meal) => {
        meal.addEventListener('click', async() => {
            const mealChineseTitle = document.getElementById('list-area');
            await getList("Chinese");
            mealChineseTitle.innerHTML = "List Meal From Chinese";
        })
    }

    const changeListMealDutch = (meal) => {
        meal.addEventListener('click', async() => {
            const mealDutchTitle = document.getElementById('list-area');
            await getList("Dutch");
            mealDutchTitle.innerHTML = "List Meal From Dutch";
        })
    }

    const changeListMealEgyptian = (meal) => {
        meal.addEventListener('click', async() => {
            const mealEgyptianTitle = document.getElementById('list-area');
            await getList("egyptian");
            mealEgyptianTitle.innerHTML = "List Meal From Egyptian";
        })
    }

    const changeListMealFrench = (meal) => {
        meal.addEventListener('click', async() => {
            const mealFrenchTitle = document.getElementById('list-area');
            await getList("French");
            mealFrenchTitle.innerHTML = "List Meal From French";
        })
    }

    const changeListMealGreek = (meal) => {
        meal.addEventListener('click', async() => {
            const mealGreekTitle = document.getElementById('list-area');
            await getList("Greek");
            mealGreekTitle.innerHTML = "List Meal From Greek";
        })
    }

    const changeListMealIndian = (meal) => {
        meal.addEventListener('click', async() => {
            const mealIndianTitle = document.getElementById('list-area');
            await getList("Indian");
            mealIndianTitle.innerHTML = "List Meal From Indian";
        })
    }

    const changeListMealIrish = (meal) => {
        meal.addEventListener('click', async() => {
            const mealIrishTitle = document.getElementById('list-area');
            await getList("Irish");
            mealIrishTitle.innerHTML = "List Meal From Irish";
        })
    }

    const changeListMealItalian = (meal) => {
        meal.addEventListener('click', async() => {
            const mealItalianTitle = document.getElementById('list-area');
            await getList("Italian");
            mealItalianTitle.innerHTML = "List Meal From Italian";
        })
    }

    const changeListMealJamaican = (meal) => {
        meal.addEventListener('click', async() => {
            const mealJamaicanTitle = document.getElementById('list-area');
            await getList("Jamaican");
            mealJamaicanTitle.innerHTML = "List Meal From Jamaican";
        })
    }

    const changeListMealJapanese = (meal) => {
        meal.addEventListener('click', async() => {
            const mealJapaneseTitle = document.getElementById('list-area');
            await getList("Japanese");
            mealJapaneseTitle.innerHTML = "List Meal From Japanese";
        })
    }

    const changeListMealKenyan = (meal) => {
        meal.addEventListener('click', async() => {
            const mealKenyanTitle = document.getElementById('list-area');
            await getList("Kenyan");
            mealKenyanTitle.innerHTML = "List Meal From Kenyan";
        })
    }

    const changeListMealMalaysian = (meal) => {
        meal.addEventListener('click', async() => {
            const mealMalaysianTitle = document.getElementById('list-area');
            await getList("Malaysian");
            mealMalaysianTitle.innerHTML = "List Meal From Malaysian";
        })
    }

    const changeListMealMexican = (meal) => {
        meal.addEventListener('click', async() => {
            const mealMexicanTitle = document.getElementById('list-area');
            await getList("Mexican");
            mealMexicanTitle.innerHTML = "List Meal From Mexican";
        })
    }

    const changeListMealMoroccan = (meal) => {
        meal.addEventListener('click', async() => {
            const mealMoroccanTitle = document.getElementById('list-area');
            await getList("Moroccan");
            mealMoroccanTitle.innerHTML = "List Meal From Moroccan";
        })
    }

    const changeListMealPolish = (meal) => {
        meal.addEventListener('click', async() => {
            const mealPolishTitle = document.getElementById('list-area');
            await getList("Polish");
            mealPolishTitle.innerHTML = "List Meal From Polish";
        })
    }

    const changeListMealRussian = (meal) => {
        meal.addEventListener('click', async() => {
            const mealRussianTitle = document.getElementById('list-area');
            await getList("Russian");
            mealRussianTitle.innerHTML = "List Meal From Russian";
        })
    }

    const changeListMealSpanish = (meal) => {
        meal.addEventListener('click', async() => {
            const mealSpanishTitle = document.getElementById('list-area');
            await getList("Spanish");
            mealSpanishTitle.innerHTML = "List Meal From Spanish";
        })
    }

    const changeListMealThai = (meal) => {
        meal.addEventListener('click', async() => {
            const mealThaiTitle = document.getElementById('list-area');
            await getList("Thai");
            mealThaiTitle.innerHTML = "List Meal From Thai";
        })
    }

    const changeListMealTunisian = (meal) => {
        meal.addEventListener('click', async() => {
            const mealTunisianTitle = document.getElementById('list-area');
            await getList("Tunisian");
            mealTunisianTitle.innerHTML = "List Meal From Tunisian";
        })
    }

    const changeListMealTurkish = (meal) => {
        meal.addEventListener('click', async() => {
            const mealTurkishTitle = document.getElementById('list-area');
            await getList("Turkish");
            mealTurkishTitle.innerHTML = "List Meal From Turkish";
        })
    }

    const changeListMealUnknown = (meal) => {
        meal.addEventListener('click', async() => {
            const mealUnknownTitle = document.getElementById('list-area');
            await getList("Unknown");
            mealUnknownTitle.innerHTML = "List Meal From Unknown";
        })
    }

    const changeListMealVietnamese = (meal) => {
        meal.addEventListener('click', async() => {
            const mealVietnameseTitle = document.getElementById('list-area');
            await getList("Vietnamese");
            mealVietnameseTitle.innerHTML = "List Meal From Vietnamese";
        })
    }

    btnchangeListContentAmerican.forEach(meal => {
        changeListMealAmerican(meal);
    });

    btnchangeListContentBritish.forEach(meal => {
        changeListMealBritish(meal);
    });

    btnchangeListContentCanadian.forEach(meal => {
        changeListMealCanadian(meal);
    });

    btnchangeListContentChinese.forEach(meal => {
        changeListMealChinese(meal);
    });

    btnchangeListContentDutch.forEach(meal => {
        changeListMealDutch(meal);
    });

    btnchangeListContentEgyptian.forEach(meal => {
        changeListMealEgyptian(meal);
    });

    btnchangeListContentFrench.forEach(meal => {
        changeListMealFrench(meal);
    });

    btnchangeListContentGreek.forEach(meal => {
        changeListMealGreek(meal);
    });

    btnchangeListContentIndian.forEach(meal => {
        changeListMealIndian(meal);
    });

    btnchangeListContentIrish.forEach(meal => {
        changeListMealIrish(meal);
    });

    btnchangeListContentItalian.forEach(meal => {
        changeListMealItalian(meal);
    });

    btnchangeListContentJamaican.forEach(meal => {
        changeListMealJamaican(meal);
    });

    btnchangeListContentJapanese.forEach(meal => {
        changeListMealJapanese(meal);
    });

    btnchangeListContentKenyan.forEach(meal => {
        changeListMealKenyan(meal);
    });

    btnchangeListContentMalaysian.forEach(meal => {
        changeListMealMalaysian(meal);
    });

    btnchangeListContentMexican.forEach(meal => {
        changeListMealMexican(meal);
    });

    btnchangeListContentMoroccan.forEach(meal => {
        changeListMealMoroccan(meal);
    });

    btnchangeListContentPolish.forEach(meal => {
        changeListMealPolish(meal);
    });

    btnchangeListContentRussian.forEach(meal => {
        changeListMealRussian(meal);
    });

    btnchangeListContentSpanish.forEach(meal => {
        changeListMealSpanish(meal);
    });

    btnchangeListContentThai.forEach(meal => {
        changeListMealThai(meal);
    });

    btnchangeListContentTunisia.forEach(meal => {
        changeListMealTunisian(meal);
    });

    btnchangeListContentTurkish.forEach(meal => {
        changeListMealTurkish(meal);
    });

    btnchangeListContentUnknown.forEach(meal => {
        changeListMealUnknown(meal);
    });

    btnchangeListContentVietnamase.forEach(meal => {
        changeListMealVietnamese(meal);
    });

    getListAmericanDefault();
    renderContentDefault();

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;