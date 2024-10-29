$(document).ready(function () {
    $('#calorie-form').submit(function (e) {
        e.preventDefault();

        // Get form values
        const name = $('#name').val();
        const age = $('#age').val();
        const weight = $('#weight').val();
        const height = $('#height').val();
        const gender = $('#gender').val();
        const activity = $('#activity').val();

        // Calculate calorie needs (as a placeholder example)
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        const calories = bmr * activity;

        // Display result
        $('#calorie-result').text(`Your daily calorie needs are ${Math.round(calories)} calories.`);

        // Save data to localStorage
        let history = JSON.parse(localStorage.getItem('history')) || [];
        history.push({ name, age, weight, height, gender, activity, calories });
        localStorage.setItem('history', JSON.stringify(history));
    });
});
