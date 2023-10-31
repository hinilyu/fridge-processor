import { Result } from "src/app/models/result";

let dummy: Result = JSON.parse(`{
    "from": 1,
    "to": 20,
    "count": 6437,
    "_links": {
        "next": {
            "href": "https://api.edamam.com/api/recipes/v2?q=apple%2Calmond&app_key=a0f30334824854c4ef2db783f7a86180&_cont=CHcVQBtNNQphDmgVQntAEX4BYVVtBQUORWxHBmYTYV1wBgMFUXlSVmQTN1B7BAEEEmdGBGobYlYmVVEPQGRDCmcVNlB0BQsVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=e3d8c473",
            "title": "Next page"
        }
    },
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8ccfa9dcd7f3f2c2803a6a5b2bebe7e0",
                "label": "Apple-Almond Turnover",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/db8/db898fc872d10ac45bec1c322ab5acd2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=90f61d68df63d05f7fe9f17306dcdb192d9bac094f8aa717aa74bb4459e9a78b",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/db8/db898fc872d10ac45bec1c322ab5acd2-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10bd443196631a8547528ef07ba64f59f035843ba3a2b483602240e439beadc4",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/db8/db898fc872d10ac45bec1c322ab5acd2-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=77e57e0bc3cb5df2f2b7e1687650dbeb28801071b24ad423dbebd56eceb457bc",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/db8/db898fc872d10ac45bec1c322ab5acd2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=90f61d68df63d05f7fe9f17306dcdb192d9bac094f8aa717aa74bb4459e9a78b",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/apple-almond-turnover",
                "shareAs": "http://www.edamam.com/recipe/apple-almond-turnover-8ccfa9dcd7f3f2c2803a6a5b2bebe7e0/apple%2Calmond",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 large Pink Lady apples, peeled, halved, cored",
                    "1/2 cup apple cider vinegar",
                    "1/4 cup (packed) light brown sugar",
                    "1/2 vanilla bean, halved lengthwise",
                    "1 (14-ounce) package frozen puff pastry (such as Dufour), thawed",
                    "All-purpose flour (for dusting)",
                    "3 1/2 ounces almond paste",
                    "4 tablespoons unsalted butter, cut into small pieces",
                    "1 large egg, beaten to blend",
                    "2 tablespoons granulated sugar",
                    "Vanilla ice cream (for serving; optional)"
                ],
                "ingredients": [
                    {
                        "text": "3 large Pink Lady apples, peeled, halved, cored",
                        "quantity": 3.0,
                        "measure": "<unit>",
                        "food": "apples",
                        "weight": 669.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "1/2 cup apple cider vinegar",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "apple cider vinegar",
                        "weight": 119.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                        "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                    },
                    {
                        "text": "1/4 cup (packed) light brown sugar",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "light brown sugar",
                        "weight": 55.0,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1/2 vanilla bean, halved lengthwise",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "vanilla bean",
                        "weight": 2.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "1 (14-ounce) package frozen puff pastry (such as Dufour), thawed",
                        "quantity": 14.0,
                        "measure": "ounce",
                        "food": "puff pastry",
                        "weight": 396.89332375000004,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
                        "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
                    },
                    {
                        "text": "All-purpose flour (for dusting)",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "All-purpose flour",
                        "weight": 13.859249892183696,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "3 1/2 ounces almond paste",
                        "quantity": 3.5,
                        "measure": "ounce",
                        "food": "almond paste",
                        "weight": 99.22333093750001,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bxecircbdyigilbaxjpllb1sjegx",
                        "image": "https://www.edamam.com/food-img/e03/e03f6b7a81c44a9a829653a01c00ea83.jpg"
                    },
                    {
                        "text": "4 tablespoons unsalted butter, cut into small pieces",
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 56.8,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1 large egg, beaten to blend",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "2 tablespoons granulated sugar",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "granulated sugar",
                        "weight": 24.9999999995774,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "Vanilla ice cream (for serving; optional)",
                        "quantity": 1.0,
                        "measure": "serving",
                        "food": "Vanilla ice cream",
                        "weight": 66.0,
                        "foodCategory": "frozen treats",
                        "foodId": "food_bsg87una16tr8waipd66na9drm1k",
                        "image": "https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg"
                    }
                ],
                "calories": 3993.0737391621633,
                "totalCO2Emissions": 3355.6368896580007,
                "co2EmissionsClass": "D",
                "totalWeight": 1553.775904579261,
                "totalTime": 0.0,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3993.0737391621633,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 238.0556396673809,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 75.80954185048914,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.019,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 120.72969504615621,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 28.54441009399222,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 425.6756788666887,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 398.06735937834975,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 27.60831948833896,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 201.7733563694121,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 92.29199999957825,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 50.23051515701992,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 337.16,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1156.0596609197144,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 433.2243490713234,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 256.5932969950304,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1662.8825840158784,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 14.784671577997113,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.1577246629952445,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 776.5321779523083,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 566.462,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 31.269223330937503,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.9336986715473923,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.1897343907610574,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 19.594949643326345,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.5410400670775609,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 654.0351702206295,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 177.17234614060828,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 279.32390527146293,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.7989600000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.1320000000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 18.815209899564522,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 82.98340287342656,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 823.7492729181073,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 199.65368695810815,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 366.23944564212445,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 379.0477092524457,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 141.8918929555629,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 110.43327795335584,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 100.46103031403986,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 112.38666666666667,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 48.169152538321434,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 43.32243490713234,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 61.093642141673904,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 35.380480510976135,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 82.13706432220619,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 46.8884060272295,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 110.93316827890118,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 62.94022222222222,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 34.74358147881945,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 161.1415559622827,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 168.44110698161978,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 122.46843527078966,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 41.61846669827391,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 163.50879255515738,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 33.290000000000006,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 7.546666666666668,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 125.43473266376348,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 69.15283572785546,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 238.0556396673809,
                        "hasRDI": true,
                        "daily": 366.23944564212445,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 75.80954185048914,
                                "hasRDI": true,
                                "daily": 379.0477092524457,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.019,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 120.72969504615621,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 28.54441009399222,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 425.6756788666887,
                        "hasRDI": true,
                        "daily": 141.8918929555629,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 398.06735937834975,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 27.60831948833896,
                                "hasRDI": true,
                                "daily": 110.43327795335584,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 201.7733563694121,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 92.29199999957825,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 50.23051515701992,
                        "hasRDI": true,
                        "daily": 100.46103031403986,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 337.16,
                        "hasRDI": true,
                        "daily": 112.38666666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1156.0596609197144,
                        "hasRDI": true,
                        "daily": 48.169152538321434,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 433.2243490713234,
                        "hasRDI": true,
                        "daily": 43.32243490713234,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 256.5932969950304,
                        "hasRDI": true,
                        "daily": 61.093642141673904,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1662.8825840158784,
                        "hasRDI": true,
                        "daily": 35.380480510976135,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 14.784671577997113,
                        "hasRDI": true,
                        "daily": 82.13706432220619,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.1577246629952445,
                        "hasRDI": true,
                        "daily": 46.8884060272295,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 776.5321779523083,
                        "hasRDI": true,
                        "daily": 110.93316827890118,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 566.462,
                        "hasRDI": true,
                        "daily": 62.94022222222222,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 31.269223330937503,
                        "hasRDI": true,
                        "daily": 34.74358147881945,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.9336986715473923,
                        "hasRDI": true,
                        "daily": 161.1415559622827,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.1897343907610574,
                        "hasRDI": true,
                        "daily": 168.44110698161978,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 19.594949643326345,
                        "hasRDI": true,
                        "daily": 122.46843527078966,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.5410400670775609,
                        "hasRDI": true,
                        "daily": 41.61846669827391,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 654.0351702206295,
                        "hasRDI": true,
                        "daily": 163.50879255515738,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 177.17234614060828,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 279.32390527146293,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.7989600000000001,
                        "hasRDI": true,
                        "daily": 33.290000000000006,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.1320000000000001,
                        "hasRDI": true,
                        "daily": 7.546666666666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 18.815209899564522,
                        "hasRDI": true,
                        "daily": 125.43473266376348,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 82.98340287342656,
                        "hasRDI": true,
                        "daily": 69.15283572785546,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 823.7492729181073,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/8ccfa9dcd7f3f2c2803a6a5b2bebe7e0?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b40c4b9db264bc318875578344728f65",
                "label": "Eggless Apple Almond Bread",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2d4/2d4c25c51b20706e3873e3433d223eae.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b0d11dc0bcb9851664ae53e88ed008f9bb89f18295953df2d188460ca778888",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2d4/2d4c25c51b20706e3873e3433d223eae-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3992c06846a4b247fed0e45eda2a12db6af7c4a9570ec5659b6dba540c0d4e93",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2d4/2d4c25c51b20706e3873e3433d223eae-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6967db159f475024506cff93255849632dfd3c64ac15ecb4e5d315d1edd31a71",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2d4/2d4c25c51b20706e3873e3433d223eae.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b0d11dc0bcb9851664ae53e88ed008f9bb89f18295953df2d188460ca778888",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2d4/2d4c25c51b20706e3873e3433d223eae-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b138f80ccdf4badec407db633e0790f5e99a7936c2995f24a3f8102bcc432f47",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Honest Cooking",
                "url": "http://honestcooking.com/eggless-apple-almond-bread/",
                "shareAs": "http://www.edamam.com/recipe/eggless-apple-almond-bread-b40c4b9db264bc318875578344728f65/apple%2Calmond",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "¼ cup almonds, coarsely crushed",
                    "2 tbsp slivered almonds, for topping",
                    "4-5 tbsp unsalted butter",
                    "3 tbsp cane sugar or raw sugar",
                    "⅛ tsp salt",
                    "⅔ cup whole wheat flour",
                    "2 tbsp unbleached all-purpose flour",
                    "¼ cup stone ground cornmeal",
                    "1 tsp aluminium free baking powder",
                    "1-1/2 tsp baking soda",
                    "1-1/2 tsp ground cinnamon",
                    "⅓ cup unsulphured molasses",
                    "1½ tsp pure vanilla extract",
                    "⅓ cup low-fat buttermilk",
                    "½ cup (4 oz) all natural unsweetened applesauce",
                    "1 cup or 1 fuji or gala apple, peeled, cored and finely chopped"
                ],
                "ingredients": [
                    {
                        "text": "¼ cup almonds, coarsely crushed",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 35.75,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "2 tbsp slivered almonds, for topping",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "almonds",
                        "weight": 17.87499999969778,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "4-5 tbsp unsalted butter",
                        "quantity": 4.5,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 63.9,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3 tbsp cane sugar or raw sugar",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "cane sugar",
                        "weight": 27.187499999540343,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "⅛ tsp salt",
                        "quantity": 0.125,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 0.75,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "⅔ cup whole wheat flour",
                        "quantity": 0.6666666666666666,
                        "measure": "cup",
                        "food": "whole wheat flour",
                        "weight": 80.0,
                        "foodCategory": "grains",
                        "foodId": "food_azuyr92bee8mu1aodnko9agg46su",
                        "image": "https://www.edamam.com/food-img/f46/f46a64137365c10237522be5980f769c.jpg"
                    },
                    {
                        "text": "2 tbsp unbleached all-purpose flour",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "all-purpose flour",
                        "weight": 15.62499999973582,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "¼ cup stone ground cornmeal",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "stone ground cornmeal",
                        "weight": 30.5,
                        "foodCategory": "grains",
                        "foodId": "food_b0ii7g0aohxqpjbhdcbp9b4lwx97",
                        "image": "https://www.edamam.com/food-img/345/3457a4b46314e3220eda16460f2b8097.jpg"
                    },
                    {
                        "text": "1 tsp aluminium free baking powder",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "baking powder",
                        "weight": 4.6,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
                        "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
                    },
                    {
                        "text": "1-1/2 tsp baking soda",
                        "quantity": 1.5,
                        "measure": "teaspoon",
                        "food": "baking soda",
                        "weight": 6.8999999999999995,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_asa4cjoa3lmt8ibwdg0cpblheo69",
                        "image": "https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg"
                    },
                    {
                        "text": "1-1/2 tsp ground cinnamon",
                        "quantity": 1.5,
                        "measure": "teaspoon",
                        "food": "ground cinnamon",
                        "weight": 3.9000000000000004,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "⅓ cup unsulphured molasses",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "molasses",
                        "weight": 112.33333333333333,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b61rwdgbx1ch0yabdfbn5b18umam",
                        "image": "https://www.edamam.com/food-img/800/800f6133e1db5bef8332290e0b23b2cc.jpg"
                    },
                    {
                        "text": "1½ tsp pure vanilla extract",
                        "quantity": 1.5,
                        "measure": "teaspoon",
                        "food": "vanilla extract",
                        "weight": 6.300000000000001,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "⅓ cup low-fat buttermilk",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "buttermilk",
                        "weight": 81.66666666666666,
                        "foodCategory": "Milk",
                        "foodId": "food_axwuni1bjd81cybjn45rwb25o4jb",
                        "image": "https://www.edamam.com/food-img/768/768bea3c8421a7ae987bc00c4a2b82e8.jpg"
                    },
                    {
                        "text": "½ cup (4 oz) all natural unsweetened applesauce",
                        "quantity": 4.0,
                        "measure": "ounce",
                        "food": "unsweetened applesauce",
                        "weight": 113.3980925,
                        "foodCategory": "canned fruit",
                        "foodId": "food_a42ufi8ben9zhqbzqv66lab1lwvd",
                        "image": "https://www.edamam.com/food-img/c59/c59e749347516e4aa0aaa3ea25925426.jpg"
                    },
                    {
                        "text": "1 cup or 1 fuji or gala apple, peeled, cored and finely chopped",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "gala apple",
                        "weight": 109.0,
                        "foodCategory": "fruit",
                        "foodId": "food_bfh0qoxboaspbtbj3gqnkafdf2r9",
                        "image": "https://www.edamam.com/food-img/256/2568844fd3c89a9fa6ef0a07757ed572.jpg"
                    }
                ],
                "calories": 1809.5627821788755,
                "totalCO2Emissions": 2815.7884042279843,
                "co2EmissionsClass": "D",
                "totalWeight": 708.9355924989738,
                "totalTime": 65.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "breakfast"
                ],
                "dishType": [
                    "bread"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 1809.5627821788755,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 83.11235475901329,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 35.41187059738811,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.008043749999954667,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 32.68310571175427,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 10.1218926495784,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 251.88627028511556,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 228.14029126766047,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 23.745979017455095,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 140.4611342186236,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 110.28487499955413,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 29.922683423824836,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 140.65166666666667,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2448.050211849863,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 928.9622153654326,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 594.8568177740844,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2830.601296780224,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 13.438971029389933,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.31974734440525,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1234.7003212899094,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 454.67331425833333,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 25.005262276666667,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.8781953373806402,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.104770261078583,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 9.342710314339634,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.3839526099742814,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 121.79690110742699,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 84.12940110811913,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 24.06249999959316,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.28829666666666665,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 16.451467781255356,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 9.413832129165876,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 322.28863425161575,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 90.47813910894378,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 127.86516116771276,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 177.05935298694055,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 83.96209009503852,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 94.9839160698204,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 59.84536684764967,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 46.88388888888889,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 102.00209216041097,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 92.89622153654327,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 141.63257566049631,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 60.22555950596222,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 74.66095016327739,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 48.361339494593174,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 176.38576018427278,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 50.51925713981482,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 27.783624751851853,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 73.18294478172001,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 84.98232777527562,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 58.39193946462271,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 106.4578930749447,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 30.449225276856748,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 12.01236111111111,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 109.67645187503571,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.84486010763823,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 83.11235475901329,
                        "hasRDI": true,
                        "daily": 127.86516116771276,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 35.41187059738811,
                                "hasRDI": true,
                                "daily": 177.05935298694055,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.008043749999954667,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 32.68310571175427,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 10.1218926495784,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 251.88627028511556,
                        "hasRDI": true,
                        "daily": 83.96209009503852,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 228.14029126766047,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 23.745979017455095,
                                "hasRDI": true,
                                "daily": 94.9839160698204,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 140.4611342186236,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 110.28487499955413,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 29.922683423824836,
                        "hasRDI": true,
                        "daily": 59.84536684764967,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 140.65166666666667,
                        "hasRDI": true,
                        "daily": 46.88388888888889,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2448.050211849863,
                        "hasRDI": true,
                        "daily": 102.00209216041097,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 928.9622153654326,
                        "hasRDI": true,
                        "daily": 92.89622153654327,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 594.8568177740844,
                        "hasRDI": true,
                        "daily": 141.63257566049631,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2830.601296780224,
                        "hasRDI": true,
                        "daily": 60.22555950596222,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 13.438971029389933,
                        "hasRDI": true,
                        "daily": 74.66095016327739,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 5.31974734440525,
                        "hasRDI": true,
                        "daily": 48.361339494593174,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1234.7003212899094,
                        "hasRDI": true,
                        "daily": 176.38576018427278,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 454.67331425833333,
                        "hasRDI": true,
                        "daily": 50.51925713981482,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 25.005262276666667,
                        "hasRDI": true,
                        "daily": 27.783624751851853,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.8781953373806402,
                        "hasRDI": true,
                        "daily": 73.18294478172001,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.104770261078583,
                        "hasRDI": true,
                        "daily": 84.98232777527562,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 9.342710314339634,
                        "hasRDI": true,
                        "daily": 58.39193946462271,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.3839526099742814,
                        "hasRDI": true,
                        "daily": 106.4578930749447,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 121.79690110742699,
                        "hasRDI": true,
                        "daily": 30.449225276856748,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 84.12940110811913,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 24.06249999959316,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.28829666666666665,
                        "hasRDI": true,
                        "daily": 12.01236111111111,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 16.451467781255356,
                        "hasRDI": true,
                        "daily": 109.67645187503571,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 9.413832129165876,
                        "hasRDI": true,
                        "daily": 7.84486010763823,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 322.28863425161575,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/b40c4b9db264bc318875578344728f65?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_95589f37e0b847f5a6ad389dc473220d",
                "label": "Apple Almond Tart Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1b0/1b0d04a6b08ba1b807bff072bb8f2961.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d580dd37d4f20e82d769091fb58512b88cd7706d6696dad1ce61bb84d36229ac",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1b0/1b0d04a6b08ba1b807bff072bb8f2961-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e04d8bd5ee3811ab867b57f6d07262e5a8cf72d29d11aa75ac44955489028cb3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1b0/1b0d04a6b08ba1b807bff072bb8f2961-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1aacae87c140fdcd93be92e1e55525faae1a0c6552850123568e7fb6cfe4ac31",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1b0/1b0d04a6b08ba1b807bff072bb8f2961.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d580dd37d4f20e82d769091fb58512b88cd7706d6696dad1ce61bb84d36229ac",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1b0/1b0d04a6b08ba1b807bff072bb8f2961-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1a09797ed687e929d9d99594441d3febcdd05aec0637fffb5ab6322d809ad603",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food Republic",
                "url": "http://www.foodrepublic.com/2013/09/25/apple-almond-tart-recipe",
                "shareAs": "http://www.edamam.com/recipe/apple-almond-tart-recipe-95589f37e0b847f5a6ad389dc473220d/apple%2Calmond",
                "yield": 6.0,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/2 cup all-purpose flour",
                    "1/2 cup whole wheat pastry flour",
                    "1/2 teaspoon salt",
                    "1/2 teaspoon sugar",
                    "1/2 cup (1 stick) unsalted butter, chilled and cut into small cubes",
                    "1/4 cup ice water, plus more if needed",
                    "1/2 cup (1 stick) unsalted butter, at room temperature",
                    "1/2 cup granulated sugar",
                    "1 large egg",
                    "1 egg yolk",
                    "1 teaspoon vanilla extract",
                    "1 cup whole almonds, toasted, cooled and finely ground",
                    "2 teaspoons all-purpose flour",
                    "1/4 teaspoon salt",
                    "2 medium apples, cored and thinly sliced (about 1/4 inch)",
                    "1 tablespoon Demerara Sugar"
                ],
                "ingredients": [
                    {
                        "text": "1/2 cup all-purpose flour",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "all-purpose flour",
                        "weight": 62.5,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "1/2 cup whole wheat pastry flour",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "whole wheat pastry flour",
                        "weight": 59.5,
                        "foodCategory": "grains",
                        "foodId": "food_a6p6ryqbu49p02blw4ezxah1kb9p",
                        "image": "https://www.edamam.com/food-img/137/1372e80ae3afad422f17e1f6c612fec4.jpg"
                    },
                    {
                        "text": "1/2 teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1/2 teaspoon sugar",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "sugar",
                        "weight": 2.1,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/2 cup (1 stick) unsalted butter, chilled and cut into small cubes",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "unsalted butter",
                        "weight": 113.5,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1/4 cup ice water, plus more if needed",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "ice water",
                        "weight": 59.147059125,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1/2 cup (1 stick) unsalted butter, at room temperature",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "unsalted butter",
                        "weight": 113.5,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1/2 cup granulated sugar",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "granulated sugar",
                        "weight": 100.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 large egg",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 50.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 egg yolk",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg yolk",
                        "weight": 13.466666666666667,
                        "foodCategory": "Eggs",
                        "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                        "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
                    },
                    {
                        "text": "1 teaspoon vanilla extract",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "vanilla extract",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "1 cup whole almonds, toasted, cooled and finely ground",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 143.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "2 teaspoons all-purpose flour",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "all-purpose flour",
                        "weight": 5.208333333597506,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "1/4 teaspoon salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "2 medium apples, cored and thinly sliced (about 1/4 inch)",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "apples",
                        "weight": 364.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "1 tablespoon Demerara Sugar",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "Demerara Sugar",
                        "weight": 9.06249999984678,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    }
                ],
                "calories": 3645.3615000003797,
                "totalCO2Emissions": 6688.911416666592,
                "co2EmissionsClass": "E",
                "totalWeight": 1103.6845591251108,
                "totalTime": 0.0,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3645.36150000038,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 266.22277833333595,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 123.38320458333376,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.04045,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 101.96479125000022,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 27.10389341666776,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 289.60812416671797,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 253.37449916671085,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 36.23362500000714,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 156.47845083318543,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 110.68642499985137,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 54.33840333336035,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 819.49,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1862.945549031629,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 548.0125367736625,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 501.98026225796093,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1903.377708333412,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.514540416677836,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 8.02935512258097,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1199.7945000002792,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1694.908,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 16.744,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.1187687500020738,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.5713521666679715,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 12.849772416682082,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.6323376250000533,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 337.59320833410055,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 160.19737500007506,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 104.27083333374014,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.0935000000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.7272000000000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 43.87311916666727,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 25.475891666667458,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 476.6906278992377,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 182.26807500001902,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 409.57350512820915,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 616.9160229166689,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 96.53604138890599,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 144.93450000002855,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 108.6768066667207,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 273.16333333333336,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 77.6227312096512,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 54.80125367736625,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 119.51911006141927,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 40.49739804964707,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 69.52522453709908,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 72.99413747800882,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 171.39921428575417,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 188.3231111111111,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 18.604444444444447,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 93.23072916683948,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 197.79632051292086,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 80.31107760426302,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 48.64135576923487,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 84.39830208352514,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 45.56250000000001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 11.514666666666669,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 292.4874611111152,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 21.22990972222288,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 266.22277833333595,
                        "hasRDI": true,
                        "daily": 409.57350512820915,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 123.38320458333376,
                                "hasRDI": true,
                                "daily": 616.9160229166689,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.04045,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 101.96479125000022,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 27.10389341666776,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 289.60812416671797,
                        "hasRDI": true,
                        "daily": 96.53604138890599,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 253.37449916671085,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 36.23362500000714,
                                "hasRDI": true,
                                "daily": 144.93450000002855,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 156.47845083318543,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 110.68642499985137,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 54.33840333336035,
                        "hasRDI": true,
                        "daily": 108.6768066667207,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 819.49,
                        "hasRDI": true,
                        "daily": 273.16333333333336,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1862.945549031629,
                        "hasRDI": true,
                        "daily": 77.6227312096512,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 548.0125367736625,
                        "hasRDI": true,
                        "daily": 54.80125367736625,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 501.98026225796093,
                        "hasRDI": true,
                        "daily": 119.51911006141927,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1903.377708333412,
                        "hasRDI": true,
                        "daily": 40.49739804964707,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 12.514540416677836,
                        "hasRDI": true,
                        "daily": 69.52522453709908,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 8.02935512258097,
                        "hasRDI": true,
                        "daily": 72.99413747800882,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1199.7945000002792,
                        "hasRDI": true,
                        "daily": 171.39921428575417,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1694.908,
                        "hasRDI": true,
                        "daily": 188.3231111111111,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 16.744,
                        "hasRDI": true,
                        "daily": 18.604444444444447,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.1187687500020738,
                        "hasRDI": true,
                        "daily": 93.23072916683948,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.5713521666679715,
                        "hasRDI": true,
                        "daily": 197.79632051292086,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 12.849772416682082,
                        "hasRDI": true,
                        "daily": 80.31107760426302,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.6323376250000533,
                        "hasRDI": true,
                        "daily": 48.64135576923487,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 337.59320833410055,
                        "hasRDI": true,
                        "daily": 84.39830208352514,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 160.19737500007506,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 104.27083333374014,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.0935000000000001,
                        "hasRDI": true,
                        "daily": 45.56250000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.7272000000000003,
                        "hasRDI": true,
                        "daily": 11.514666666666669,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 43.87311916666727,
                        "hasRDI": true,
                        "daily": 292.4874611111152,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 25.475891666667458,
                        "hasRDI": true,
                        "daily": 21.22990972222288,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 476.6906278992377,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/95589f37e0b847f5a6ad389dc473220d?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a88fa83afcb7bb32e92072d62dd71796",
                "label": "Apple-Almond Tart",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2e4/2e48508c7c6ce4df9b26f62e07f2b45b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d927dc658ce54923ba59138c5f1715838aee11b3777f93d75a1808956dfc39b6",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e4/2e48508c7c6ce4df9b26f62e07f2b45b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c7c1e3c7b88b61e01db788ee35b7a98cd72cd1ae811c74e0af595a0b91dbdde3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e4/2e48508c7c6ce4df9b26f62e07f2b45b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d71219f07fabfe6b230daaf6877f682d245cbae568a2d8d4f42e9162cab13880",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e4/2e48508c7c6ce4df9b26f62e07f2b45b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d927dc658ce54923ba59138c5f1715838aee11b3777f93d75a1808956dfc39b6",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/2e4/2e48508c7c6ce4df9b26f62e07f2b45b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ee380e108488045cbaa69ccc4f2718b1ed90445f504de0675fca3a51bf6b1e6c",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "San Francisco Gate",
                "url": "http://www.sfgate.com/food/recipes/detail.html?rid=17548&sorig=qs",
                "shareAs": "http://www.edamam.com/recipe/apple-almond-tart-a88fa83afcb7bb32e92072d62dd71796/apple%2Calmond",
                "yield": 14.0,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Soy",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "The tart crust:",
                    "1 1/2 cups all-purpose flour",
                    "1/2 teaspoon kosher salt",
                    "6 tablespoons cold butter, cut into small pieces",
                    "4 tablespoons cold shortening, cut into small pieces",
                    "3 to 4 tablespoons ice water",
                    "The frangipane filling:",
                    "6 ounces almond paste",
                    "3 tablespoons butter",
                    "1/4 + 2 tablespoons sugar",
                    "1/4 teaspoon kosher salt",
                    "2 large eggs",
                    "3 tablespoons flour",
                    "The apple topping:",
                    "3 large Pink Lady apples",
                    "1/4 cup + 2 tablespoons apricot jam",
                    "1 tablespoon amaretto",
                    "1 tablespoon good-quality honey",
                    "1/4 cup toasted, sliced almonds (optional)"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 cups all-purpose flour",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "all-purpose flour",
                        "weight": 187.5,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "1/2 teaspoon kosher salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "kosher salt",
                        "weight": 2.4270833334564377,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "6 tablespoons cold butter, cut into small pieces",
                        "quantity": 6.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 85.19999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "4 tablespoons cold shortening, cut into small pieces",
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "shortening",
                        "weight": 51.2,
                        "foodCategory": "Oils",
                        "foodId": "food_aat37lwavnxkoobjwwu8fad9n917",
                        "image": null
                    },
                    {
                        "text": "3 to 4 tablespoons ice water",
                        "quantity": 3.5,
                        "measure": "tablespoon",
                        "food": "ice water",
                        "weight": 51.7536767335,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "6 ounces almond paste",
                        "quantity": 6.0,
                        "measure": "ounce",
                        "food": "almond paste",
                        "weight": 170.09713875,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bxecircbdyigilbaxjpllb1sjegx",
                        "image": "https://www.edamam.com/food-img/e03/e03f6b7a81c44a9a829653a01c00ea83.jpg"
                    },
                    {
                        "text": "3 tablespoons butter",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 42.599999999999994,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1/4 + 2 tablespoons sugar",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 24.9999999995774,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/4 teaspoon kosher salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "kosher salt",
                        "weight": 1.2135416667282188,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "3 tablespoons flour",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "flour",
                        "weight": 23.437499999603745,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "3 large Pink Lady apples",
                        "quantity": 3.0,
                        "measure": "<unit>",
                        "food": "apples",
                        "weight": 669.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "1/4 cup + 2 tablespoons apricot jam",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "apricot jam",
                        "weight": 80.00000000135256,
                        "foodCategory": "sugars",
                        "foodId": "food_ag744iyaqppxqha4dhdgpbubbryy",
                        "image": "https://www.edamam.com/food-img/400/40071c4b8e57e31562145f69b4e75635.jpg"
                    },
                    {
                        "text": "1/4 cup + 2 tablespoons apricot jam",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "apricot jam",
                        "weight": 40.0,
                        "foodCategory": "sugars",
                        "foodId": "food_ag744iyaqppxqha4dhdgpbubbryy",
                        "image": "https://www.edamam.com/food-img/400/40071c4b8e57e31562145f69b4e75635.jpg"
                    },
                    {
                        "text": "1 tablespoon amaretto",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "amaretto",
                        "weight": 17.399999999705816,
                        "foodCategory": "liquors and cocktails",
                        "foodId": "food_atgir64bcrvkybaerhcfub8aft3b",
                        "image": "https://www.edamam.com/food-img/b12/b12fec6be2bd44b88ceb4817013183a5.jpg"
                    },
                    {
                        "text": "1 tablespoon good-quality honey",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "honey",
                        "weight": 21.0,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "1/4 cup toasted, sliced almonds (optional)",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 35.75,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    }
                ],
                "calories": 4118.24589547429,
                "totalCO2Emissions": 5425.384772598838,
                "co2EmissionsClass": "D",
                "totalWeight": 1603.5789404839245,
                "totalTime": 0.0,
                "cuisineType": [
                    "british"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4118.24589547429,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 232.80864493374793,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 86.84577187412421,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 6.801762500000001,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 96.80825859999958,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 35.67151535024806,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 468.27922482255144,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 433.4924996625581,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 34.78672515999337,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 233.59630047756946,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 94.27100000016526,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 60.960404987468365,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 646.77,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1649.795639628992,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 575.8095639522533,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 418.35947339229494,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2015.6888906755357,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 16.34745203250221,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 6.9167561461714415,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1146.366617974595,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1066.222000000135,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 41.609097138869025,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.883823153774513,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.762987154425023,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 15.896130120245115,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.6807009699500962,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 764.1436612874105,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 272.8936612874105,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 288.75,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.1072600000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 41.07414623125152,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 51.83521249999881,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 824.1382383708144,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 205.91229477371448,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 358.1671460519199,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 434.228859370621,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 156.0930749408505,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 139.14690063997347,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 121.92080997493673,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 215.59,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 68.74148498454133,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 57.58095639522532,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 99.6093984267369,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 42.88699767394757,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 90.81917795834562,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 62.879601328831285,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 163.76665971065646,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 118.46911111112611,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 46.23233015429892,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 156.98526281454275,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 212.53747341730943,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 99.35081325153196,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 52.36161307308432,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 191.03591532185263,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 46.13583333333334,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 13.333333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 273.82764154167677,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 43.19601041666567,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 232.80864493374793,
                        "hasRDI": true,
                        "daily": 358.1671460519199,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 86.84577187412421,
                                "hasRDI": true,
                                "daily": 434.228859370621,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 6.801762500000001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 96.80825859999958,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 35.67151535024806,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 468.27922482255144,
                        "hasRDI": true,
                        "daily": 156.0930749408505,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 433.4924996625581,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 34.78672515999337,
                                "hasRDI": true,
                                "daily": 139.14690063997347,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 233.59630047756946,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 94.27100000016526,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 60.960404987468365,
                        "hasRDI": true,
                        "daily": 121.92080997493673,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 646.77,
                        "hasRDI": true,
                        "daily": 215.59,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1649.795639628992,
                        "hasRDI": true,
                        "daily": 68.74148498454133,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 575.8095639522533,
                        "hasRDI": true,
                        "daily": 57.58095639522532,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 418.35947339229494,
                        "hasRDI": true,
                        "daily": 99.6093984267369,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2015.6888906755357,
                        "hasRDI": true,
                        "daily": 42.88699767394757,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 16.34745203250221,
                        "hasRDI": true,
                        "daily": 90.81917795834562,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 6.9167561461714415,
                        "hasRDI": true,
                        "daily": 62.879601328831285,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1146.366617974595,
                        "hasRDI": true,
                        "daily": 163.76665971065646,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1066.222000000135,
                        "hasRDI": true,
                        "daily": 118.46911111112611,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 41.609097138869025,
                        "hasRDI": true,
                        "daily": 46.23233015429892,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.883823153774513,
                        "hasRDI": true,
                        "daily": 156.98526281454275,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.762987154425023,
                        "hasRDI": true,
                        "daily": 212.53747341730943,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 15.896130120245115,
                        "hasRDI": true,
                        "daily": 99.35081325153196,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.6807009699500962,
                        "hasRDI": true,
                        "daily": 52.36161307308432,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 764.1436612874105,
                        "hasRDI": true,
                        "daily": 191.03591532185263,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 272.8936612874105,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 288.75,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.1072600000000001,
                        "hasRDI": true,
                        "daily": 46.13583333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 2.0,
                        "hasRDI": true,
                        "daily": 13.333333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 41.07414623125152,
                        "hasRDI": true,
                        "daily": 273.82764154167677,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 51.83521249999881,
                        "hasRDI": true,
                        "daily": 43.19601041666567,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 824.1382383708144,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/a88fa83afcb7bb32e92072d62dd71796?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5a76b588b94c72e07f02418d169cab50",
                "label": "Dinner Tonight: Apple, Almond, and Smoked Mozzarella Farro Salad Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6a6/6a67041cac570b4aece3846d48dafa19.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=acf45791a818f83447f715164eecbc1efd5ca61b5a01777aa6fbb71224fe2f40",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6a6/6a67041cac570b4aece3846d48dafa19-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=af86408cbf30e385096baae7cabe32989681746b1a9a5cdcdd1311cfb8b60d20",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6a6/6a67041cac570b4aece3846d48dafa19-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f886975f19ed02990d5633738c1ad28751c07134ae0d064c4868c2abf8febc9c",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6a6/6a67041cac570b4aece3846d48dafa19.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=acf45791a818f83447f715164eecbc1efd5ca61b5a01777aa6fbb71224fe2f40",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2011/06/apple-almond-and-smoked-mozzarella-farro-salad-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/dinner-tonight-apple-almond-and-smoked-mozzarella-farro-salad-recipe-5a76b588b94c72e07f02418d169cab50/apple%2Calmond",
                "yield": 4.0,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "For the Wine-Roasted Garlic",
                    "10 garlic cloves, unpeeled",
                    "1 tablespoon honey",
                    "Splash of white wine",
                    "For the Farro Salad",
                    "1 cup farro",
                    "1 teaspoon salt",
                    "½ cup blanched almonds, chopped",
                    "2 apples",
                    "Juice of 1 lemon",
                    "1 cup craisins",
                    "¼ cup fresh parsley leaves",
                    "6 ounces smoked mozzarella, cut into ½-inch cubes",
                    "⅓ cup extra-virgin olive oil",
                    "2 ½ tablespoons balsamic vinegar",
                    "Salt and pepper"
                ],
                "ingredients": [
                    {
                        "text": "10 garlic cloves, unpeeled",
                        "quantity": 10.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 30.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 tablespoon honey",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "honey",
                        "weight": 21.0,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "Splash of white wine",
                        "quantity": 1.0,
                        "measure": "splash",
                        "food": "white wine",
                        "weight": 84.0,
                        "foodCategory": "wines",
                        "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                        "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
                    },
                    {
                        "text": "1 cup farro",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "farro",
                        "weight": 174.0,
                        "foodCategory": "grains",
                        "foodId": "food_ab6vdija778o56agowns4bvybfaw",
                        "image": "https://www.edamam.com/food-img/444/4447177f55469aafd3a7656bf06315b2.jpg"
                    },
                    {
                        "text": "1 teaspoon salt",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 6.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "½ cup blanched almonds, chopped",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "blanched almonds",
                        "weight": 72.5,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_a10bnd0bmm2on6alob9j5btgu42u",
                        "image": "https://www.edamam.com/food-img/a2b/a2b45160204372c7fc68667dd5bf29a3.jpg"
                    },
                    {
                        "text": "2 apples",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "apples",
                        "weight": 364.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "Juice of 1 lemon",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "lemon",
                        "weight": 84.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                        "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
                    },
                    {
                        "text": "1 cup craisins",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "craisins",
                        "weight": 160.0,
                        "foodCategory": "sugar jam",
                        "foodId": "food_atvsjvja2h9xyfblcy3pzaienr8a",
                        "image": "https://www.edamam.com/food-img/8aa/8aa3935a527394e1568079a489759221.jpg"
                    },
                    {
                        "text": "¼ cup fresh parsley leaves",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "parsley",
                        "weight": 15.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                        "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                    },
                    {
                        "text": "6 ounces smoked mozzarella, cut into ½-inch cubes",
                        "quantity": 6.0,
                        "measure": "ounce",
                        "food": "mozzarella",
                        "weight": 170.09713875,
                        "foodCategory": "Cheese",
                        "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                        "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
                    },
                    {
                        "text": "⅓ cup extra-virgin olive oil",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "extra-virgin olive oil",
                        "weight": 72.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "2 ½ tablespoons balsamic vinegar",
                        "quantity": 2.5,
                        "measure": "tablespoon",
                        "food": "balsamic vinegar",
                        "weight": 40.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
                        "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 7.755582832499999,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 3.8777914162499996,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    }
                ],
                "calories": 3095.133701317287,
                "totalCO2Emissions": 5992.670320621562,
                "co2EmissionsClass": "F",
                "totalWeight": 1295.8958863208757,
                "totalTime": 60.0,
                "cuisineType": [
                    "italian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 3095.133701317287,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 154.89188366391974,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 37.52557358693587,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.018575,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 89.31240889444108,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 20.727243469771675,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 369.9779178364,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 322.4663366080888,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 47.51158122831124,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 195.839267865064,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 17.241,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 83.89755510979,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 134.37673961250002,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3000.9736406030106,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1248.9701961385977,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 531.5846606333338,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2237.4571277784953,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.25745011232814,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 13.922353125508,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1799.1757816126749,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 383.6308820448876,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 90.999,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.0204321563545502,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.42496992721175,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 16.47487784644525,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.2675753143587873,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 171.5110242532625,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 171.5110242532625,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.8782147635,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.6803885550000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 33.638813594354,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 326.89381211389997,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 657.4598852143405,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 154.75668506586436,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 238.2952056367996,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 187.62786793467936,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 123.32597261213334,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 190.04632491324497,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 167.79511021958,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 44.792246537500006,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 125.04056835845877,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 124.89701961385977,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 126.56777634126995,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 47.60547080379777,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 84.76361173515633,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 126.56684659552728,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 257.02511165895356,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 42.625653560543064,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 101.11,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 85.03601302954586,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 109.61307132398076,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 102.96798654028281,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 97.5057934122144,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 42.877756063315616,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 161.5922818125,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.535923700000001,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 224.2587572956933,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 272.41151009491665,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 154.89188366391974,
                        "hasRDI": true,
                        "daily": 238.2952056367996,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 37.52557358693587,
                                "hasRDI": true,
                                "daily": 187.62786793467936,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.018575,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 89.31240889444108,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 20.727243469771675,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 369.9779178364,
                        "hasRDI": true,
                        "daily": 123.32597261213334,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 322.4663366080888,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 47.51158122831124,
                                "hasRDI": true,
                                "daily": 190.04632491324497,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 195.839267865064,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 17.241,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 83.89755510979,
                        "hasRDI": true,
                        "daily": 167.79511021958,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 134.37673961250002,
                        "hasRDI": true,
                        "daily": 44.792246537500006,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3000.9736406030106,
                        "hasRDI": true,
                        "daily": 125.04056835845877,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1248.9701961385977,
                        "hasRDI": true,
                        "daily": 124.89701961385977,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 531.5846606333338,
                        "hasRDI": true,
                        "daily": 126.56777634126995,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2237.4571277784953,
                        "hasRDI": true,
                        "daily": 47.60547080379777,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.25745011232814,
                        "hasRDI": true,
                        "daily": 84.76361173515633,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 13.922353125508,
                        "hasRDI": true,
                        "daily": 126.56684659552728,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1799.1757816126749,
                        "hasRDI": true,
                        "daily": 257.02511165895356,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 383.6308820448876,
                        "hasRDI": true,
                        "daily": 42.625653560543064,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 90.999,
                        "hasRDI": true,
                        "daily": 101.11,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.0204321563545502,
                        "hasRDI": true,
                        "daily": 85.03601302954586,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.42496992721175,
                        "hasRDI": true,
                        "daily": 109.61307132398076,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 16.47487784644525,
                        "hasRDI": true,
                        "daily": 102.96798654028281,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.2675753143587873,
                        "hasRDI": true,
                        "daily": 97.5057934122144,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 171.5110242532625,
                        "hasRDI": true,
                        "daily": 42.877756063315616,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 171.5110242532625,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.8782147635,
                        "hasRDI": true,
                        "daily": 161.5922818125,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.6803885550000001,
                        "hasRDI": true,
                        "daily": 4.535923700000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 33.638813594354,
                        "hasRDI": true,
                        "daily": 224.2587572956933,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 326.89381211389997,
                        "hasRDI": true,
                        "daily": 272.41151009491665,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 657.4598852143405,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/5a76b588b94c72e07f02418d169cab50?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1f499e12587eed5d318b6d5bf21965da",
                "label": "Apple, Almond, and Cheddar Sandwich",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36b96077cd7c2657160e4eddb0ace7ec.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35056c6c3cd555807a02b0bc4021cec7555f9f213bfa8a349a0376a8425883d6",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36b96077cd7c2657160e4eddb0ace7ec-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c958ace34ad4ed0162eb069855759735d28fd5cf9832c30609ec7782b3e597b",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36b96077cd7c2657160e4eddb0ace7ec-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=95ee2b011c926a750cefd021d37a0b903a78a3021bbf64860cea9073a26f2c5c",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36b96077cd7c2657160e4eddb0ace7ec.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35056c6c3cd555807a02b0bc4021cec7555f9f213bfa8a349a0376a8425883d6",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "My Recipes",
                "url": "http://www.myrecipes.com/recipe/apple-almond-cheddar-sandwich",
                "shareAs": "http://www.edamam.com/recipe/apple-almond-and-cheddar-sandwich-1f499e12587eed5d318b6d5bf21965da/apple%2Calmond",
                "yield": 1.0,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 tablespoon unsweetened almond butter",
                    "2 (1-ounce) whole-grain bread slices",
                    "1/4 cup thinly sliced apple",
                    "1 (1/2-ounce) thin slice sharp cheddar",
                    "1 ounce lower-sodium deli ham",
                    "1 romaine lettuce leaf"
                ],
                "ingredients": [
                    {
                        "text": "1 tablespoon unsweetened almond butter",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "almond butter",
                        "weight": 16.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
                        "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
                    },
                    {
                        "text": "2 (1-ounce) whole-grain bread slices",
                        "quantity": 2.0,
                        "measure": "ounce",
                        "food": "whole-grain bread",
                        "weight": 56.69904625,
                        "foodCategory": "bread, rolls and tortillas",
                        "foodId": "food_a99i99xbxlv0ubbx52jlgbc8v83n",
                        "image": "https://www.edamam.com/food-img/22e/22ee072ce16dafa9074f836be73216df.jpg"
                    },
                    {
                        "text": "1/4 cup thinly sliced apple",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "apple",
                        "weight": 27.25,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "1 (1/2-ounce) thin slice sharp cheddar",
                        "quantity": 0.5,
                        "measure": "ounce",
                        "food": "sharp cheddar",
                        "weight": 14.1747615625,
                        "foodCategory": "bov",
                        "foodId": "food_amcrzhtbg40i7zblkm02ias4oy40",
                        "image": "https://www.edamam.com/food-img/c10/c104a43cc771440bb5a915f6ceed9be3.jpg"
                    },
                    {
                        "text": "1 ounce lower-sodium deli ham",
                        "quantity": 1.0,
                        "measure": "ounce",
                        "food": "ham",
                        "weight": 28.349523125,
                        "foodCategory": "Cured meats",
                        "foodId": "food_bd97wcfb5tcjnybmibiyeaqrernd",
                        "image": "https://www.edamam.com/food-img/a4b/a4ba02f547d69f0ab89ae266903f1e49.jpg"
                    },
                    {
                        "text": "1 romaine lettuce leaf",
                        "quantity": 1.0,
                        "measure": "leaf",
                        "food": "romaine lettuce",
                        "weight": 6.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bfmb5cybk1o247bmrmry4a6jvp60",
                        "image": "https://www.edamam.com/food-img/79e/79e8dd0ee229cbc32171ec362ce93a37.jpg"
                    }
                ],
                "calories": 368.29221289375005,
                "totalCO2Emissions": 798.27093839375,
                "co2EmissionsClass": "E",
                "totalWeight": 148.4733309375,
                "totalTime": 0.0,
                "cuisineType": [
                    "italian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "sandwiches"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 368.29221289375005,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 18.628522099500003,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 4.06003704205,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.16726218643750002,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 8.045676907156249,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 3.687280473600001,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 32.87027675546876,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 25.878003532343758,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.992273223125001,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 7.55903614284375,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 19.215955715875,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 30.192242128125002,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 539.9464489125,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 225.121457896875,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 101.13183678437501,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 386.20125653125007,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 2.3786209106250005,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 2.427838430875,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 323.92999901875004,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 64.25712290937501,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.6841799712500007,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3549980394218751,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.34760136693125004,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.6686172770593752,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.285111993890625,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 65.793436928125,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 65.793436928125,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.24380589887500004,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.34019427750000003,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.271879229812499,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.853480925,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 74.41952043350001,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 18.414610644687503,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 28.659264768461544,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 20.30018521025,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 10.956758918489585,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 27.9690928925,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 38.43191143175,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 10.064080709375002,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 22.497768704687502,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 22.5121457896875,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 24.079008758184525,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 8.217048011303191,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 13.214560614583336,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 22.0712584625,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 46.275714145535716,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 7.139680323263891,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.9824221902777786,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 29.58316995182292,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 26.738566687019233,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 22.928857981621096,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 21.931691837740388,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 16.44835923203125,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 10.15857911979167,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 2.2679618500000003,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 28.479194865416662,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.5445674375000005,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 18.628522099500003,
                        "hasRDI": true,
                        "daily": 28.659264768461544,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 4.06003704205,
                                "hasRDI": true,
                                "daily": 20.30018521025,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.16726218643750002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 8.045676907156249,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 3.687280473600001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 32.87027675546876,
                        "hasRDI": true,
                        "daily": 10.956758918489585,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 25.878003532343758,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 6.992273223125001,
                                "hasRDI": true,
                                "daily": 27.9690928925,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 7.55903614284375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 19.215955715875,
                        "hasRDI": true,
                        "daily": 38.43191143175,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 30.192242128125002,
                        "hasRDI": true,
                        "daily": 10.064080709375002,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 539.9464489125,
                        "hasRDI": true,
                        "daily": 22.497768704687502,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 225.121457896875,
                        "hasRDI": true,
                        "daily": 22.5121457896875,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 101.13183678437501,
                        "hasRDI": true,
                        "daily": 24.079008758184525,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 386.20125653125007,
                        "hasRDI": true,
                        "daily": 8.217048011303191,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 2.3786209106250005,
                        "hasRDI": true,
                        "daily": 13.214560614583336,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 2.427838430875,
                        "hasRDI": true,
                        "daily": 22.0712584625,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 323.92999901875004,
                        "hasRDI": true,
                        "daily": 46.275714145535716,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 64.25712290937501,
                        "hasRDI": true,
                        "daily": 7.139680323263891,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 2.6841799712500007,
                        "hasRDI": true,
                        "daily": 2.9824221902777786,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3549980394218751,
                        "hasRDI": true,
                        "daily": 29.58316995182292,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.34760136693125004,
                        "hasRDI": true,
                        "daily": 26.738566687019233,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 3.6686172770593752,
                        "hasRDI": true,
                        "daily": 22.928857981621096,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.285111993890625,
                        "hasRDI": true,
                        "daily": 21.931691837740388,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 65.793436928125,
                        "hasRDI": true,
                        "daily": 16.44835923203125,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 65.793436928125,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.24380589887500004,
                        "hasRDI": true,
                        "daily": 10.15857911979167,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.34019427750000003,
                        "hasRDI": true,
                        "daily": 2.2679618500000003,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.271879229812499,
                        "hasRDI": true,
                        "daily": 28.479194865416662,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 7.853480925,
                        "hasRDI": true,
                        "daily": 6.5445674375000005,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 74.41952043350001,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/1f499e12587eed5d318b6d5bf21965da?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a89107701e6559a16fe12531743883ca",
                "label": "Apple-Almond Cheesecake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4bd/4bda43898d9bc825018026bb28615fcf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e1088550544bdc92ba81191a59011e6bc8f7d819d255e6faa413f7e77d4de562",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4bd/4bda43898d9bc825018026bb28615fcf-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f08582c016153ceb1a160de032e8001a31f2690dfbb73d13587ce1f8bc1f9988",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4bd/4bda43898d9bc825018026bb28615fcf-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4183d8b6c1b748ce7bf44604f8ef895ec0a28722e60bfa30a8246632b062adac",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4bd/4bda43898d9bc825018026bb28615fcf.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e1088550544bdc92ba81191a59011e6bc8f7d819d255e6faa413f7e77d4de562",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/apple-almond-cheesecake-108644",
                "shareAs": "http://www.edamam.com/recipe/apple-almond-cheesecake-a89107701e6559a16fe12531743883ca/apple%2Calmond",
                "yield": 12.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 cup graham cracker crumbs",
                    "1 cup sliced almonds, toasted",
                    "6 tablespoons (3/4 stick) unsalted butter, melted",
                    "2 tablespoons golden brown sugar",
                    "1/4 teaspoon salt",
                    "1 1/2 7-ounce packages almond paste, crumbled",
                    "3 8-ounce packages cream cheese, room temperature",
                    "6 tablespoons sugar",
                    "4 large eggs",
                    "4 large Jonagold apples (about 2 1/2 pounds), peeled, cored, cut into 1/3-inch-thick slices",
                    "2 tablespoons fresh lemon juice",
                    "4 tablespoons unsalted butter",
                    "3/4 cup (packed) golden brown sugar",
                    "3/4 teaspoon ground cinnamon"
                ],
                "ingredients": [
                    {
                        "text": "1 cup graham cracker crumbs",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "cracker crumbs",
                        "weight": 52.0,
                        "foodCategory": "crackers",
                        "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
                        "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
                    },
                    {
                        "text": "1 cup sliced almonds, toasted",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 92.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "6 tablespoons (3/4 stick) unsalted butter, melted",
                        "quantity": 6.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 85.19999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "2 tablespoons golden brown sugar",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "brown sugar",
                        "weight": 18.12499999969356,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1/4 teaspoon salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 1/2 7-ounce packages almond paste, crumbled",
                        "quantity": 10.5,
                        "measure": "ounce",
                        "food": "almond paste",
                        "weight": 297.6699928125,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bxecircbdyigilbaxjpllb1sjegx",
                        "image": "https://www.edamam.com/food-img/e03/e03f6b7a81c44a9a829653a01c00ea83.jpg"
                    },
                    {
                        "text": "3 8-ounce packages cream cheese, room temperature",
                        "quantity": 24.0,
                        "measure": "ounce",
                        "food": "cream cheese",
                        "weight": 680.388555,
                        "foodCategory": "Cheese",
                        "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
                    },
                    {
                        "text": "6 tablespoons sugar",
                        "quantity": 6.0,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 74.9999999987322,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "4 large eggs",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 200.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "4 large Jonagold apples (about 2 1/2 pounds), peeled, cored, cut into 1/3-inch-thick slices",
                        "quantity": 2.5,
                        "measure": "pound",
                        "food": "apples",
                        "weight": 1133.980925,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "2 tablespoons fresh lemon juice",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "lemon juice",
                        "weight": 30.4999999994844,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                    },
                    {
                        "text": "4 tablespoons unsalted butter",
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 56.8,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3/4 cup (packed) golden brown sugar",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "brown sugar",
                        "weight": 165.0,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "3/4 teaspoon ground cinnamon",
                        "quantity": 0.75,
                        "measure": "teaspoon",
                        "food": "ground cinnamon",
                        "weight": 1.9500000000000002,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    }
                ],
                "calories": 7375.063082475066,
                "totalCO2Emissions": 22151.476598054134,
                "co2EmissionsClass": "F",
                "totalWeight": 2890.11447281041,
                "totalTime": 0.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 7375.063082475066,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 512.1586217443112,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 229.92909961406855,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 8.6119460935,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 187.30728675502496,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 54.144572440262394,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 632.279160683771,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 579.6740630487726,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 52.60509763499846,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 501.85272664454953,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 252.4812499984375,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 121.05581585012283,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1736.4924405499996,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 3486.0011903780214,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1863.5980059372023,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 803.3313522311915,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4255.616050805286,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 17.30232419449678,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 14.163564301624525,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2620.841446881196,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3417.7867343750004,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 59.12208028761297,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.0738468432811261,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 5.330423483193432,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.831965360561693,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.5018699995371372,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 533.9397996780187,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 460.0997996780188,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 43.68,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.518254821,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 4.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 78.48682970118674,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 83.92538197,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1485.3988285360824,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 368.7531541237533,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 787.936341145094,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1149.6454980703427,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 210.75972022792368,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 210.42039053999383,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 242.11163170024562,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 578.8308135166666,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 145.25004959908424,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 186.35980059372022,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 191.26936957885513,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 90.54502235755929,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 96.1240233027599,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 128.75967546931386,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 374.405920983028,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 379.75408159722224,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 65.69120031956997,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 89.48723694009385,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 410.032575630264,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 73.94978350351057,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 115.5284615028567,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 133.4849499195047,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 146.59395087500002,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 26.666666666666668,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 523.2455313412449,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 69.93781830833333,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 512.1586217443112,
                        "hasRDI": true,
                        "daily": 787.936341145094,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 229.92909961406855,
                                "hasRDI": true,
                                "daily": 1149.6454980703427,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 8.6119460935,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 187.30728675502496,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 54.144572440262394,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 632.279160683771,
                        "hasRDI": true,
                        "daily": 210.75972022792368,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 579.6740630487726,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 52.60509763499846,
                                "hasRDI": true,
                                "daily": 210.42039053999383,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 501.85272664454953,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 252.4812499984375,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 121.05581585012283,
                        "hasRDI": true,
                        "daily": 242.11163170024562,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1736.4924405499996,
                        "hasRDI": true,
                        "daily": 578.8308135166666,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 3486.0011903780214,
                        "hasRDI": true,
                        "daily": 145.25004959908424,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1863.5980059372023,
                        "hasRDI": true,
                        "daily": 186.35980059372022,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 803.3313522311915,
                        "hasRDI": true,
                        "daily": 191.26936957885513,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4255.616050805286,
                        "hasRDI": true,
                        "daily": 90.54502235755929,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 17.30232419449678,
                        "hasRDI": true,
                        "daily": 96.1240233027599,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 14.163564301624525,
                        "hasRDI": true,
                        "daily": 128.75967546931386,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2620.841446881196,
                        "hasRDI": true,
                        "daily": 374.405920983028,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3417.7867343750004,
                        "hasRDI": true,
                        "daily": 379.75408159722224,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 59.12208028761297,
                        "hasRDI": true,
                        "daily": 65.69120031956997,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.0738468432811261,
                        "hasRDI": true,
                        "daily": 89.48723694009385,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 5.330423483193432,
                        "hasRDI": true,
                        "daily": 410.032575630264,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 11.831965360561693,
                        "hasRDI": true,
                        "daily": 73.94978350351057,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.5018699995371372,
                        "hasRDI": true,
                        "daily": 115.5284615028567,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 533.9397996780187,
                        "hasRDI": true,
                        "daily": 133.4849499195047,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 460.0997996780188,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 43.68,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.518254821,
                        "hasRDI": true,
                        "daily": 146.59395087500002,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 4.0,
                        "hasRDI": true,
                        "daily": 26.666666666666668,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 78.48682970118674,
                        "hasRDI": true,
                        "daily": 523.2455313412449,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 83.92538197,
                        "hasRDI": true,
                        "daily": 69.93781830833333,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1485.3988285360824,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/a89107701e6559a16fe12531743883ca?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_48b9733a1a99809c61f1cd388fe1b945",
                "label": "Honey-Apple-Almond Cake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/469/469048b4fe9aa98a71c9e25458dfc591.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a72dc93c270dd2a3b83346da108a204f1ff6e6783b37b5801d02b35fd206529",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/469/469048b4fe9aa98a71c9e25458dfc591-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1d87a72268ac22b23fd975620e2a771db46d7e9d8576c3ce04dd6c85d327ccc4",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/469/469048b4fe9aa98a71c9e25458dfc591-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3537917c9deec478ad7870bdb284da580d6e3c6d66856654ac145f29599a8e46",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/469/469048b4fe9aa98a71c9e25458dfc591.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a72dc93c270dd2a3b83346da108a204f1ff6e6783b37b5801d02b35fd206529",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food Network",
                "url": "https://www.foodnetwork.com/recipes/food-network-kitchen/honey-apple-almond-cake-recipe-2110036",
                "shareAs": "http://www.edamam.com/recipe/honey-apple-almond-cake-48b9733a1a99809c61f1cd388fe1b945/apple%2Calmond",
                "yield": 10.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [],
                "ingredientLines": [
                    "4 large egg whites",
                    "1 cup sugar",
                    "1 teaspoon almond extract",
                    "3 sticks unsalted butter, cut into small pieces, at room temperature",
                    "3 tablespoons honey",
                    "Basic Vanilla Cake, recipe follows, baked and cooled",
                    "3/4 cup apple butter",
                    "Sliced almonds, toasted, for topping",
                    "2 sticks unsalted butter, at room temperature, plus more for the pans",
                    "3 cups all-purpose flour, plus more for the pans",
                    "1 tablespoon baking powder",
                    "1/2 teaspoon salt",
                    "1 1/2 cups sugar",
                    "4 large eggs, at room temperature",
                    "1 tablespoon vanilla extract",
                    "3/4 cup heavy cream"
                ],
                "ingredients": [
                    {
                        "text": "4 large egg whites",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "egg whites",
                        "weight": 132.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
                        "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
                    },
                    {
                        "text": "1 cup sugar",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 200.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 teaspoon almond extract",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "almond extract",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_akzcb47a1rd7udato049aak1z46h",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "3 sticks unsalted butter, cut into small pieces, at room temperature",
                        "quantity": 3.0,
                        "measure": "stick",
                        "food": "unsalted butter",
                        "weight": 339.0,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3 tablespoons honey",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "honey",
                        "weight": 63.0,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "Basic Vanilla Cake, recipe follows, baked and cooled",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Vanilla",
                        "weight": 9.48779999999608,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "3/4 cup apple butter",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "apple butter",
                        "weight": 211.5,
                        "foodCategory": "candy",
                        "foodId": "food_b3pymuna2v8eaaa9lx399aknjx23",
                        "image": "https://www.edamam.com/food-img/3f4/3f417264983a05ce850fd07a7d9422b9.jpg"
                    },
                    {
                        "text": "Sliced almonds, toasted, for topping",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "almonds",
                        "weight": 0.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "2 sticks unsalted butter, at room temperature, plus more for the pans",
                        "quantity": 2.0,
                        "measure": "stick",
                        "food": "unsalted butter",
                        "weight": 226.0,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "3 cups all-purpose flour, plus more for the pans",
                        "quantity": 3.0,
                        "measure": "cup",
                        "food": "all-purpose flour",
                        "weight": 375.0,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "1 tablespoon baking powder",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "baking powder",
                        "weight": 13.799999999066733,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
                        "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
                    },
                    {
                        "text": "1/2 teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 1/2 cups sugar",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 300.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "4 large eggs, at room temperature",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 200.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1 tablespoon vanilla extract",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "vanilla extract",
                        "weight": 13.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "3/4 cup heavy cream",
                        "quantity": 0.75,
                        "measure": "cup",
                        "food": "heavy cream",
                        "weight": 178.5,
                        "foodCategory": "Dairy",
                        "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
                        "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                    }
                ],
                "calories": 8953.903863999512,
                "totalCO2Emissions": 23054.756869998353,
                "co2EmissionsClass": "F",
                "totalWeight": 2268.487799999063,
                "totalTime": 140.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 8953.903863999512,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 546.2234126799999,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 333.33601378000003,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 2.2894,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 156.13625877999996,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 25.356427512000003,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 942.4249627997747,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 928.9738627997765,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 13.451099999998133,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 636.9860627999996,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 625.3824999999999,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 89.12856267999908,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 2160.455,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2915.4319019263653,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1488.6256579313113,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 163.1495359996356,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1473.2379439999477,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 24.068675359894527,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 6.532116579999809,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2449.93126790742,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 4920.35,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.6550000000000002,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 3.1149506579999997,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 4.058138409999996,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 23.115533149999983,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.691338827999999,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1217.9950000000001,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 235.495,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 577.5,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.1449000000000007,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.856,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 17.81845,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 48.89050000000001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 651.9362827999606,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 447.6951931999757,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 840.3437118153845,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1666.6800689000004,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 314.14165426659156,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 53.804399999992526,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 178.25712535999818,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 720.1516666666666,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 121.47632924693188,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 148.86256579313113,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 38.84512761896085,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 31.345488170211656,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 133.71486311052516,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 59.38287799999827,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 349.9901811296314,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 546.7055555555556,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.95,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 259.57922149999996,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 312.1644930769228,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 144.4720821874999,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 53.17990984615376,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 304.49875000000003,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 131.03750000000002,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 45.70666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 118.78966666666665,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 40.74208333333334,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 546.2234126799999,
                        "hasRDI": true,
                        "daily": 840.3437118153845,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 333.33601378000003,
                                "hasRDI": true,
                                "daily": 1666.6800689000004,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 2.2894,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 156.13625877999996,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 25.356427512000003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 942.4249627997747,
                        "hasRDI": true,
                        "daily": 314.14165426659156,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 928.9738627997765,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 13.451099999998133,
                                "hasRDI": true,
                                "daily": 53.804399999992526,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 636.9860627999996,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 625.3824999999999,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 89.12856267999908,
                        "hasRDI": true,
                        "daily": 178.25712535999818,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 2160.455,
                        "hasRDI": true,
                        "daily": 720.1516666666666,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2915.4319019263653,
                        "hasRDI": true,
                        "daily": 121.47632924693188,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1488.6256579313113,
                        "hasRDI": true,
                        "daily": 148.86256579313113,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 163.1495359996356,
                        "hasRDI": true,
                        "daily": 38.84512761896085,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1473.2379439999477,
                        "hasRDI": true,
                        "daily": 31.345488170211656,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 24.068675359894527,
                        "hasRDI": true,
                        "daily": 133.71486311052516,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 6.532116579999809,
                        "hasRDI": true,
                        "daily": 59.38287799999827,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2449.93126790742,
                        "hasRDI": true,
                        "daily": 349.9901811296314,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 4920.35,
                        "hasRDI": true,
                        "daily": 546.7055555555556,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 2.6550000000000002,
                        "hasRDI": true,
                        "daily": 2.95,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 3.1149506579999997,
                        "hasRDI": true,
                        "daily": 259.57922149999996,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 4.058138409999996,
                        "hasRDI": true,
                        "daily": 312.1644930769228,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 23.115533149999983,
                        "hasRDI": true,
                        "daily": 144.4720821874999,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.691338827999999,
                        "hasRDI": true,
                        "daily": 53.17990984615376,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1217.9950000000001,
                        "hasRDI": true,
                        "daily": 304.49875000000003,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 235.495,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 577.5,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.1449000000000007,
                        "hasRDI": true,
                        "daily": 131.03750000000002,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 6.856,
                        "hasRDI": true,
                        "daily": 45.70666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 17.81845,
                        "hasRDI": true,
                        "daily": 118.78966666666665,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 48.89050000000001,
                        "hasRDI": true,
                        "daily": 40.74208333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 651.9362827999606,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/48b9733a1a99809c61f1cd388fe1b945?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2e7a6c13c80bfde94b061f51b51479af",
                "label": "Apple Almond Cinnamon Rolls Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/269/269c76119ff4387a3702bf5762a1ea7a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9155d5346ea8a0f237066acc5e5b1b1633e054cbeeea33e8c0ff8ae2389196ba",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/269/269c76119ff4387a3702bf5762a1ea7a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=36812d6c02d50730243903fcc40fb01c2af618b0cfc06e93201d25e49c1884c3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/269/269c76119ff4387a3702bf5762a1ea7a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=56eae7255a95f29f15332bf1b07daf91e73d6a714467f62076c7ac3e17a75de6",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/269/269c76119ff4387a3702bf5762a1ea7a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9155d5346ea8a0f237066acc5e5b1b1633e054cbeeea33e8c0ff8ae2389196ba",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "The Daily Meal",
                "url": "http://www.thedailymeal.com/recipes/apple-almond-cinnamon-rolls-recipe",
                "shareAs": "http://www.edamam.com/recipe/apple-almond-cinnamon-rolls-recipe-2e7a6c13c80bfde94b061f51b51479af/apple%2Calmond",
                "yield": 6.0,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/4 Cup lukewarm water",
                    "4 Cups flour",
                    "1 1/4 Cup Blue Diamond Vanilla Almond Breeze",
                    "1 egg",
                    "1/4 Cup Splenda Brown Sugar Blend",
                    "2 Tablespoons buttery spread or butter, melted",
                    "1/2 Teaspoon salt",
                    "1 Teaspoon cinnamon",
                    "1 packet of quick-rise yeast",
                    "2 Tablespoons buttery spread or butter, softened",
                    "2 Tablespoons cinnamon",
                    "1/3 Cup Splenda Brown Sugar Blend",
                    "1/3 Cup Splenda Brown Sugar Blend",
                    "3 Tablespoons apple juice concentrate, thawed",
                    "1 Teaspoon cinnamon",
                    "2/3 Cups sliced almonds",
                    "1 green apple, peeled, cored and chopped",
                    "1/4 Cup buttery spread or butter"
                ],
                "ingredients": [
                    {
                        "text": "1/4 Cup lukewarm water",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "water",
                        "weight": 59.147059125,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "4 Cups flour",
                        "quantity": 4.0,
                        "measure": "cup",
                        "food": "flour",
                        "weight": 500.0,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "1 1/4 Cup Blue Diamond Vanilla Almond Breeze",
                        "quantity": 1.25,
                        "measure": "cup",
                        "food": "Almond",
                        "weight": 178.75,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "1 egg",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg",
                        "weight": 43.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "1/4 Cup Splenda Brown Sugar Blend",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "Brown Sugar",
                        "weight": 36.25,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "2 Tablespoons buttery spread or butter, melted",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1/2 Teaspoon salt",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 3.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 Teaspoon cinnamon",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "cinnamon",
                        "weight": 2.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "1 packet of quick-rise yeast",
                        "quantity": 1.0,
                        "measure": "packet",
                        "food": "yeast",
                        "weight": 7.2,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
                        "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
                    },
                    {
                        "text": "2 Tablespoons buttery spread or butter, softened",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 28.4,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "2 Tablespoons cinnamon",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "cinnamon",
                        "weight": 15.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "1/3 Cup Splenda Brown Sugar Blend",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "Brown Sugar",
                        "weight": 48.33333333333333,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "1/3 Cup Splenda Brown Sugar Blend",
                        "quantity": 0.3333333333333333,
                        "measure": "cup",
                        "food": "Brown Sugar",
                        "weight": 48.33333333333333,
                        "foodCategory": "sugars",
                        "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                        "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                    },
                    {
                        "text": "3 Tablespoons apple juice concentrate, thawed",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "apple juice",
                        "weight": 46.49999999921383,
                        "foodCategory": "fruit",
                        "foodId": "food_ai7w4okaoeknd5b5j9o66bm6nu10",
                        "image": "https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg"
                    },
                    {
                        "text": "1 Teaspoon cinnamon",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "cinnamon",
                        "weight": 2.6,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "2/3 Cups sliced almonds",
                        "quantity": 0.6666666666666666,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 61.33333333333333,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "1 green apple, peeled, cored and chopped",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "green apple",
                        "weight": 174.6,
                        "foodCategory": "fruit",
                        "foodId": "food_b4m99bgatuhmfybeq0d7xa9uvr1b",
                        "image": "https://www.edamam.com/food-img/288/288a6646dd6bb05a482f4405bf6e2861.jpg"
                    },
                    {
                        "text": "1/4 Cup buttery spread or butter",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "butter",
                        "weight": 56.75,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    }
                ],
                "calories": 4788.243333332972,
                "totalCO2Emissions": 4369.525606666328,
                "co2EmissionsClass": "E",
                "totalWeight": 1340.7970591242135,
                "totalTime": 0.0,
                "cuisineType": [
                    "nordic"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "starter"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4788.243333332972,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 222.07796333333232,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 68.7408066666665,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.052352499999999996,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 104.81011133333328,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 35.86790799999969,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 612.8582799999111,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 551.384463333246,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 61.47381666666509,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 162.61882166659103,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 128.92916666666665,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 113.49380166666592,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 404.0925,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1298.8918823649685,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1107.5814117736873,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 805.6629705912108,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2973.314999999206,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 18.69040999999906,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 12.727744705912347,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1895.892499999945,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 857.3319999999999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.2304999999929245,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.954563333333168,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 3.520149999999866,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 18.59214699999942,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.8937524999998586,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 430.31033333333335,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 435.5483333333333,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.5807749999999999,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.8600000000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 65.64868333333325,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 21.6831,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 374.99033039851497,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 239.41216666664857,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 341.6584051282036,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 343.7040333333325,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 204.2860933333037,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 245.89526666666035,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 226.98760333333183,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 134.6975,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 54.12049509854035,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 110.75814117736873,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 191.82451680743114,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 63.26202127657885,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 103.83561111110588,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 115.7067700537486,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 270.8417857142779,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 95.2591111111111,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.3672222222143606,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 162.880277777764,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 270.7807692307589,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 116.20091874999639,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 68.75019230768143,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 107.57758333333334,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 24.19895833333333,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 5.733333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 437.65788888888835,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 18.06925,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 222.07796333333232,
                        "hasRDI": true,
                        "daily": 341.6584051282036,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 68.7408066666665,
                                "hasRDI": true,
                                "daily": 343.7040333333325,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.052352499999999996,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 104.81011133333328,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 35.86790799999969,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 612.8582799999111,
                        "hasRDI": true,
                        "daily": 204.2860933333037,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 551.384463333246,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 61.47381666666509,
                                "hasRDI": true,
                                "daily": 245.89526666666035,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 162.61882166659103,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 128.92916666666665,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 113.49380166666592,
                        "hasRDI": true,
                        "daily": 226.98760333333183,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 404.0925,
                        "hasRDI": true,
                        "daily": 134.6975,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1298.8918823649685,
                        "hasRDI": true,
                        "daily": 54.12049509854035,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1107.5814117736873,
                        "hasRDI": true,
                        "daily": 110.75814117736873,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 805.6629705912108,
                        "hasRDI": true,
                        "daily": 191.82451680743114,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2973.314999999206,
                        "hasRDI": true,
                        "daily": 63.26202127657885,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 18.69040999999906,
                        "hasRDI": true,
                        "daily": 103.83561111110588,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 12.727744705912347,
                        "hasRDI": true,
                        "daily": 115.7067700537486,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1895.892499999945,
                        "hasRDI": true,
                        "daily": 270.8417857142779,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 857.3319999999999,
                        "hasRDI": true,
                        "daily": 95.2591111111111,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.2304999999929245,
                        "hasRDI": true,
                        "daily": 1.3672222222143606,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.954563333333168,
                        "hasRDI": true,
                        "daily": 162.880277777764,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 3.520149999999866,
                        "hasRDI": true,
                        "daily": 270.7807692307589,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 18.59214699999942,
                        "hasRDI": true,
                        "daily": 116.20091874999639,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.8937524999998586,
                        "hasRDI": true,
                        "daily": 68.75019230768143,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 430.31033333333335,
                        "hasRDI": true,
                        "daily": 107.57758333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 435.5483333333333,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.5807749999999999,
                        "hasRDI": true,
                        "daily": 24.19895833333333,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.8600000000000001,
                        "hasRDI": true,
                        "daily": 5.733333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 65.64868333333325,
                        "hasRDI": true,
                        "daily": 437.65788888888835,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 21.6831,
                        "hasRDI": true,
                        "daily": 18.06925,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 374.99033039851497,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/2e7a6c13c80bfde94b061f51b51479af?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_34740e0284de1c61ee5f713252e221cb",
                "label": "Almond-Date Smoothie recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c02/c027327cdd04a2ea49d14b66d7a00169?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ea790427ecb6cbdffda430514e41200246ad13a8af1f86549e76ba729371c97",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c02/c027327cdd04a2ea49d14b66d7a00169-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a3dca2e7582b07e3ef08636f5cb50cc2a2b10b79042bb1e19d326700d0b31ba0",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c02/c027327cdd04a2ea49d14b66d7a00169-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d4c92953738196d9693acf05143e7482befb60d076c46d4c655e5a39d03a8ad",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c02/c027327cdd04a2ea49d14b66d7a00169?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ea790427ecb6cbdffda430514e41200246ad13a8af1f86549e76ba729371c97",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "http://www.marthastewart.com/335222/almond-date-smoothie",
                "shareAs": "http://www.edamam.com/recipe/almond-date-smoothie-recipes-34740e0284de1c61ee5f713252e221cb/apple%2Calmond",
                "yield": 2.0,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 tablespoons almond butter",
                    "4 pitted dates (preferably Medjool)",
                    "1 cup low-fat plain yogurt",
                    "1 cup apple cider or apple juice",
                    "1 cup ice"
                ],
                "ingredients": [
                    {
                        "text": "3 tablespoons almond butter",
                        "quantity": 3.0,
                        "measure": "tablespoon",
                        "food": "almond butter",
                        "weight": 48.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
                        "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
                    },
                    {
                        "text": "4 pitted dates (preferably Medjool)",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "dates",
                        "weight": 96.0,
                        "foodCategory": "fruit",
                        "foodId": "food_aq6d442amcodjrah72l55bzoqenc",
                        "image": "https://www.edamam.com/food-img/051/05168bdd7c88ca141e28c49ccf5a04a9.jpg"
                    },
                    {
                        "text": "1 cup low-fat plain yogurt",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "low-fat plain yogurt",
                        "weight": 245.0,
                        "foodCategory": "yogurt",
                        "foodId": "food_aqv00dwa9mjxm9akeqs79avn1fhk",
                        "image": "https://www.edamam.com/food-img/3de/3de016fbf55ee09cf514658062992852.jpg"
                    },
                    {
                        "text": "1 cup apple cider or apple juice",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "apple cider",
                        "weight": 248.0,
                        "foodCategory": "fruit",
                        "foodId": "food_ba8sh6rarb62bdayb11fwaz35yyz",
                        "image": "https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg"
                    },
                    {
                        "text": "1 cup ice",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "ice",
                        "weight": 236.5882365,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    }
                ],
                "calories": 829.07,
                "totalCO2Emissions": 6078.679999999999,
                "co2EmissionsClass": "G",
                "totalWeight": 873.5882365,
                "totalTime": 20.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "breakfast"
                ],
                "dishType": [
                    "drinks"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 829.07,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 30.9039,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 4.496560000000001,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 16.610580000000002,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 6.73252,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 126.296,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 114.424,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 11.872,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 107.072,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 24.928100000000004,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 14.700000000000001,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 195.20352945999997,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 703.287647095,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 242.175882365,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1850.98,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 3.0328000000000004,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.25535882365,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 673.5200000000001,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 41.02,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 4.192,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.22756000000000004,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.07478,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 3.52274,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.4531700000000001,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 66.78999999999999,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 66.78999999999999,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.3720000000000003,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 11.7143,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.0820000000000003,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 684.8178482635001,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 41.4535,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 47.54446153846153,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 22.482800000000005,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 42.09866666666667,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 47.488,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 49.85620000000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 4.9,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8.133480394166664,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 70.32876470949999,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 57.66092437261905,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 39.382553191489365,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 16.84888888888889,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 38.685080215,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 96.21714285714287,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 4.557777777777778,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 4.6577777777777785,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 18.96333333333334,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 82.67538461538462,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 22.017125,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 34.85923076923078,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 16.697499999999998,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 57.166666666666686,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 78.09533333333334,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2.568333333333334,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 30.9039,
                        "hasRDI": true,
                        "daily": 47.54446153846153,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 4.496560000000001,
                                "hasRDI": true,
                                "daily": 22.482800000000005,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 16.610580000000002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 6.73252,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 126.296,
                        "hasRDI": true,
                        "daily": 42.09866666666667,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 114.424,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 11.872,
                                "hasRDI": true,
                                "daily": 47.488,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 107.072,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 24.928100000000004,
                        "hasRDI": true,
                        "daily": 49.85620000000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 14.700000000000001,
                        "hasRDI": true,
                        "daily": 4.9,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 195.20352945999997,
                        "hasRDI": true,
                        "daily": 8.133480394166664,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 703.287647095,
                        "hasRDI": true,
                        "daily": 70.32876470949999,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 242.175882365,
                        "hasRDI": true,
                        "daily": 57.66092437261905,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1850.98,
                        "hasRDI": true,
                        "daily": 39.382553191489365,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 3.0328000000000004,
                        "hasRDI": true,
                        "daily": 16.84888888888889,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.25535882365,
                        "hasRDI": true,
                        "daily": 38.685080215,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 673.5200000000001,
                        "hasRDI": true,
                        "daily": 96.21714285714287,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 41.02,
                        "hasRDI": true,
                        "daily": 4.557777777777778,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 4.192,
                        "hasRDI": true,
                        "daily": 4.6577777777777785,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.22756000000000004,
                        "hasRDI": true,
                        "daily": 18.96333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.07478,
                        "hasRDI": true,
                        "daily": 82.67538461538462,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 3.52274,
                        "hasRDI": true,
                        "daily": 22.017125,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.4531700000000001,
                        "hasRDI": true,
                        "daily": 34.85923076923078,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 66.78999999999999,
                        "hasRDI": true,
                        "daily": 16.697499999999998,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 66.78999999999999,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.3720000000000003,
                        "hasRDI": true,
                        "daily": 57.166666666666686,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 11.7143,
                        "hasRDI": true,
                        "daily": 78.09533333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 3.0820000000000003,
                        "hasRDI": true,
                        "daily": 2.568333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 684.8178482635001,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/34740e0284de1c61ee5f713252e221cb?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_10b73d6972456f5ab34574f350de2974",
                "label": "Gluten-free apple and almond cake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c38/c38cf225fb62a6ca2f36e9ba28db1b86.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=55e58fed37147bba4e013fd178bfe2511707f84d1482ae577e758aa34a5c9b27",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c38/c38cf225fb62a6ca2f36e9ba28db1b86-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70aae1fc06d5daaed4e55a2dddc8edb8e1a856c43ec92cedf9452ff13b4a20b9",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c38/c38cf225fb62a6ca2f36e9ba28db1b86-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30373b4049e4c58c7cd53e94e1f6fe6f174c8bfee44c9aeb0e0031a3aa993698",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c38/c38cf225fb62a6ca2f36e9ba28db1b86.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=55e58fed37147bba4e013fd178bfe2511707f84d1482ae577e758aa34a5c9b27",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "BBC",
                "url": "http://www.bbc.co.uk/food/recipes/gluten-free_apple_and_22345",
                "shareAs": "http://www.edamam.com/recipe/gluten-free-apple-and-almond-cake-10b73d6972456f5ab34574f350de2974/apple%2Calmond",
                "yield": 6.0,
                "dietLabels": [
                    "High-Fiber",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 sharp eating apples, peeled, cored and chopped",
                    "1 lemon, juice only",
                    "300g/10½g golden caster sugar",
                    "8 free-range eggs",
                    "325g/11½oz ground almonds",
                    "½ tsp almond essence",
                    "50g/2oz flaked almonds",
                    "Icing sugar, for sprinkling"
                ],
                "ingredients": [
                    {
                        "text": "3 sharp eating apples, peeled, cored and chopped",
                        "quantity": 3.0,
                        "measure": "<unit>",
                        "food": "apples",
                        "weight": 546.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "1 lemon, juice only",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "lemon",
                        "weight": 84.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                        "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
                    },
                    {
                        "text": "300g/10½g golden caster sugar",
                        "quantity": 300.0,
                        "measure": "gram",
                        "food": "caster sugar",
                        "weight": 300.0,
                        "foodCategory": "sugars",
                        "foodId": "food_b83hz1dbrydiwzag8btahb15lu4l",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "8 free-range eggs",
                        "quantity": 8.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 344.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "325g/11½oz ground almonds",
                        "quantity": 325.0,
                        "measure": "gram",
                        "food": "almonds",
                        "weight": 325.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "½ tsp almond essence",
                        "quantity": 0.5,
                        "measure": "teaspoon",
                        "food": "almond",
                        "weight": 1.4895833334088866,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "50g/2oz flaked almonds",
                        "quantity": 50.0,
                        "measure": "gram",
                        "food": "almonds",
                        "weight": 50.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "Icing sugar, for sprinkling",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Icing sugar",
                        "weight": 19.80587500000091,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    }
                ],
                "calories": 4218.11954125044,
                "totalCO2Emissions": 3059.289320833369,
                "co2EmissionsClass": "D",
                "totalWeight": 1670.29545833341,
                "totalTime": 60.0,
                "cuisineType": [
                    "british"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 4218.11954125044,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 221.762902083371,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 25.25944416666953,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.18719343750001136,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 131.60856833335723,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 53.231838750009295,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 486.7416132500173,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 424.2244153333412,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 62.51719791667611,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 395.30424262500424,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 318.7701457500009,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 125.50339166668269,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1279.68,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 502.78101333333416,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 1263.19503791687,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 1091.8218750002038,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 3940.924763333887,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 21.30884706666947,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 16.484855587502356,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 2565.5348958336967,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 567.62,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 69.636,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.0358236458334882,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 6.083584366250861,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 14.467782916669403,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.3916507291667701,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 352.95541666669993,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 352.95541666669993,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 3.0616,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.880000000000001,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 101.10213333335267,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 13.044,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 820.9727441375031,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 210.90597706252203,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 341.1736955128784,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 126.29722083334767,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 162.24720441667242,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 250.06879166670444,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 251.00678333336538,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 426.56,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 20.949208888888922,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 126.319503791687,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 259.9575892857628,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 83.84946304965717,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 118.38248370371927,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 149.8623235227487,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 366.5049851190995,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 63.068888888888885,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 77.37333333333332,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 86.31863715279069,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 467.9680281731432,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 90.42364322918377,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 107.05005608975155,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 88.238854166675,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 127.56666666666666,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 45.866666666666674,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 674.0142222223511,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 10.870000000000001,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 221.762902083371,
                        "hasRDI": true,
                        "daily": 341.1736955128784,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 25.25944416666953,
                                "hasRDI": true,
                                "daily": 126.29722083334767,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.18719343750001136,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 131.60856833335723,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 53.231838750009295,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 486.7416132500173,
                        "hasRDI": true,
                        "daily": 162.24720441667242,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 424.2244153333412,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 62.51719791667611,
                                "hasRDI": true,
                                "daily": 250.06879166670444,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 395.30424262500424,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 318.7701457500009,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 125.50339166668269,
                        "hasRDI": true,
                        "daily": 251.00678333336538,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1279.68,
                        "hasRDI": true,
                        "daily": 426.56,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 502.78101333333416,
                        "hasRDI": true,
                        "daily": 20.949208888888922,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 1263.19503791687,
                        "hasRDI": true,
                        "daily": 126.319503791687,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 1091.8218750002038,
                        "hasRDI": true,
                        "daily": 259.9575892857628,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 3940.924763333887,
                        "hasRDI": true,
                        "daily": 83.84946304965717,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 21.30884706666947,
                        "hasRDI": true,
                        "daily": 118.38248370371927,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 16.484855587502356,
                        "hasRDI": true,
                        "daily": 149.8623235227487,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 2565.5348958336967,
                        "hasRDI": true,
                        "daily": 366.5049851190995,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 567.62,
                        "hasRDI": true,
                        "daily": 63.068888888888885,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 69.636,
                        "hasRDI": true,
                        "daily": 77.37333333333332,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.0358236458334882,
                        "hasRDI": true,
                        "daily": 86.31863715279069,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 6.083584366250861,
                        "hasRDI": true,
                        "daily": 467.9680281731432,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 14.467782916669403,
                        "hasRDI": true,
                        "daily": 90.42364322918377,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.3916507291667701,
                        "hasRDI": true,
                        "daily": 107.05005608975155,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 352.95541666669993,
                        "hasRDI": true,
                        "daily": 88.238854166675,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 352.95541666669993,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 3.0616,
                        "hasRDI": true,
                        "daily": 127.56666666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 6.880000000000001,
                        "hasRDI": true,
                        "daily": 45.866666666666674,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 101.10213333335267,
                        "hasRDI": true,
                        "daily": 674.0142222223511,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 13.044,
                        "hasRDI": true,
                        "daily": 10.870000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 820.9727441375031,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/10b73d6972456f5ab34574f350de2974?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b36035cfacae67a009af9c82dc3e9934",
                "label": "Apple with Cinnamon Almond Butter",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/481/481110c2fffdfa1b8c41e5d706e75f78.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2a4ab8189b86e897fab9a54125f51a4510beebaf903364c8872af095eb7cebc6",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/481/481110c2fffdfa1b8c41e5d706e75f78-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cddff1659c943e4117f5c877ff399e81700385c2d5b437820bc2c67093fe230d",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/481/481110c2fffdfa1b8c41e5d706e75f78-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=90400868630df45ebead9dff9743a1f2831c47e8fa03e58501ea2d14d44ae585",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/481/481110c2fffdfa1b8c41e5d706e75f78.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2a4ab8189b86e897fab9a54125f51a4510beebaf903364c8872af095eb7cebc6",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/481/481110c2fffdfa1b8c41e5d706e75f78-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79e23300f17696a44b38e912a8b2942c8ed6c78e785da3faa25b5e8c9c8e3a21",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "EatingWell",
                "url": "http://www.eatingwell.com/recipe/251354/apple-with-cinnamon-almond-butter/",
                "shareAs": "http://www.edamam.com/recipe/apple-with-cinnamon-almond-butter-b36035cfacae67a009af9c82dc3e9934/apple%2Calmond",
                "yield": 1.0,
                "dietLabels": [
                    "High-Fiber",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Paleo",
                    "Mediterranean",
                    "DASH",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 medium apple",
                    "1 tablespoon smooth almond butter",
                    "Pinch of ground cinnamon"
                ],
                "ingredients": [
                    {
                        "text": "1 medium apple",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "apple",
                        "weight": 182.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "1 tablespoon smooth almond butter",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "almond butter",
                        "weight": 16.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
                        "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
                    },
                    {
                        "text": "Pinch of ground cinnamon",
                        "quantity": 1.0,
                        "measure": "pinch",
                        "food": "ground cinnamon",
                        "weight": 0.16250000020880156,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    }
                ],
                "calories": 193.28137500051574,
                "totalCO2Emissions": 85.41816750035743,
                "co2EmissionsClass": "B",
                "totalWeight": 198.1625000002088,
                "totalTime": 5.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "breakfast"
                ],
                "dishType": [
                    "condiments and sauces"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 193.28137500051574,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 9.19141500000259,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 0.7155206250007204,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 5.197139750000514,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 2.2689305000001423,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 28.254975000168297,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 22.152687500057425,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 6.102287500110874,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 19.64032625000453,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 3.839683750008331,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2.9562500000208805,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 68.06500000208801,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 53.83750000012528,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 315.12037500089997,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 0.7903200000173723,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 0.602173750003821,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 101.40400000013364,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 5.48437500003132,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8.378175000007934,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.03753575000004594,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.1976266250000856,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 0.6733812500027772,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.0913567500003299,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 13.949750000012529,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 13.949750000012529,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.203370000004845,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.0547000000651465,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 156.07162500002215,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 9.664068750025786,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 14.140638461542444,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 3.577603125003602,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 9.418325000056099,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 24.409150000443496,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 7.679367500016662,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 0.12317708333420335,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 6.806500000208801,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 12.81845238098221,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 6.704688829806383,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 4.390666666763179,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 5.474306818216554,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 14.486285714304806,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.60937500000348,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 9.30908333334215,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 3.1279791666704955,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 15.20204807692966,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 4.208632812517357,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 7.027442307717684,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 3.4874375000031317,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 28.022466666698964,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 3.378916666720955,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 9.19141500000259,
                        "hasRDI": true,
                        "daily": 14.140638461542444,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 0.7155206250007204,
                                "hasRDI": true,
                                "daily": 3.577603125003602,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 5.197139750000514,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 2.2689305000001423,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 28.254975000168297,
                        "hasRDI": true,
                        "daily": 9.418325000056099,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 22.152687500057425,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 6.102287500110874,
                                "hasRDI": true,
                                "daily": 24.409150000443496,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 19.64032625000453,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 3.839683750008331,
                        "hasRDI": true,
                        "daily": 7.679367500016662,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2.9562500000208805,
                        "hasRDI": true,
                        "daily": 0.12317708333420335,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 68.06500000208801,
                        "hasRDI": true,
                        "daily": 6.806500000208801,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 53.83750000012528,
                        "hasRDI": true,
                        "daily": 12.81845238098221,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 315.12037500089997,
                        "hasRDI": true,
                        "daily": 6.704688829806383,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 0.7903200000173723,
                        "hasRDI": true,
                        "daily": 4.390666666763179,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 0.602173750003821,
                        "hasRDI": true,
                        "daily": 5.474306818216554,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 101.40400000013364,
                        "hasRDI": true,
                        "daily": 14.486285714304806,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 5.48437500003132,
                        "hasRDI": true,
                        "daily": 0.60937500000348,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 8.378175000007934,
                        "hasRDI": true,
                        "daily": 9.30908333334215,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.03753575000004594,
                        "hasRDI": true,
                        "daily": 3.1279791666704955,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.1976266250000856,
                        "hasRDI": true,
                        "daily": 15.20204807692966,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 0.6733812500027772,
                        "hasRDI": true,
                        "daily": 4.208632812517357,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.0913567500003299,
                        "hasRDI": true,
                        "daily": 7.027442307717684,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 13.949750000012529,
                        "hasRDI": true,
                        "daily": 3.4874375000031317,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 13.949750000012529,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.203370000004845,
                        "hasRDI": true,
                        "daily": 28.022466666698964,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 4.0547000000651465,
                        "hasRDI": true,
                        "daily": 3.378916666720955,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 156.07162500002215,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/b36035cfacae67a009af9c82dc3e9934?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_95f49d3a30d763ab9d14b07eeb7aa2ef",
                "label": "Quinoatmeal with Apple and Toasted Walnuts recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c4b/c4b5cb9714c21b4e2de7cc419c784703?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99da098daf16c74fb336c896b8a3cceb0c8098b2b8d3e2ee40763085909c0fd7",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4b/c4b5cb9714c21b4e2de7cc419c784703-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=00a2f84433429107e1eccd47d9bcfc94a907bbc19f65551120d4d134703e6cca",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4b/c4b5cb9714c21b4e2de7cc419c784703-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b0c06c5cb0adbf919408ab94dd4964176b50cd92c1e71cf657321142f1e573f8",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c4b/c4b5cb9714c21b4e2de7cc419c784703?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99da098daf16c74fb336c896b8a3cceb0c8098b2b8d3e2ee40763085909c0fd7",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Bon Appetit",
                "url": "http://www.bonappetit.com/recipe/quinoatmeal-apple-toasted-walnuts",
                "shareAs": "http://www.edamam.com/recipe/quinoatmeal-with-apple-and-toasted-walnuts-recipes-95f49d3a30d763ab9d14b07eeb7aa2ef/apple%2Calmond",
                "yield": 1.0,
                "dietLabels": [
                    "Balanced",
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
                    "DASH",
                    "Dairy-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1/4 cup red quinoa",
                    "1/4 cup steel-cut oats",
                    "1/2 cup almond milk, plus more for serving",
                    "1 pinch kosher salt",
                    "1 pinch ground cinnamon, plus more for serving",
                    "1 tbsp chopped walnuts",
                    "1/2 apple, shredded"
                ],
                "ingredients": [
                    {
                        "text": "1/4 cup red quinoa",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "quinoa",
                        "weight": 42.5,
                        "foodCategory": "grains",
                        "foodId": "food_a0d1h1cbporq98adlzq8tadghm2a",
                        "image": "https://www.edamam.com/food-img/b62/b622239a214b3bd9f63c8e93e6e9cde6.jpg"
                    },
                    {
                        "text": "1/4 cup steel-cut oats",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "steel-cut oats",
                        "weight": 20.0,
                        "foodCategory": "ready-to-eat cereals",
                        "foodId": "food_a80zurbb0utplravgzuhxb1ipn8k",
                        "image": "https://www.edamam.com/food-img/80c/80c4c56c96c69a1067ea2bc39ef25415.jpg"
                    },
                    {
                        "text": "1/2 cup almond milk, plus more for serving",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "almond milk",
                        "weight": 120.0,
                        "foodCategory": "Vegan products",
                        "foodId": "food_aa8o4pkbhgkey4btmg1daaclqmww",
                        "image": "https://www.edamam.com/food-img/b26/b267bf598feaabd7349fddda7a481f00.jpg"
                    },
                    {
                        "text": "1 pinch kosher salt",
                        "quantity": 1.0,
                        "measure": "pinch",
                        "food": "kosher salt",
                        "weight": 0.30338541705136723,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "1 pinch ground cinnamon, plus more for serving",
                        "quantity": 1.0,
                        "measure": "pinch",
                        "food": "ground cinnamon",
                        "weight": 0.16250000020880156,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "1 tbsp chopped walnuts",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "walnuts",
                        "weight": 7.31249999987637,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_acqkmojaw4fltga9jad8mb85u9z2",
                        "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
                    },
                    {
                        "text": "1/2 apple, shredded",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "apple",
                        "weight": 91.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    }
                ],
                "calories": 344.1451249997072,
                "totalCO2Emissions": 169.6635443172128,
                "co2EmissionsClass": "C",
                "totalWeight": 281.2783854171365,
                "totalTime": 35.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "breakfast"
                ],
                "dishType": [
                    "cereals"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 344.1451249997072,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 10.198214999921984,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1.416087674993142,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.001656,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 5.223256399989474,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 6.717392099941788,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 55.99578750015135,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 47.684562500048756,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 8.311225000102592,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 9.942382500001305,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 10.795083749989537,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 206.7110418159489,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 280.09906250205916,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 162.32928385410048,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 521.6177708337189,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 3.626764921890044,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 2.3071333854170524,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 374.3426499997058,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3.252500000030084,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 4.287237500006327,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.3734413749996243,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.2502453749999002,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.0668712500013926,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.321809874999666,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 99.36359999989139,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 99.36359999989139,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.169309500003979,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2.6501375000618084,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 199.7379505208512,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 17.20725624998536,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 15.689561538341513,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 7.080438374965709,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 18.665262500050453,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 33.24490000041037,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 21.590167499979074,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8.612960075664539,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 28.009906250205916,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 38.64982948907154,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 11.098250443270613,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 20.148694010500247,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 20.97393986742775,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 53.47752142852941,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.36138888889223153,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 4.763597222229253,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 31.120114583302026,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 19.24964423076155,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 6.667945312508704,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 24.754605769205074,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 24.840899999972848,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 27.795396666693193,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 2.2084479167181734,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 10.198214999921984,
                        "hasRDI": true,
                        "daily": 15.689561538341513,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 1.416087674993142,
                                "hasRDI": true,
                                "daily": 7.080438374965709,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.001656,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 5.223256399989474,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 6.717392099941788,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 55.99578750015135,
                        "hasRDI": true,
                        "daily": 18.665262500050453,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 47.684562500048756,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 8.311225000102592,
                                "hasRDI": true,
                                "daily": 33.24490000041037,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 9.942382500001305,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 10.795083749989537,
                        "hasRDI": true,
                        "daily": 21.590167499979074,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 206.7110418159489,
                        "hasRDI": true,
                        "daily": 8.612960075664539,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 280.09906250205916,
                        "hasRDI": true,
                        "daily": 28.009906250205916,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 162.32928385410048,
                        "hasRDI": true,
                        "daily": 38.64982948907154,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 521.6177708337189,
                        "hasRDI": true,
                        "daily": 11.098250443270613,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 3.626764921890044,
                        "hasRDI": true,
                        "daily": 20.148694010500247,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 2.3071333854170524,
                        "hasRDI": true,
                        "daily": 20.97393986742775,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 374.3426499997058,
                        "hasRDI": true,
                        "daily": 53.47752142852941,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3.252500000030084,
                        "hasRDI": true,
                        "daily": 0.36138888889223153,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 4.287237500006327,
                        "hasRDI": true,
                        "daily": 4.763597222229253,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.3734413749996243,
                        "hasRDI": true,
                        "daily": 31.120114583302026,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.2502453749999002,
                        "hasRDI": true,
                        "daily": 19.24964423076155,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 1.0668712500013926,
                        "hasRDI": true,
                        "daily": 6.667945312508704,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.321809874999666,
                        "hasRDI": true,
                        "daily": 24.754605769205074,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 99.36359999989139,
                        "hasRDI": true,
                        "daily": 24.840899999972848,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 99.36359999989139,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.169309500003979,
                        "hasRDI": true,
                        "daily": 27.795396666693193,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 2.6501375000618084,
                        "hasRDI": true,
                        "daily": 2.2084479167181734,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 199.7379505208512,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/95f49d3a30d763ab9d14b07eeb7aa2ef?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8a2791033c2774e83a56b56b87783ddc",
                "label": "Flourless Apple, Almond, and Ginger Cake",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/766/7662386c42536874bb7ec9aed9efd957.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d4ee31443e9d48059b0ce03e350fd0c2489290e5852844444b95157c1961ed7",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/766/7662386c42536874bb7ec9aed9efd957-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=033ed7b18e81f11d307da97d2482a03dfbcdb5969328871b4f1f13a2685897eb",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/766/7662386c42536874bb7ec9aed9efd957-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70a17cad92c2cc31053e8c2afaa7b96da5a4975f66095fcae479dfe819f38a94",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/766/7662386c42536874bb7ec9aed9efd957.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d4ee31443e9d48059b0ce03e350fd0c2489290e5852844444b95157c1961ed7",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Epicurious",
                "url": "https://www.epicurious.com/recipes/food/views/flourless-apple-almond-and-ginger-cake-56390031",
                "shareAs": "http://www.edamam.com/recipe/flourless-apple-almond-and-ginger-cake-8a2791033c2774e83a56b56b87783ddc/apple%2Calmond",
                "yield": 14.0,
                "dietLabels": [
                    "High-Fiber",
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "3 Granny Smith apples",
                    "30 g (1 ounce) unsalted butter",
                    "50 g (1 3/4 ounces/1/4 cup) caster (superfine) sugar",
                    "2 whole cloves",
                    "80 g (1/2 cup) raisins",
                    "260 g (9 1/4 ounces/2 1/3 cups) ground almonds",
                    "220 g (1 1/2 cups) whole almonds",
                    "2 1/2 teaspoons ground ginger",
                    "2 teaspoons baking powder",
                    "4 eggs",
                    "230 g (8 1/2 ounces/1 cup) raw (demerara) sugar",
                    "145 ml (1/2 cup plus 1 tablespoon) pure maple or golden syrup (light treacle)",
                    "2 royal gala or golden delicious apples",
                    "50 g (1/3 cup) whole almonds, coarsely chopped",
                    "50 g (1 3/4 ounces) butter, melted",
                    "50 g (1/4 cup) raw (demerara) sugar"
                ],
                "ingredients": [
                    {
                        "text": "3 Granny Smith apples",
                        "quantity": 3.0,
                        "measure": "<unit>",
                        "food": "Granny Smith apples",
                        "weight": 523.8,
                        "foodCategory": "fruit",
                        "foodId": "food_b4m99bgatuhmfybeq0d7xa9uvr1b",
                        "image": "https://www.edamam.com/food-img/288/288a6646dd6bb05a482f4405bf6e2861.jpg"
                    },
                    {
                        "text": "30 g (1 ounce) unsalted butter",
                        "quantity": 30.0,
                        "measure": "gram",
                        "food": "unsalted butter",
                        "weight": 30.0,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "50 g (1 3/4 ounces/1/4 cup) caster (superfine) sugar",
                        "quantity": 50.0,
                        "measure": "gram",
                        "food": "sugar",
                        "weight": 50.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "2 whole cloves",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "cloves",
                        "weight": 0.3,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
                        "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
                    },
                    {
                        "text": "80 g (1/2 cup) raisins",
                        "quantity": 80.0,
                        "measure": "gram",
                        "food": "raisins",
                        "weight": 80.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a3qcdxyb09op1hbwstv5cbmoqc3d",
                        "image": "https://www.edamam.com/food-img/159/159e247350db62e1f87b0636a53687f5.jpg"
                    },
                    {
                        "text": "260 g (9 1/4 ounces/2 1/3 cups) ground almonds",
                        "quantity": 260.0,
                        "measure": "gram",
                        "food": "almonds",
                        "weight": 260.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "220 g (1 1/2 cups) whole almonds",
                        "quantity": 220.0,
                        "measure": "gram",
                        "food": "almonds",
                        "weight": 220.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "2 1/2 teaspoons ground ginger",
                        "quantity": 2.5,
                        "measure": "teaspoon",
                        "food": "ground ginger",
                        "weight": 4.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a8l1yfna3fgp3ha4a5b5labyetgz",
                        "image": "https://www.edamam.com/food-img/ee0/ee08c937de5c45a36bd0ad1eafc67496.jpg"
                    },
                    {
                        "text": "2 teaspoons baking powder",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "baking powder",
                        "weight": 9.2,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
                        "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
                    },
                    {
                        "text": "4 eggs",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 172.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "230 g (8 1/2 ounces/1 cup) raw (demerara) sugar",
                        "quantity": 230.0,
                        "measure": "gram",
                        "food": "sugar",
                        "weight": 230.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "145 ml (1/2 cup plus 1 tablespoon) pure maple or golden syrup (light treacle)",
                        "quantity": 145.0,
                        "measure": "milliliter",
                        "food": "golden syrup",
                        "weight": 193.66981502480579,
                        "foodCategory": "sugars",
                        "foodId": "food_bo79gpza83y5i8a3ze96lb0pan32",
                        "image": "https://www.edamam.com/food-img/8c0/8c0be6812a605404c0bcebf2fd2a27cd.jpg"
                    },
                    {
                        "text": "2 royal gala or golden delicious apples",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "golden delicious apples",
                        "weight": 342.0,
                        "foodCategory": "fruit",
                        "foodId": "food_bacmbq9afv8uq3bm26em4anhw12o",
                        "image": "https://www.edamam.com/food-img/683/6838f8020957c737b95ad3236ba710a3.jpg"
                    },
                    {
                        "text": "50 g (1/3 cup) whole almonds, coarsely chopped",
                        "quantity": 50.0,
                        "measure": "gram",
                        "food": "almonds",
                        "weight": 50.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "50 g (1 3/4 ounces) butter, melted",
                        "quantity": 50.0,
                        "measure": "gram",
                        "food": "butter",
                        "weight": 50.0,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "50 g (1/4 cup) raw (demerara) sugar",
                        "quantity": 50.0,
                        "measure": "gram",
                        "food": "sugar",
                        "weight": 50.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    }
                ],
                "calories": 6541.69970992913,
                "totalCO2Emissions": 5145.281101925879,
                "co2EmissionsClass": "D",
                "totalWeight": 2265.469815024806,
                "totalTime": 0.0,
                "cuisineType": [
                    "kosher"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 6541.69970992913,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 347.64522,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 66.12764999999999,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.146422,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 192.54012500000002,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 70.978235,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 795.0798748058121,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 701.600874805812,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 93.479,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 489.8315099999999,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 329.34,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 141.04553000000004,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 811.84,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1159.9495686676119,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 2369.5200574557057,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 1556.7552833522325,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 5898.751983465628,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 28.91545663118356,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 19.724820944507442,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 4020.5215852019837,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 858.9639999999999,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.8721,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.4193461889014884,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 7.337144813061659,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 21.419181963004966,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.5750992833522328,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 326.91009445074417,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 352.8840944507442,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.6667999999999998,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 3.44,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 141.02290000000002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 32.2956,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 952.2054011438698,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 327.0849854964565,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 534.8388,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 330.6382499999999,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 265.0266249352707,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 373.916,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 282.0910600000001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 270.61333333333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 48.331232027817165,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 236.95200574557057,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 370.6560198457696,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 125.5053613503325,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 160.64142572879757,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 179.31655404097674,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 574.3602264574263,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 95.44044444444444,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 2.080111111111111,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 118.27884907512404,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 564.3957548508969,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 133.86988726878104,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 121.16148333478715,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 81.72752361268604,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 69.44999999999999,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 22.933333333333334,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 940.1526666666668,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 26.913,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 347.64522,
                        "hasRDI": true,
                        "daily": 534.8388,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 66.12764999999999,
                                "hasRDI": true,
                                "daily": 330.6382499999999,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.146422,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 192.54012500000002,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 70.978235,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 795.0798748058121,
                        "hasRDI": true,
                        "daily": 265.0266249352707,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 701.600874805812,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 93.479,
                                "hasRDI": true,
                                "daily": 373.916,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 489.8315099999999,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 329.34,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 141.04553000000004,
                        "hasRDI": true,
                        "daily": 282.0910600000001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 811.84,
                        "hasRDI": true,
                        "daily": 270.61333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1159.9495686676119,
                        "hasRDI": true,
                        "daily": 48.331232027817165,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 2369.5200574557057,
                        "hasRDI": true,
                        "daily": 236.95200574557057,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 1556.7552833522325,
                        "hasRDI": true,
                        "daily": 370.6560198457696,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 5898.751983465628,
                        "hasRDI": true,
                        "daily": 125.5053613503325,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 28.91545663118356,
                        "hasRDI": true,
                        "daily": 160.64142572879757,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 19.724820944507442,
                        "hasRDI": true,
                        "daily": 179.31655404097674,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 4020.5215852019837,
                        "hasRDI": true,
                        "daily": 574.3602264574263,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 858.9639999999999,
                        "hasRDI": true,
                        "daily": 95.44044444444444,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.8721,
                        "hasRDI": true,
                        "daily": 2.080111111111111,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.4193461889014884,
                        "hasRDI": true,
                        "daily": 118.27884907512404,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 7.337144813061659,
                        "hasRDI": true,
                        "daily": 564.3957548508969,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 21.419181963004966,
                        "hasRDI": true,
                        "daily": 133.86988726878104,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.5750992833522328,
                        "hasRDI": true,
                        "daily": 121.16148333478715,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 326.91009445074417,
                        "hasRDI": true,
                        "daily": 81.72752361268604,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 352.8840944507442,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.6667999999999998,
                        "hasRDI": true,
                        "daily": 69.44999999999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 3.44,
                        "hasRDI": true,
                        "daily": 22.933333333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 141.02290000000002,
                        "hasRDI": true,
                        "daily": 940.1526666666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 32.2956,
                        "hasRDI": true,
                        "daily": 26.913,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 952.2054011438698,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/8a2791033c2774e83a56b56b87783ddc?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0f27fa294405155d5ee9b2c5d3c2f888",
                "label": "Apple Tart with Almond Paste",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b26/b26022bcfd5ca905b0ec6bc1abead215.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5061f153b1b6e7980a436b8df14c7505443ea6d64f8a7b881bd4f56099c96c31",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b26/b26022bcfd5ca905b0ec6bc1abead215-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7cf47ecbb137f3e411da332d74ea2fb653c59ff9334ac7a86a4f84d6e9917fd5",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b26/b26022bcfd5ca905b0ec6bc1abead215-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ec799557832faadf939fa8dd2acfc4c7589d577c56e7c9297df97400993115e",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b26/b26022bcfd5ca905b0ec6bc1abead215.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5061f153b1b6e7980a436b8df14c7505443ea6d64f8a7b881bd4f56099c96c31",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b26/b26022bcfd5ca905b0ec6bc1abead215-l.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dc6909d83d9df33e20c27c897c741614e627d8f33da06f50c181b41a8de1aa73",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Food52",
                "url": "https://food52.com/recipes/10306-apple-tart-with-almond-paste",
                "shareAs": "http://www.edamam.com/recipe/apple-tart-with-almond-paste-0f27fa294405155d5ee9b2c5d3c2f888/apple%2Calmond",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 1/2 cup flour",
                    "7 tablespoons butter",
                    "1/2 cup sugar",
                    "1/4 teaspoon salt",
                    "Almond mixture (see recipe below)",
                    "4 apples",
                    "2 tablespoons sugar",
                    "2 teaspoons vanilla",
                    "1 tablespoon korintje cinnamon",
                    "Almond slices",
                    "7 ounces tube of almond paste",
                    "1 cup sugar",
                    "14 tablespoons butter",
                    "1/2 cup wheat flour",
                    "2 eggs"
                ],
                "ingredients": [
                    {
                        "text": "1 1/2 cup flour",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "flour",
                        "weight": 187.5,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "7 tablespoons butter",
                        "quantity": 7.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 99.39999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1/2 cup sugar",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 100.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1/4 teaspoon salt",
                        "quantity": 0.25,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 1.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "4 apples",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "apples",
                        "weight": 728.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "2 tablespoons sugar",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 24.9999999995774,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "2 teaspoons vanilla",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "vanilla",
                        "weight": 8.4,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "1 tablespoon korintje cinnamon",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "cinnamon",
                        "weight": 7.8,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    },
                    {
                        "text": "Almond slices",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Almond",
                        "weight": 0.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "7 ounces tube of almond paste",
                        "quantity": 7.0,
                        "measure": "ounce",
                        "food": "almond paste",
                        "weight": 198.44666187500002,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bxecircbdyigilbaxjpllb1sjegx",
                        "image": "https://www.edamam.com/food-img/e03/e03f6b7a81c44a9a829653a01c00ea83.jpg"
                    },
                    {
                        "text": "1 cup sugar",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 200.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "14 tablespoons butter",
                        "quantity": 14.0,
                        "measure": "tablespoon",
                        "food": "butter",
                        "weight": 198.79999999999998,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1/2 cup wheat flour",
                        "quantity": 0.5,
                        "measure": "cup",
                        "food": "wheat flour",
                        "weight": 62.5,
                        "foodCategory": "grains",
                        "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                        "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
                    },
                    {
                        "text": "2 eggs",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 86.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    }
                ],
                "calories": 5759.727711385864,
                "totalCO2Emissions": 9759.515104604898,
                "co2EmissionsClass": "F",
                "totalWeight": 1903.3466618745774,
                "totalTime": 0.0,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 5759.727711385864,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 308.77788533937496,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 159.1210372073125,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.03268,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 108.93528713749997,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 23.577435721125,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 719.2148243758274,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 681.3255846058274,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 37.88923977,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 474.2994715983283,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 324.34999999957824,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 59.18995956875,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 961.05,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 771.8481995687457,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 624.7702584249959,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 371.3676604375,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1912.5005182874918,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 11.533626589999788,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 6.541970595749958,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1109.4163876375,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 2200.298,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 33.982846661875,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.0540612627375,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.9619351801624196,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 9.840856598625,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.6495747982750001,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 447.16506316875,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 283.41506316875,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 96.25,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 1.2723399999999998,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 1.72,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 36.359149353125,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 40.3316,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 800.052579324375,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 287.9863855692932,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 475.0429005221153,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 795.6051860365625,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 239.73827479194247,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 151.55695908,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 118.3799191375,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 320.35,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 32.16034164869774,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 62.477025842499586,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 88.42087153273808,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 40.69150038909557,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 64.0757032777766,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 59.472459961363256,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 158.48805537678572,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 244.47755555555554,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 37.758718513194445,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 87.83843856145833,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 150.91809078172457,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 61.50535374140625,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 49.967292175000004,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 111.7912657921875,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 53.01416666666666,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 11.466666666666667,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 242.39432902083334,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 33.60966666666667,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 308.77788533937496,
                        "hasRDI": true,
                        "daily": 475.0429005221153,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 159.1210372073125,
                                "hasRDI": true,
                                "daily": 795.6051860365625,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.03268,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 108.93528713749997,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 23.577435721125,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 719.2148243758274,
                        "hasRDI": true,
                        "daily": 239.73827479194247,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 681.3255846058274,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 37.88923977,
                                "hasRDI": true,
                                "daily": 151.55695908,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 474.2994715983283,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 324.34999999957824,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 59.18995956875,
                        "hasRDI": true,
                        "daily": 118.3799191375,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 961.05,
                        "hasRDI": true,
                        "daily": 320.35,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 771.8481995687457,
                        "hasRDI": true,
                        "daily": 32.16034164869774,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 624.7702584249959,
                        "hasRDI": true,
                        "daily": 62.477025842499586,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 371.3676604375,
                        "hasRDI": true,
                        "daily": 88.42087153273808,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1912.5005182874918,
                        "hasRDI": true,
                        "daily": 40.69150038909557,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 11.533626589999788,
                        "hasRDI": true,
                        "daily": 64.0757032777766,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 6.541970595749958,
                        "hasRDI": true,
                        "daily": 59.472459961363256,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1109.4163876375,
                        "hasRDI": true,
                        "daily": 158.48805537678572,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 2200.298,
                        "hasRDI": true,
                        "daily": 244.47755555555554,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 33.982846661875,
                        "hasRDI": true,
                        "daily": 37.758718513194445,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.0540612627375,
                        "hasRDI": true,
                        "daily": 87.83843856145833,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.9619351801624196,
                        "hasRDI": true,
                        "daily": 150.91809078172457,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 9.840856598625,
                        "hasRDI": true,
                        "daily": 61.50535374140625,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.6495747982750001,
                        "hasRDI": true,
                        "daily": 49.967292175000004,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 447.16506316875,
                        "hasRDI": true,
                        "daily": 111.7912657921875,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 283.41506316875,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 96.25,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 1.2723399999999998,
                        "hasRDI": true,
                        "daily": 53.01416666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 1.72,
                        "hasRDI": true,
                        "daily": 11.466666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 36.359149353125,
                        "hasRDI": true,
                        "daily": 242.39432902083334,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 40.3316,
                        "hasRDI": true,
                        "daily": 33.60966666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 800.052579324375,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/0f27fa294405155d5ee9b2c5d3c2f888?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_de1b400af89f6fc82dc377f616df0113",
                "label": "Apple Sandwiches recipes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/03e/03e46462ae659189b9890a6d5a8f1f22?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=818fce2571e2f01d7f022926410ea1abf01d91cd020a94bf42d4ddb2224d1396",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/03e/03e46462ae659189b9890a6d5a8f1f22-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7e647de2e24b1f726bc4506093ce2dd402ac9f290361f75918139e09932e0acc",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/03e/03e46462ae659189b9890a6d5a8f1f22-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f5885f0e9be43abe250fc8422fd481305ce7bab92f4e5ddc5c7913a03a48c201",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/03e/03e46462ae659189b9890a6d5a8f1f22?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=818fce2571e2f01d7f022926410ea1abf01d91cd020a94bf42d4ddb2224d1396",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Food & Wine",
                "url": "http://www.foodandwine.com/recipes/apple-sandwiches",
                "shareAs": "http://www.edamam.com/recipe/apple-sandwiches-recipes-de1b400af89f6fc82dc377f616df0113/apple%2Calmond",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 apple, thinly sliced horizontally",
                    "2 tablespoons almond butter",
                    "2 tablespoons granola"
                ],
                "ingredients": [
                    {
                        "text": "1 apple, thinly sliced horizontally",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "apple",
                        "weight": 182.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "2 tablespoons almond butter",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "almond butter",
                        "weight": 32.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
                        "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
                    },
                    {
                        "text": "2 tablespoons granola",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "granola",
                        "weight": 15.249999999742169,
                        "foodCategory": "ready-to-eat cereals",
                        "foodId": "food_b34qe9ya35sl0oawlmwdmaalkwhh",
                        "image": "https://www.edamam.com/food-img/c1d/c1ddb4084dd26bd5fa47e01bb49ed6a8.jpg"
                    }
                ],
                "calories": 365.6924999987392,
                "totalCO2Emissions": 115.96249999959522,
                "co2EmissionsClass": "A",
                "totalWeight": 229.24999999974216,
                "totalTime": 15.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "sandwiches"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 365.6924999987392,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 21.775149999937348,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1.98285999998979,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.003507499999940699,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 12.05823999997164,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.635844999979863,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 39.351749999861035,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 30.330499999883983,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 9.021249999977053,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 23.36509999994895,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 9.282449999964676,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 8.024999999932964,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 133.54999999980407,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 123.99999999956684,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 516.2974999986103,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 1.9375749999898155,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 1.7615249999892484,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 248.30749999888877,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 5.612499999997421,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8.554999999996905,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.1276299999985871,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.4017849999990873,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.5946699999929357,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.16400499999904605,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 35.22999999978342,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 35.22999999978342,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 9.764349999971381,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.812249999986335,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 157.20739999998494,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 18.284624999936963,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 33.50023076913438,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 9.91429999994895,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 13.117249999953678,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 36.08499999990821,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 18.564899999929352,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 0.3343749999972069,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 13.354999999980407,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 29.52380952370639,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 10.985053191459793,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.764305555498975,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 16.013863636265896,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 35.472499999841254,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.6236111111108246,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 9.505555555552117,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 10.635833333215592,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 30.90653846146825,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 9.966687499955848,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 12.615769230695848,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 8.807499999945856,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 65.09566666647588,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 4.010208333321946,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 21.775149999937348,
                        "hasRDI": true,
                        "daily": 33.50023076913438,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 1.98285999998979,
                                "hasRDI": true,
                                "daily": 9.91429999994895,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.003507499999940699,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 12.05823999997164,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.635844999979863,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 39.351749999861035,
                        "hasRDI": true,
                        "daily": 13.117249999953678,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 30.330499999883983,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 9.021249999977053,
                                "hasRDI": true,
                                "daily": 36.08499999990821,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 23.36509999994895,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 9.282449999964676,
                        "hasRDI": true,
                        "daily": 18.564899999929352,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 8.024999999932964,
                        "hasRDI": true,
                        "daily": 0.3343749999972069,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 133.54999999980407,
                        "hasRDI": true,
                        "daily": 13.354999999980407,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 123.99999999956684,
                        "hasRDI": true,
                        "daily": 29.52380952370639,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 516.2974999986103,
                        "hasRDI": true,
                        "daily": 10.985053191459793,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 1.9375749999898155,
                        "hasRDI": true,
                        "daily": 10.764305555498975,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 1.7615249999892484,
                        "hasRDI": true,
                        "daily": 16.013863636265896,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 248.30749999888877,
                        "hasRDI": true,
                        "daily": 35.472499999841254,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 5.612499999997421,
                        "hasRDI": true,
                        "daily": 0.6236111111108246,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 8.554999999996905,
                        "hasRDI": true,
                        "daily": 9.505555555552117,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.1276299999985871,
                        "hasRDI": true,
                        "daily": 10.635833333215592,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.4017849999990873,
                        "hasRDI": true,
                        "daily": 30.90653846146825,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 1.5946699999929357,
                        "hasRDI": true,
                        "daily": 9.966687499955848,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.16400499999904605,
                        "hasRDI": true,
                        "daily": 12.615769230695848,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 35.22999999978342,
                        "hasRDI": true,
                        "daily": 8.807499999945856,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 35.22999999978342,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 9.764349999971381,
                        "hasRDI": true,
                        "daily": 65.09566666647588,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 4.812249999986335,
                        "hasRDI": true,
                        "daily": 4.010208333321946,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 157.20739999998494,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/de1b400af89f6fc82dc377f616df0113?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b591674d1db2a37ddb875fcdfd6bf181",
                "label": "Almond & apple tart",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a9b/a9bf53064b1bc7bca0e54766861012e8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16a53f294d2c712892ee81f094e6dd8896a04d39f941511966df087e8d2a99bf",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9b/a9bf53064b1bc7bca0e54766861012e8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5a1db62bbaf2394d8c610c1640a0813a62b6ebf50b999aca5e6c7efa6bfc0122",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9b/a9bf53064b1bc7bca0e54766861012e8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bb283797897b9e9de0e2ac6d0a9e877a2c7d3bb99555dcb6e42d60c2997c3d22",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9b/a9bf53064b1bc7bca0e54766861012e8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16a53f294d2c712892ee81f094e6dd8896a04d39f941511966df087e8d2a99bf",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "BBC Good Food",
                "url": "https://www.bbcgoodfood.com/recipes/almond-apple-tart",
                "shareAs": "http://www.edamam.com/recipe/almond-apple-tart-b591674d1db2a37ddb875fcdfd6bf181/apple%2Calmond",
                "yield": 8.0,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "4 Royal Gala apples",
                    "icing sugar to cover",
                    "165g butter , softened",
                    "80g caster sugar",
                    "265g plain flour , plus extra for dusting",
                    "1 egg yolk , lightly beaten",
                    "100g butter",
                    "100g icing sugar , sieved",
                    "2 large eggs",
                    "100g ground almonds",
                    "50ml Calvados",
                    "250ml double cream",
                    "50g icing sugar",
                    "50ml Calvados",
                    "½ vanilla pod , halved lengthways and seeds scraped out"
                ],
                "ingredients": [
                    {
                        "text": "4 Royal Gala apples",
                        "quantity": 4.0,
                        "measure": "<unit>",
                        "food": "Gala apples",
                        "weight": 721.7777777777778,
                        "foodCategory": "fruit",
                        "foodId": "food_bfh0qoxboaspbtbj3gqnkafdf2r9",
                        "image": "https://www.edamam.com/food-img/256/2568844fd3c89a9fa6ef0a07757ed572.jpg"
                    },
                    {
                        "text": "icing sugar to cover",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "icing sugar",
                        "weight": 24.523942760211586,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    },
                    {
                        "text": "165g butter , softened",
                        "quantity": 165.0,
                        "measure": "gram",
                        "food": "butter",
                        "weight": 165.0,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "80g caster sugar",
                        "quantity": 80.0,
                        "measure": "gram",
                        "food": "caster sugar",
                        "weight": 80.0,
                        "foodCategory": "sugars",
                        "foodId": "food_b83hz1dbrydiwzag8btahb15lu4l",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "265g plain flour , plus extra for dusting",
                        "quantity": 265.0,
                        "measure": "gram",
                        "food": "flour",
                        "weight": 265.0,
                        "foodCategory": "grains",
                        "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                        "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                    },
                    {
                        "text": "1 egg yolk , lightly beaten",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "egg yolk",
                        "weight": 13.466666666666667,
                        "foodCategory": "Eggs",
                        "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                        "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
                    },
                    {
                        "text": "100g butter",
                        "quantity": 100.0,
                        "measure": "gram",
                        "food": "butter",
                        "weight": 100.0,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "100g icing sugar , sieved",
                        "quantity": 100.0,
                        "measure": "gram",
                        "food": "icing sugar",
                        "weight": 100.0,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    },
                    {
                        "text": "2 large eggs",
                        "quantity": 2.0,
                        "measure": "<unit>",
                        "food": "eggs",
                        "weight": 100.0,
                        "foodCategory": "Eggs",
                        "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                        "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                    },
                    {
                        "text": "100g ground almonds",
                        "quantity": 100.0,
                        "measure": "gram",
                        "food": "almonds",
                        "weight": 100.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    },
                    {
                        "text": "50ml Calvados",
                        "quantity": 50.0,
                        "measure": "milliliter",
                        "food": "Calvados",
                        "weight": 47.00149155556177,
                        "foodCategory": "liquors and cocktails",
                        "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
                        "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
                    },
                    {
                        "text": "250ml double cream",
                        "quantity": 250.0,
                        "measure": "milliliter",
                        "food": "cream",
                        "weight": 251.91446912873033,
                        "foodCategory": "Dairy",
                        "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
                        "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                    },
                    {
                        "text": "50g icing sugar",
                        "quantity": 50.0,
                        "measure": "gram",
                        "food": "icing sugar",
                        "weight": 50.0,
                        "foodCategory": "sugars",
                        "foodId": "food_b7rbtshahirxisbtyc77sbv8jdue",
                        "image": "https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg"
                    },
                    {
                        "text": "50ml Calvados",
                        "quantity": 50.0,
                        "measure": "milliliter",
                        "food": "Calvados",
                        "weight": 47.00149155556177,
                        "foodCategory": "liquors and cocktails",
                        "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
                        "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
                    },
                    {
                        "text": "½ vanilla pod , halved lengthways and seeds scraped out",
                        "quantity": 0.5,
                        "measure": "<unit>",
                        "food": "vanilla",
                        "weight": 2.5,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    }
                ],
                "calories": 6110.780223361602,
                "totalCO2Emissions": 14744.287907062506,
                "co2EmissionsClass": "F",
                "totalWeight": 2068.1858394445103,
                "totalTime": 135.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 6110.780223361602,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 372.2994233554716,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 200.39239456627465,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 3.1767394171962557,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 122.00061669071447,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 27.801707165321066,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 585.685274686836,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 549.4293857979471,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 36.25588888888889,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 338.9301207402681,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 250.52441601948695,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 74.44901536770038,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 1371.8533501154652,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 264.60419312885045,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 665.3302334970086,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 400.29623506123335,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 2262.337950856387,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.284503361362637,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 7.844520535651646,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1310.7360669746643,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 3066.49424589686,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.511486814772382,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7789516283679689,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 2.601613425966454,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 7.847435981380166,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.9221145384706114,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 197.58791209848252,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 219.24124543181588,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.0061631506059685,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 6.757831506059686,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 36.92125311598432,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 37.18364078989715,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 991.0964405076342,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 305.5390111680801,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 572.7683436238025,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 1001.9619728313731,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 195.228424895612,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 145.02355555555556,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 148.89803073540077,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 457.28445003848844,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 11.025174713702102,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 66.53302334970085,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 95.30862739553174,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 48.134850018221,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 57.136129785347975,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 71.31382305137859,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 187.2480095678092,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 340.7215828774289,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 1.6794297941915355,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 64.91263569733076,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 200.12410968972722,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 49.04647488362604,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 70.93188757466241,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 49.39697802462063,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 83.5901312752487,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 45.0522100403979,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 246.1416874398955,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 30.98636732491429,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 372.2994233554716,
                        "hasRDI": true,
                        "daily": 572.7683436238025,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 200.39239456627465,
                                "hasRDI": true,
                                "daily": 1001.9619728313731,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 3.1767394171962557,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 122.00061669071447,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 27.801707165321066,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 585.685274686836,
                        "hasRDI": true,
                        "daily": 195.228424895612,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 549.4293857979471,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 36.25588888888889,
                                "hasRDI": true,
                                "daily": 145.02355555555556,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 338.9301207402681,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 250.52441601948695,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 74.44901536770038,
                        "hasRDI": true,
                        "daily": 148.89803073540077,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 1371.8533501154652,
                        "hasRDI": true,
                        "daily": 457.28445003848844,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 264.60419312885045,
                        "hasRDI": true,
                        "daily": 11.025174713702102,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 665.3302334970086,
                        "hasRDI": true,
                        "daily": 66.53302334970085,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 400.29623506123335,
                        "hasRDI": true,
                        "daily": 95.30862739553174,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 2262.337950856387,
                        "hasRDI": true,
                        "daily": 48.134850018221,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.284503361362637,
                        "hasRDI": true,
                        "daily": 57.136129785347975,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 7.844520535651646,
                        "hasRDI": true,
                        "daily": 71.31382305137859,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1310.7360669746643,
                        "hasRDI": true,
                        "daily": 187.2480095678092,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 3066.49424589686,
                        "hasRDI": true,
                        "daily": 340.7215828774289,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 1.511486814772382,
                        "hasRDI": true,
                        "daily": 1.6794297941915355,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7789516283679689,
                        "hasRDI": true,
                        "daily": 64.91263569733076,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 2.601613425966454,
                        "hasRDI": true,
                        "daily": 200.12410968972722,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 7.847435981380166,
                        "hasRDI": true,
                        "daily": 49.04647488362604,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.9221145384706114,
                        "hasRDI": true,
                        "daily": 70.93188757466241,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 197.58791209848252,
                        "hasRDI": true,
                        "daily": 49.39697802462063,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 219.24124543181588,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.0061631506059685,
                        "hasRDI": true,
                        "daily": 83.5901312752487,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 6.757831506059686,
                        "hasRDI": true,
                        "daily": 45.0522100403979,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 36.92125311598432,
                        "hasRDI": true,
                        "daily": 246.1416874398955,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 37.18364078989715,
                        "hasRDI": true,
                        "daily": 30.98636732491429,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 991.0964405076342,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/b591674d1db2a37ddb875fcdfd6bf181?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8f2154840a2d67615b7492aa7982b060",
                "label": "Bread Baking: Cinnamon Apple Sweet Rolls Recipe",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/dbf/dbfd553a0e5a47daaba5c19d4a267d6f.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=555eb59770f77993fe211dcc9ecb715d034ab97f9b0de518d1edfb1519785a5c",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dbf/dbfd553a0e5a47daaba5c19d4a267d6f-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8418d91bcc963d2e7a2abbab770fc2b72bd0fe74ac87b9bc82dcb0344a4d88c3",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dbf/dbfd553a0e5a47daaba5c19d4a267d6f-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=07a577ac1fe5f946537af2ebb9386b4c78685629f553f8413e7a34fdc87554a8",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dbf/dbfd553a0e5a47daaba5c19d4a267d6f.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=555eb59770f77993fe211dcc9ecb715d034ab97f9b0de518d1edfb1519785a5c",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Serious Eats",
                "url": "https://www.seriouseats.com/recipes/2011/09/bread-baking-cinnamon-apple-sweet-rolls.html",
                "shareAs": "http://www.edamam.com/recipe/bread-baking-cinnamon-apple-sweet-rolls-recipe-8f2154840a2d67615b7492aa7982b060/apple%2Calmond",
                "yield": 9.0,
                "dietLabels": [],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 teaspoon instant yeast",
                    "2 1/2 cups (11 1/4 ounces) bread flour",
                    "2 tablespoons plus 1/4 cup sugar, divided",
                    "1 teaspoon salt",
                    "7 tablespoons unsalted butter, divided",
                    "1 teaspoon almond extract",
                    "1 cup cold water",
                    "1 apple (use an apple variety that's good for baking)",
                    "1 tablespoon cinnamon"
                ],
                "ingredients": [
                    {
                        "text": "1 teaspoon instant yeast",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "yeast",
                        "weight": 4.0,
                        "foodCategory": "condiments and sauces",
                        "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
                        "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
                    },
                    {
                        "text": "2 1/2 cups (11 1/4 ounces) bread flour",
                        "quantity": 11.25,
                        "measure": "ounce",
                        "food": "bread flour",
                        "weight": 318.93213515625,
                        "foodCategory": "grains",
                        "foodId": "food_b5xk0gwa3clakbaap10sta82dgdk",
                        "image": "https://www.edamam.com/food-img/132/1328fd505cdd3b75fbb8d7b58de5427c.jpg"
                    },
                    {
                        "text": "2 tablespoons plus 1/4 cup sugar, divided",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "sugar",
                        "weight": 24.9999999995774,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "2 tablespoons plus 1/4 cup sugar, divided",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "sugar",
                        "weight": 50.0,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    },
                    {
                        "text": "1 teaspoon salt",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "salt",
                        "weight": 6.0,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "7 tablespoons unsalted butter, divided",
                        "quantity": 7.0,
                        "measure": "tablespoon",
                        "food": "unsalted butter",
                        "weight": 99.39999999999999,
                        "foodCategory": "Dairy",
                        "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                        "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
                    },
                    {
                        "text": "1 teaspoon almond extract",
                        "quantity": 1.0,
                        "measure": "teaspoon",
                        "food": "almond extract",
                        "weight": 4.2,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_akzcb47a1rd7udato049aak1z46h",
                        "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
                    },
                    {
                        "text": "1 cup cold water",
                        "quantity": 1.0,
                        "measure": "cup",
                        "food": "water",
                        "weight": 236.5882365,
                        "foodCategory": "water",
                        "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                    },
                    {
                        "text": "1 apple (use an apple variety that's good for baking)",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "apple",
                        "weight": 182.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "1 tablespoon cinnamon",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "cinnamon",
                        "weight": 7.8,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                        "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
                    }
                ],
                "calories": 2293.295007912427,
                "totalCO2Emissions": 3411.39749219396,
                "co2EmissionsClass": "D",
                "totalWeight": 933.3979904540621,
                "totalTime": 195.0,
                "cuisineType": [
                    "american"
                ],
                "mealType": [
                    "breakfast",
                    "lunch/dinner"
                ],
                "dishType": [
                    "bread"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2293.295007912427,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 86.62071344359374,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 51.09348440978124,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 23.910852989218743,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 5.409548622585937,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 339.8654379878586,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 322.62526674410856,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 17.240171243749998,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 95.52478961856262,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 74.84999999957824,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 41.51969621875,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 213.70999999999998,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 2157.860265878194,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 171.4400958800096,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 100.58569234204484,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 617.5003446601004,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 15.099563302424588,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.374779591276318,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 383.96417110156256,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 686.526,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 8.6804,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 3.0678169374687507,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.8954865319999197,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 26.016334204296875,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.26902289000781254,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 1021.03454925,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 207.75760460156252,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 478.398202734375,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.17178,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.090368540625,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 14.368396405468749,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 454.24850961203384,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 114.66475039562135,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 133.2626360670673,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 255.4674220489062,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 113.2884793292862,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 68.96068497499999,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 83.0393924375,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 71.23666666666665,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 89.91084441159141,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 17.144009588000962,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 23.948974367153532,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 13.138305205534051,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 83.88646279124771,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 30.679814466148343,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 54.85202444308036,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 76.28066666666666,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 9.64488888888889,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 255.65141145572923,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 145.80665630768613,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 162.60208877685548,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 20.694068462139427,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 255.25863731249999,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 7.157499999999999,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 27.269123604166666,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 11.973663671223958,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 86.62071344359374,
                        "hasRDI": true,
                        "daily": 133.2626360670673,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 51.09348440978124,
                                "hasRDI": true,
                                "daily": 255.4674220489062,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 23.910852989218743,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 5.409548622585937,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 339.8654379878586,
                        "hasRDI": true,
                        "daily": 113.2884793292862,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 322.62526674410856,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 17.240171243749998,
                                "hasRDI": true,
                                "daily": 68.96068497499999,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 95.52478961856262,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 74.84999999957824,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 41.51969621875,
                        "hasRDI": true,
                        "daily": 83.0393924375,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 213.70999999999998,
                        "hasRDI": true,
                        "daily": 71.23666666666665,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 2157.860265878194,
                        "hasRDI": true,
                        "daily": 89.91084441159141,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 171.4400958800096,
                        "hasRDI": true,
                        "daily": 17.144009588000962,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 100.58569234204484,
                        "hasRDI": true,
                        "daily": 23.948974367153532,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 617.5003446601004,
                        "hasRDI": true,
                        "daily": 13.138305205534051,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 15.099563302424588,
                        "hasRDI": true,
                        "daily": 83.88646279124771,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.374779591276318,
                        "hasRDI": true,
                        "daily": 30.679814466148343,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 383.96417110156256,
                        "hasRDI": true,
                        "daily": 54.85202444308036,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 686.526,
                        "hasRDI": true,
                        "daily": 76.28066666666666,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 8.6804,
                        "hasRDI": true,
                        "daily": 9.64488888888889,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 3.0678169374687507,
                        "hasRDI": true,
                        "daily": 255.65141145572923,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.8954865319999197,
                        "hasRDI": true,
                        "daily": 145.80665630768613,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 26.016334204296875,
                        "hasRDI": true,
                        "daily": 162.60208877685548,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.26902289000781254,
                        "hasRDI": true,
                        "daily": 20.694068462139427,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 1021.03454925,
                        "hasRDI": true,
                        "daily": 255.25863731249999,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 207.75760460156252,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 478.398202734375,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.17178,
                        "hasRDI": true,
                        "daily": 7.157499999999999,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 4.090368540625,
                        "hasRDI": true,
                        "daily": 27.269123604166666,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 14.368396405468749,
                        "hasRDI": true,
                        "daily": 11.973663671223958,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 454.24850961203384,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/8f2154840a2d67615b7492aa7982b060?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bf88a74003fc97c063ff013178fda30f",
                "label": "Apple And Strawberry Galettes",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/881/8816b3363e7e8638a2bdf01bd0dfebae.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e47682b695656edd362ab8f340b50392ea7106bc03fa55fc476583dfe39f3a2a",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/881/8816b3363e7e8638a2bdf01bd0dfebae-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=906917fee8dd6bf6cbae8b57a87b21890d700ffe6fde5c468ba998c2a7884364",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/881/8816b3363e7e8638a2bdf01bd0dfebae-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=197bda798b15d0374977a97c6aac008521d0234b5ce452e1189ce75b61fd9739",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/881/8816b3363e7e8638a2bdf01bd0dfebae.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e47682b695656edd362ab8f340b50392ea7106bc03fa55fc476583dfe39f3a2a",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/881/8816b3363e7e8638a2bdf01bd0dfebae-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2f58bc5bb566ffa2a8eeb747be58db5e4c5b29287ed1211d231905354d528ede",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Donna Hay",
                "url": "http://www.donnahay.com.au/recipes/sweets/fruit/apple-and-strawberry-galettes",
                "shareAs": "http://www.edamam.com/recipe/apple-and-strawberry-galettes-bf88a74003fc97c063ff013178fda30f/apple%2Calmond",
                "yield": 10.0,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Low Potassium",
                    "Kidney-Friendly",
                    "Vegetarian",
                    "Pescatarian",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites",
                    "FODMAP"
                ],
                "ingredientLines": [
                    "360 g ready prepared puff pastry, thawed",
                    "4 tablespoons strawberry jam",
                    "¼ cup (30g) almond meal",
                    "1 apple, thinly sliced",
                    "100 g strawberries, thinly sliced",
                    "1 tablespoon white sugar"
                ],
                "ingredients": [
                    {
                        "text": "360 g ready prepared puff pastry, thawed",
                        "quantity": 360.0,
                        "measure": "gram",
                        "food": "puff pastry",
                        "weight": 360.0,
                        "foodCategory": "quick breads and pastries",
                        "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
                        "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
                    },
                    {
                        "text": "4 tablespoons strawberry jam",
                        "quantity": 4.0,
                        "measure": "tablespoon",
                        "food": "strawberry jam",
                        "weight": 80.0,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_bzsx4atbph30cebveok2ebmgwrq8",
                        "image": "https://www.edamam.com/food-img/42b/42ba8bb2c0e13f6e69b3af18f0f641ae.jpg"
                    },
                    {
                        "text": "¼ cup (30g) almond meal",
                        "quantity": 30.0,
                        "measure": "gram",
                        "food": "almond meal",
                        "weight": 30.0,
                        "foodCategory": "grains",
                        "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
                        "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
                    },
                    {
                        "text": "1 apple, thinly sliced",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "apple",
                        "weight": 182.0,
                        "foodCategory": "fruit",
                        "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
                    },
                    {
                        "text": "100 g strawberries, thinly sliced",
                        "quantity": 100.0,
                        "measure": "gram",
                        "food": "strawberries",
                        "weight": 100.0,
                        "foodCategory": "fruit",
                        "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
                        "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
                    },
                    {
                        "text": "1 tablespoon white sugar",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "white sugar",
                        "weight": 12.4999999997887,
                        "foodCategory": "sugars",
                        "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                        "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                    }
                ],
                "calories": 2556.6049999991824,
                "totalCO2Emissions": 1105.359999999324,
                "co2EmissionsClass": "B",
                "totalWeight": 764.4999999997887,
                "totalTime": 0.0,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2556.6049999991824,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 152.81340000000003,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 35.812960000000004,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 77.84614,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 17.85182,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 268.4879999997887,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 252.73499999978873,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 15.753,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 78.79199999978913,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 51.27499999978913,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 34.4302,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 925.4819999999979,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 100.04499999999788,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 82.9,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 847.6739999999959,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.566649999999896,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 2.1700499999999794,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 417.66299999999995,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 6.46,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 74.212,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.50054,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.1512949999999598,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 15.59242,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.21322000000000002,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 484.66,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 85.06,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 234.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 2.6576,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 64.164,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 301.79449999999997,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 127.83024999995912,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 235.09753846153853,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 179.06480000000002,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 89.49599999992957,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 63.012,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 68.8604,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 38.56174999999991,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 10.004499999999789,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 19.738095238095237,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 18.035617021276508,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 58.703611111110526,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 19.727727272727087,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 59.66614285714285,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 0.7177777777777777,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 82.45777777777779,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 125.045,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 88.56115384615075,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 97.452625,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 16.401538461538465,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 121.165,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 17.717333333333332,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 53.470000000000006,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 152.81340000000003,
                        "hasRDI": true,
                        "daily": 235.09753846153853,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 35.812960000000004,
                                "hasRDI": true,
                                "daily": 179.06480000000002,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 77.84614,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 17.85182,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 268.4879999997887,
                        "hasRDI": true,
                        "daily": 89.49599999992957,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 252.73499999978873,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 15.753,
                                "hasRDI": true,
                                "daily": 63.012,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 78.79199999978913,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 51.27499999978913,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 34.4302,
                        "hasRDI": true,
                        "daily": 68.8604,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 925.4819999999979,
                        "hasRDI": true,
                        "daily": 38.56174999999991,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 100.04499999999788,
                        "hasRDI": true,
                        "daily": 10.004499999999789,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 82.9,
                        "hasRDI": true,
                        "daily": 19.738095238095237,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 847.6739999999959,
                        "hasRDI": true,
                        "daily": 18.035617021276508,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.566649999999896,
                        "hasRDI": true,
                        "daily": 58.703611111110526,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 2.1700499999999794,
                        "hasRDI": true,
                        "daily": 19.727727272727087,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 417.66299999999995,
                        "hasRDI": true,
                        "daily": 59.66614285714285,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 6.46,
                        "hasRDI": true,
                        "daily": 0.7177777777777777,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 74.212,
                        "hasRDI": true,
                        "daily": 82.45777777777779,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.50054,
                        "hasRDI": true,
                        "daily": 125.045,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.1512949999999598,
                        "hasRDI": true,
                        "daily": 88.56115384615075,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 15.59242,
                        "hasRDI": true,
                        "daily": 97.452625,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.21322000000000002,
                        "hasRDI": true,
                        "daily": 16.401538461538465,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 484.66,
                        "hasRDI": true,
                        "daily": 121.165,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 85.06,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 234.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 2.6576,
                        "hasRDI": true,
                        "daily": 17.717333333333332,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 64.164,
                        "hasRDI": true,
                        "daily": 53.470000000000006,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 301.79449999999997,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/bf88a74003fc97c063ff013178fda30f?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2f9b4ab60eb20208cfda9d8caa6b2e87",
                "label": "Yogurt with Apple and Almonds",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/578/5789f09d3f986d4070e4c57952cee471.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7215ea85c19a429cba125bd9617dd791250f45497d83e9124ad30211555f68ab",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/578/5789f09d3f986d4070e4c57952cee471-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1dde2e56282ff8c6a4161558df51aaa74b47026bc8ab6dc6220bcf9c0156639e",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/578/5789f09d3f986d4070e4c57952cee471-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=150796453fa9edae912104847f0d9c2e9d6aa741c355a274c009703fb4a3fd74",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/578/5789f09d3f986d4070e4c57952cee471.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQCZewaoegHoGqu4fx63sZTHc2TBiOF6%2FHIL2L94tnxy2gIgaCB5l%2BVuy9fhqeTNSS%2F8%2B%2BDyKYRC1dJEaikGzJWGHikquQUIZBAAGgwxODcwMTcxNTA5ODYiDO4Nd%2BUwYMxz8dq%2FaiqWBRYETIel8yn5T6g6EBbklvkRpF2np2WTGVdLCgLud2kVgMsODoTs5x8HMhi5H5wLeQzRkGGcedTGKAfeFGgy87HsHjmZsNnbqdfks1FKGz5JgRlRmBL4pGrobWcPcDlFFbQbgcZdZh5T90tb5JpkmYufxMaKBiPPEq6J5al9Porp%2Fey%2B%2B0NjFZMkDnGoBsaPLsKmmcy%2FFIHgUu0Vq8W5e0gGz1OnrYX3EBVbNuzErz9zh4fSmYs97mdjdAQNlLJZaAGeSTZPePIAqqKjnjpSt3cALJl64edKOotQfarQHAuGkUD5lNijC6AaCKYIEE%2Fj4k5VrWP99RI7p9d3gTRCDyCYFhqNkgO1NTrPy31rF651rzMxOxGIi%2F5yPXhsOB3SOrM5joW63RJ39E%2Fjvo%2FVcOBse%2FU5uOIaENXk8%2FogpEejsr%2Ff6YpmD0fnKiIhN%2BBl2jJ4QKq5UBpKwwezzMslBhqohvhbfnj1D%2B5U8td8rzgo3%2B3N0q0U5KXccdxgFPWT6lEih17VMb36Qd0IF24%2B41HzPhVMQIwYHRhDcIsHGjnIqD6UCj1ss7ad%2FQOeXc71jEpvdKhpie8oKKIV%2FbC4PwU5P2Rkxt38NC385YPV7v3k%2FbRt%2FPbBqlrQFpz0rneNtg5s9OesJnRL8Tpaib1ML6OPSmtiRYmuwf8oqyOwHuL01bci%2BBqr39q7AsJbMRG76sQXohdJiV3vp%2Bfkzeh%2FabXiVVzPhLpQdzo%2B96EpPCxZURSOjMGE8xHxMr5ms%2BNGxHVM9yRyauOVZTxXIY%2B3rU1jLCdhuL1OaGIfvEC6dUiEEcM62HSZhSgRZ3Pz8y9vjL5lj69tEUDBAq2rRZ0VeWMk%2BWT%2FzPvZTtEMb8ipyfyLEpFpSa%2FWMIvU5akGOrEBM03hs9che5i8%2BBtz59H%2BE50o1bWgI0rhoHGkQymhwQt9ceZxV4EwzMVViHzebZe5tx18UMF9qMksXj%2F3I%2BwfSqVVG7Cqp6xSmnQfqkZkUVF7%2BDHObha1XY8oSQpQFUofUSvoo0X%2FXRk80vAkJuXoCHpwM2Lly5o%2BuZcbo8bWCxsTzLQu%2BVyHEpUI06lMOe00X%2Bnhe1h4K0kkAr6YTJ90CKftU8iWx34DNxdKD6vH7Me5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231025T194240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFAW2AOMGQ%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7215ea85c19a429cba125bd9617dd791250f45497d83e9124ad30211555f68ab",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/1154615/yogurt-apple-and-almonds",
                "shareAs": "http://www.edamam.com/recipe/yogurt-with-apple-and-almonds-2f9b4ab60eb20208cfda9d8caa6b2e87/apple%2Calmond",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Sodium"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "1 Granny Smith apple, coarsely grated",
                    "1 1/2 cups plain low-fat yogurt",
                    "1/4 cup raisins",
                    "2 tablespoons honey",
                    "1/4 cup sliced almonds (toasted, if desired)"
                ],
                "ingredients": [
                    {
                        "text": "1 Granny Smith apple, coarsely grated",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "Granny Smith apple",
                        "weight": 174.6,
                        "foodCategory": "fruit",
                        "foodId": "food_b4m99bgatuhmfybeq0d7xa9uvr1b",
                        "image": "https://www.edamam.com/food-img/288/288a6646dd6bb05a482f4405bf6e2861.jpg"
                    },
                    {
                        "text": "1 1/2 cups plain low-fat yogurt",
                        "quantity": 1.5,
                        "measure": "cup",
                        "food": "low-fat yogurt",
                        "weight": 367.5,
                        "foodCategory": "yogurt",
                        "foodId": "food_aqv00dwa9mjxm9akeqs79avn1fhk",
                        "image": "https://www.edamam.com/food-img/3de/3de016fbf55ee09cf514658062992852.jpg"
                    },
                    {
                        "text": "1/4 cup raisins",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "raisins",
                        "weight": 36.25,
                        "foodCategory": "fruit",
                        "foodId": "food_a3qcdxyb09op1hbwstv5cbmoqc3d",
                        "image": "https://www.edamam.com/food-img/159/159e247350db62e1f87b0636a53687f5.jpg"
                    },
                    {
                        "text": "2 tablespoons honey",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "honey",
                        "weight": 42.0,
                        "foodCategory": "sugar syrups",
                        "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                        "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                    },
                    {
                        "text": "1/4 cup sliced almonds (toasted, if desired)",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "almonds",
                        "weight": 23.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                        "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
                    }
                ],
                "calories": 702.0305000000001,
                "totalCO2Emissions": 9050.730499999998,
                "co2EmissionsClass": "F",
                "totalWeight": 643.35,
                "totalTime": 0.0,
                "cuisineType": [
                    "french"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "desserts"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 702.0305000000001,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 17.595615000000002,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 4.583075,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0038125,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 8.84225,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 3.0099125,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 117.93985,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 108.4608,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 9.479049999999999,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 101.73364000000001,
                        "unit": "g"
                    },
                    "SUGAR.added": {
                        "label": "Sugars, added",
                        "quantity": 34.482,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 26.260240000000003,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 22.05,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 270.331,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 768.1200000000001,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 147.195,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1529.6,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 2.234475,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.281090000000001,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 697.987,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 60.18000000000001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 3.98375,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.28044900000000006,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 1.1535725000000001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 1.800041,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.349342,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 53.197500000000005,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 58.435500000000005,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 2.0580000000000003,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 6.3560300000000005,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 7.59095,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 475.84054999999995,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 35.101525,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 27.07017692307693,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 22.915375,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 39.31328333333334,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 37.916199999999996,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 52.520480000000006,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 7.35,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 11.263791666666668,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 76.81200000000001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 35.04642857142857,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 32.54468085106383,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 12.41375,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 38.91900000000001,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 99.71242857142856,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 6.686666666666667,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 4.426388888888889,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 23.370750000000005,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 88.73634615384616,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.25025625,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 26.872461538461536,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 13.299375000000003,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 85.75000000000001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 42.373533333333334,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 6.3257916666666665,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 17.595615000000002,
                        "hasRDI": true,
                        "daily": 27.07017692307693,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 4.583075,
                                "hasRDI": true,
                                "daily": 22.915375,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0038125,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 8.84225,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 3.0099125,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 117.93985,
                        "hasRDI": true,
                        "daily": 39.31328333333334,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 108.4608,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 9.479049999999999,
                                "hasRDI": true,
                                "daily": 37.916199999999996,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 101.73364000000001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 34.482,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 26.260240000000003,
                        "hasRDI": true,
                        "daily": 52.520480000000006,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 22.05,
                        "hasRDI": true,
                        "daily": 7.35,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 270.331,
                        "hasRDI": true,
                        "daily": 11.263791666666668,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 768.1200000000001,
                        "hasRDI": true,
                        "daily": 76.81200000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 147.195,
                        "hasRDI": true,
                        "daily": 35.04642857142857,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1529.6,
                        "hasRDI": true,
                        "daily": 32.54468085106383,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 2.234475,
                        "hasRDI": true,
                        "daily": 12.41375,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.281090000000001,
                        "hasRDI": true,
                        "daily": 38.91900000000001,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 697.987,
                        "hasRDI": true,
                        "daily": 99.71242857142856,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 60.18000000000001,
                        "hasRDI": true,
                        "daily": 6.686666666666667,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 3.98375,
                        "hasRDI": true,
                        "daily": 4.426388888888889,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.28044900000000006,
                        "hasRDI": true,
                        "daily": 23.370750000000005,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 1.1535725000000001,
                        "hasRDI": true,
                        "daily": 88.73634615384616,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 1.800041,
                        "hasRDI": true,
                        "daily": 11.25025625,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.349342,
                        "hasRDI": true,
                        "daily": 26.872461538461536,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 53.197500000000005,
                        "hasRDI": true,
                        "daily": 13.299375000000003,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 58.435500000000005,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 2.0580000000000003,
                        "hasRDI": true,
                        "daily": 85.75000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 6.3560300000000005,
                        "hasRDI": true,
                        "daily": 42.373533333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 7.59095,
                        "hasRDI": true,
                        "daily": 6.3257916666666665,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 475.84054999999995,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "title": "Self",
                    "href": "https://api.edamam.com/api/recipes/v2/2f9b4ab60eb20208cfda9d8caa6b2e87?type=public&app_id=e3d8c473&app_key=a0f30334824854c4ef2db783f7a86180"
                }
            }
        }
    ]
}`);

export { dummy };
