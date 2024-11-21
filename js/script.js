$(document).ready(function() {
    $("#show-tasks").click(function() {
        //Memanggil logika loadTasks
        loadTasks();
    });
});

function loadTasks() {
    //Membaca file JSON yang telah dibuat
    //Jika file JSON terbaca dan ada datanya tasknya, maka lanjutkan ke fungsi DisplayTasks
    $.getJSON("tasks.json", function(data) {
        if (data.tasks && data.tasks.length > 0) {
            displayTasks(data.tasks);
        } else {
            alert("Tidak ada Task");
        }
    }).fail(function() {
        alert("Gagal mengambil data JSON");
    });
}

function displayTasks(tasks) {
    /*
        Dari data JSON yang diterima dari parameter (berbentuk array),
        Silahkan lakukan looping setiap tasks nya untuk ditampilkan pada table
    */
    var taskList = $("#task-list");
    taskList.empty();
    
    tasks.forEach(function(task) {
        //Di sini ada menunjukkan data. Data dimasukin ke dalam table (row dan col.) 
        var status = task.completed ? "Completed" : "Not Completed";
        var color = task.completed ? "green" : "red";  
        
        var baris = 
            `<tr>
                <td>${task.text}</td>
                <td style = "color: ${color};">${status}</td>
            </tr>`
            ;
        taskList.append(baris);
    });
}