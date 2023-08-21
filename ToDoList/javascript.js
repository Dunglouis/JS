

var todo = [
    "I will wake up at 8 in the morning",
    "I will practice html for 1 hour",
    "I will ive time for 2 hours css",
    "Then i will have breakfast"
]

const list = document.getElementById("list-infor-id")

for (let i in todo) {
    list.innerHTML += `
        <div class="list-infor-child">
            <p>${todo[i]}</p>
            <div class="list-infor-waste">
                <i class="far fa-trash-alt"></i>
            </div>
        </div>
    `
    console.log(i)

// in trong for hien tren html nhung js thi hien so of trong html thi undefined con trong js thi hienj nguyen van ban
}
