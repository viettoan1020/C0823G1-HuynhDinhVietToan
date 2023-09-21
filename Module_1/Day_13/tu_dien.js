
var tuDien = [
    { tu: 'hello', dich: 'xin chào' },
    { tu: 'world', dich: 'thế giới' },
    { tu: 'apple', dich: 'quả táo' },
    { tu: 'computer', dich: 'máy tính' },
    { tu: 'programming', dich: 'lập trình' },
    // Thêm các cặp từ khác vào đây
];
function dichTu() {

    var tuCanDich = document.getElementById('string').value.toLowerCase();

    var tuDaDich = tuDien.find(function(tu) {
        return tu.tu === tuCanDich;
    });

    if (tuDaDich) {
        document.getElementById('result').textContent = 'Dịch: ' + tuDaDich.dich;
    } else {
        document.getElementById('result').textContent = 'Từ không tồn tại trong từ điển';
    }
}
document.querySelector('button').addEventListener('click', dichTu);
