const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // const food1 = document.querySelector('#food1').value;
    // const food2 = document.querySelector('#food2').value;
    // const food3 = document.querySelector('#food3').value;
    // const food4 = document.querySelector('#food4').value;
    // const food5 = document.querySelector('#food5').value;
    // const food6 = document.querySelector('#food6').value;
    // const food7 = document.querySelector('#food7').value;
    // const food8 = document.querySelector('#food8').value;
    // const food9 = document.querySelector('#food9').value;

    // const items = {
    //     product: "z_amazon", 
    //     calories: 4.8, 
    //     carbs: 7.2, 
    //     time: "time_level_4", 
    //     dish: "fish", 
    //     heat: "optional_heat", 
    //     fat: 8.3, 
    //     no_ingredients: 4, 
    //     proteins: 9.2, 
    //     proteins_class: "fish", 
    //     cuisine: "Asian"
    // };

    const items = {
        product: "2 person",
        calories: 300.5,
        carbs: 5.9,
        time: "time_level_4",
        dish: "fish",
        heat: "optional_heat",
        fat: 4.5,
        no_ingredients: 5,
        proteins: 6.8,
        protein_class: "fish",
        cuisine: "Asian"
      }

    console.log(items);
    console.log(JSON.stringify(items))

    fetch('https://restaurant-api-sales.herokuapp.com/predict', {
        method: "POST", 
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors'
         },
         
         body: JSON.stringify(items)

     })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log(err)
        });
    
})