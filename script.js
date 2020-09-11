$(document).ready(function () {

    var submitButton = $(".submit");
    var textBox = $(".writing");
    var todoList = $(".todoList");

    var calendarItems = []

    init()

    function renderTodos() {
        textBox.text("")

        for (var i = 0; i < calendarItems.length; i++) {
            var todo = calendarItems[i].todo;

            var li = document.createElement("li");
            li.textContent = todo;
            $("#" + calendarItems[i].time).children("ul").append(li);


        }
    }


    function init() {


        var storedTodos = JSON.parse(localStorage.getItem("calendarItems"));

        if (storedTodos !== null) {
            calendarItems = storedTodos;
        }

        renderTodos();
    }

    function storedTodos() {
        localStorage.setItem("calendarItems", JSON.stringify(calendarItems));
    }




    submitButton.on("click", function () {


        var todoText = $(this).siblings("input").val();
        var timeText = $(this).parent().attr("id");


        if (todoText === "") {
            return;
        }

        var todoObject = {
            time: timeText,
            todo: todoText,
        }

        calendarItems.push(todoObject);
        textBox.value = "";



        renderTodos()
        storedTodos()
    })

})












