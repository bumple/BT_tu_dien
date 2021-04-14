const tiengViet = ["chó", "mèo", "thỏ", "sư tử", "tiến", "Đạt"]
const EngRip = ["dog", "cat", "rabbit", "lion", "handsome", "Musician"]
let result = ''

function search() {
    let flag = false
    let text = document.getElementById("inputText").value;
    console.log(text)
    for (let i = 0; i < EngRip.length; i++) {
        if (text === EngRip[i]) {
            result = tiengViet[i];
            flag = true
            break;
        }

    }
    if (flag === true) {

        document.getElementById("demo").innerHTML = result
    } else {
        document.getElementById("demo").innerHTML = " bạn đ biết j"
    }

}
