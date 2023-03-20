let btn = document.getElementById('btn');
let output = document.getElementById('output');

let elements = [
    "Self Love Affirmations" , "Mood Tracking" , "Self Love Journaling" ,
    "Daily Reading" , "Start a Minimalist Lifestyle" , "Personal Growth Challenge",
    "Send a Daily Thank You Note" ,"Learn a New Skill" ,
    "Read a Self-Help Book", "Learn Calligraphy", "Create A self Care Plan",
    "30 Minutes a Day of Alone Time", "Go to Bed at the Same Time Every Night",
    "Enjoy one Simple Pleasure Every Day", "Practice Saying No" ,
    "Daily Meditation", "Create a New Morning Self Care Routine" , 
    "Daily Colouring", "Listen to Music" , "Practice Daily Mindfulness",
    "Daily Healthy Smoothie", "Workout for 15 Minutes a Day","Stop Eating Sugar",
    "No Takeout Food for 30 Days", "Go for a Daily Walk", "Update Your LinkedIn",
    "Complete your To-Do List everyday", "Answer all emails everyday",
    "work Towards a Big Goal a Big Goal 30min Daily", "Daily Time Blocking"

]

btn.addEventListener
(
     'click',function()
    {
    var Rand_elements = elements[Math.floor(Math.random()*elements.length)]
    output.innerHTML=Rand_elements;
    }
)