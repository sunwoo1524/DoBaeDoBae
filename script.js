const text = document.getElementById("text");
const enterCheck = document.getElementById("enter-check");
const repeatTime = document.getElementById("repeat-time");
const getResult = document.getElementById("get-result");

getResult.onclick = () => {
    if (text.value != "" && repeatTime.value > 0 && Number.isInteger(Number(repeatTime.value))) {
        let repeatText = "";

        for (let i = 0; i < repeatTime.value; i++) {
            if (enterCheck.checked && i != repeatTime.value - 1) {
                repeatText += text.value + "\n";
            } else {
                repeatText += text.value;
            }
        }

        navigator.clipboard.writeText(repeatText).then(() => {
            alert("반복한 텍스트가 클립보드에 복사되었습니다!");
        }, (err) => {
            alert("반복한 텍스트를 클립보드에 복사할 수 없습니다. ", err);
        });
    } else {
        alert("반복 횟수가 1 이상의 정수가 아니거나 반복할 텍스트가 없습니다.");
    }
}